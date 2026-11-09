import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = { title: "Conditions d’utilisation — ShopM" };

export default function Conditions() {
  return (
    <LegalPage title="Conditions d’utilisation" updated="9 novembre 2026">
      <p>
        Les présentes conditions encadrent l’utilisation de ShopM, application de gestion de boutique
        (ventes, caisse, stocks, transferts, inventaires, livraisons et rapports), ainsi que de son site de
        présentation et de sa démo. En utilisant ShopM, vous acceptez ces conditions.
      </p>

      <h2>1. Accès au service</h2>
      <p>
        L’accès à l’application se fait avec un compte créé par l’éditeur ou par l’administrateur de votre
        entreprise. Vous êtes responsable de la confidentialité de vos identifiants et de toute action faite
        avec votre compte. Signalez-nous sans attendre toute utilisation que vous n’avez pas autorisée.
      </p>

      <h2>2. Rôles et droits</h2>
      <p>
        Chaque compte reçoit un rôle (par exemple manager, caissier, vendeur, magasinier ou livreur) qui
        détermine ce qu’il peut voir et faire. L’entreprise cliente choisit qui a accès à quoi et reste
        responsable de l’attribution de ces rôles à ses employés.
      </p>

      <h2>3. Vos données</h2>
      <p>
        Les informations saisies dans ShopM (produits, prix, ventes, stocks, clients, employés) appartiennent à
        l’entreprise cliente. L’éditeur les utilise uniquement pour faire fonctionner le service. Leur
        traitement est décrit dans la{" "}
        <Link href="/confidentialite/">politique de confidentialité</Link>.
      </p>

      <h2>4. Utilisation acceptable</h2>
      <ul>
        <li>ne pas tenter d’accéder à des comptes, boutiques ou données qui ne vous sont pas attribués ;</li>
        <li>ne pas perturber le fonctionnement du service ni en contourner les protections ;</li>
        <li>ne pas utiliser ShopM pour une activité illégale ou pour enregistrer des contenus illicites.</li>
      </ul>
      <p>Un compte qui ne respecte pas ces règles peut être suspendu.</p>

      <h2>5. Démo publique</h2>
      <p>
        La démo est ouverte à tous avec des comptes partagés. Ses données sont fictives et entièrement remises
        à zéro chaque nuit. N’y saisissez aucune information réelle ou personnelle : tout ce qui y est
        enregistré est visible par les autres visiteurs jusqu’à la remise à zéro.
      </p>

      <h2>6. Disponibilité</h2>
      <p>
        Nous faisons notre possible pour que ShopM reste disponible et que les données soient sauvegardées
        régulièrement. Des interruptions peuvent toutefois survenir, notamment pour maintenance ou en cas de
        problème chez nos prestataires. Le service est fourni tel quel, sans garantie d’absence totale
        d’erreur.
      </p>

      <h2>7. Responsabilité</h2>
      <p>
        ShopM est un outil d’aide à la gestion. Les décisions commerciales, comptables et fiscales prises à
        partir de ses chiffres restent sous la responsabilité de l’entreprise cliente. L’éditeur ne peut être
        tenu responsable des pertes indirectes liées à l’utilisation ou à l’indisponibilité du service.
      </p>

      <h2>8. Modifications</h2>
      <p>
        Ces conditions peuvent évoluer avec le service. La date de mise à jour figure en haut de cette page ;
        en cas de changement important, les clients en sont informés.
      </p>

      <h2>9. Droit applicable et contact</h2>
      <p>
        Ces conditions sont soumises au droit béninois. Pour toute question : WhatsApp{" "}
        <a href={WHATSAPP_URL}>{WHATSAPP_DISPLAY}</a> ou <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
