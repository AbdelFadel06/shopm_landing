import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Comment ShopM traite et protège les données de votre boutique et de vos employés.",
  alternates: { canonical: "/confidentialite/" },
};

export default function Confidentialite() {
  return (
    <LegalPage title="Politique de confidentialité" updated="9 novembre 2026">
      <p>
        Cette page explique quelles données ShopM utilise, pourquoi, et quels sont vos droits. Elle s’applique
        à l’application ShopM, à sa démo et à ce site.
      </p>

      <h2>1. Ce site</h2>
      <p>
        Ce site de présentation ne demande aucune information, ne dépose aucun cookie de suivi et n’utilise
        aucun outil de mesure d’audience ou de publicité.
      </p>

      <h2>2. Données traitées dans l’application</h2>
      <ul>
        <li>
          <strong>Comptes utilisateurs</strong> : nom, adresse email, téléphone éventuel, rôle, boutique
          d’affectation, photo de profil facultative.
        </li>
        <li>
          <strong>Données de la boutique</strong> : produits, photos, prix, stocks, ventes, sessions de caisse,
          transferts, inventaires et livraisons, y compris les coordonnées des clients à livrer.
        </li>
        <li>
          <strong>Données techniques</strong> : journaux de connexion et d’erreurs nécessaires à la sécurité et
          au bon fonctionnement, et, si vous l’acceptez, l’abonnement aux notifications de votre appareil.
        </li>
      </ul>

      <h2>3. Pourquoi nous les utilisons</h2>
      <p>
        Uniquement pour fournir le service : vous connecter, afficher et calculer vos ventes et vos stocks,
        envoyer les notifications utiles aux managers, assurer la sécurité et l’assistance. Vos données ne sont
        ni vendues, ni louées, ni utilisées à des fins publicitaires.
      </p>

      <h2>4. Où elles sont stockées</h2>
      <p>
        Les données sont hébergées sur un serveur dédié au service. Les photos des produits et des profils sont
        stockées chez Cloudinary, et les notifications passent par le service de notification du navigateur de
        votre appareil. Ces prestataires n’utilisent les données que pour rendre ce service.
      </p>

      <h2>5. Durée de conservation</h2>
      <p>
        Les données sont conservées tant que l’entreprise cliente utilise ShopM. À la fin du contrat, elles
        peuvent lui être remises puis sont supprimées, sauf obligation légale de conservation. Les données de la
        démo sont effacées chaque nuit.
      </p>

      <h2>6. Sécurité</h2>
      <p>
        Les échanges sont chiffrés (HTTPS), les mots de passe sont stockés sous forme chiffrée et chaque
        utilisateur n’accède qu’aux boutiques et aux fonctions prévues par son rôle.
      </p>

      <h2>7. Vos droits</h2>
      <p>
        Conformément à la loi n° 2017-20 portant code du numérique en République du Bénin, vous pouvez demander
        l’accès à vos données, leur rectification ou leur suppression, et vous opposer à leur traitement. Si
        vous êtes employé d’une entreprise cliente, vous pouvez aussi vous adresser à elle. En cas de
        désaccord, vous pouvez saisir l’Autorité de Protection des Données à caractère Personnel (APDP).
      </p>

      <h2>8. Contact</h2>
      <p>
        WhatsApp <a href={WHATSAPP_URL}>{WHATSAPP_DISPLAY}</a> ou <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
