#!/usr/bin/env bash
# Installe ou met à jour la landing ShopM (site statique) sur le VPS, à côté de la prod, sans y toucher.
#
# Écrit uniquement dans : /var/www/shopm-landing et le site nginx « shopm-landing ».
# La prod n'est que lue (adresse IP du domaine, adresse du dépôt).
#
# À lancer sur le VPS avec un utilisateur qui a sudo (pas en root) :
#   bash deploy-landing.sh [branche]        (par défaut : main)
# Relancer le script déploie la dernière version de la branche.
set -euo pipefail

DOMAIN="shopm-site.abdelsaliou.dev"
PROD_DOMAIN="shopm.abdelsaliou.dev"
ROOT="/var/www/shopm-landing"
SRC_DIR="$ROOT/src"
SITE_DIR="$ROOT/site"
SERVICE="shopm-landing"
BRANCH="${1:-main}"
NGINX_AVAILABLE="/etc/nginx/sites-available/$SERVICE"
NGINX_ENABLED="/etc/nginx/sites-enabled/$SERVICE"
CERT_DIR="/etc/letsencrypt/live/$DOMAIN"
# Dépôt de la landing : déduit de celui du frontend de prod (même compte GitHub, même protocole).
REPO="${LANDING_REPO:-$(git -C /var/www/shopm/frontend remote get-url origin | sed -E 's#[^/:]+(\.git)?$#shopm_landing.git#')}"

step() { printf '\n==> %s\n' "$*"; }
die() { printf '\nERREUR : %s\n' "$*" >&2; exit 1; }

check_prerequisites() {
  step "Vérifications"
  [[ "$EUID" -ne 0 ]] || die "lance ce script avec ton utilisateur, pas en root."
  command -v npm >/dev/null || die "npm est introuvable."

  local site_ip prod_ip
  site_ip="$(getent ahostsv4 "$DOMAIN" | awk 'NR==1 {print $1}')"
  prod_ip="$(getent ahostsv4 "$PROD_DOMAIN" | awk 'NR==1 {print $1}')"
  [[ -n "$site_ip" ]] || die "$DOMAIN ne résout pas encore : crée l'entrée DNS, puis relance."
  [[ "$site_ip" == "$prod_ip" ]] || die "$DOMAIN pointe sur $site_ip au lieu de $prod_ip."
  echo "OK (dépôt : $REPO, branche : $BRANCH)"
}

build_site() {
  step "Récupération et construction du site"
  sudo mkdir -p "$ROOT"
  sudo chown "$USER:$USER" "$ROOT"
  mkdir -p "$ROOT/certbot"

  [[ -d "$SRC_DIR/.git" ]] || git clone "$REPO" "$SRC_DIR"
  git -C "$SRC_DIR" fetch origin "$BRANCH"
  git -C "$SRC_DIR" checkout -q -B deploy FETCH_HEAD
  git -C "$SRC_DIR" reset -q --hard FETCH_HEAD
  git -C "$SRC_DIR" log -1 --format="landing : %h %s"

  cd "$SRC_DIR"
  nice -n 10 npm ci --no-audit --no-fund
  NODE_OPTIONS=--max-old-space-size=768 nice -n 10 npm run build
  cd - >/dev/null
  [[ -f "$SRC_DIR/out/index.html" ]] || die "la construction n'a pas produit out/index.html."

  # Bascule d'un coup vers la nouvelle version : le site en ligne n'est jamais à moitié copié.
  rm -rf "$SITE_DIR.new" "$SITE_DIR.old"
  cp -a "$SRC_DIR/out" "$SITE_DIR.new"
  [[ -d "$SITE_DIR" ]] && mv "$SITE_DIR" "$SITE_DIR.old"
  mv "$SITE_DIR.new" "$SITE_DIR"
  rm -rf "$SITE_DIR.old"
}

http_server_block() {
  cat <<NGINX
server {
    listen 80;
    server_name $DOMAIN;

    location /.well-known/acme-challenge/ {
        root $ROOT/certbot;
    }

    location / {
        return 301 https://\$host\$request_uri;
    }
}
NGINX
}

https_server_block() {
  cat <<NGINX

server {
    listen 443 ssl;
    server_name $DOMAIN;

    ssl_certificate $CERT_DIR/fullchain.pem;
    ssl_certificate_key $CERT_DIR/privkey.pem;

    root $SITE_DIR;
    index index.html;

    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml application/xml;

    # Fichiers de Next.js dont le nom change à chaque version : cache long.
    location /_next/static/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
        try_files \$uri =404;
    }

    location ~* \.(webp|jpg|jpeg|png|ico|svg|woff2)\$ {
        add_header Cache-Control "public, max-age=2592000";
        try_files \$uri =404;
    }

    location / {
        try_files \$uri \$uri/ \$uri.html =404;
    }

    error_page 404 /404.html;
}
NGINX
}

reload_nginx() {
  if ! sudo nginx -t 2>/dev/null; then
    sudo nginx -t || true
    sudo rm -f "$NGINX_ENABLED"
    die "configuration nginx invalide : le site de la landing a été retiré, nginx n'a pas été rechargé."
  fi
  sudo systemctl reload nginx
}

install_nginx_site() {
  step "Site nginx et certificat HTTPS"
  sudo ln -sf "$NGINX_AVAILABLE" "$NGINX_ENABLED"

  if ! sudo test -f "$CERT_DIR/fullchain.pem"; then
    http_server_block | sudo tee "$NGINX_AVAILABLE" >/dev/null
    reload_nginx
    # certonly n'écrit que le nouveau certificat et ne modifie aucun site.
    sudo certbot certonly --webroot -w "$ROOT/certbot" -d "$DOMAIN" --non-interactive --keep-until-expiring
  fi

  { http_server_block; https_server_block; } | sudo tee "$NGINX_AVAILABLE" >/dev/null
  reload_nginx
}

check_prerequisites
build_site
install_nginx_site

step "Terminé"
echo "Landing en ligne : https://$DOMAIN"
