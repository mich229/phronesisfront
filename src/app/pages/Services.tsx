import CtaBanner from "../components/CtaBanner";
import PageHeader from "../components/PageHeader";
import FlagshipSection from "../sections/services/FlagshipSection";
import OtherServices from "../sections/services/OtherServices";
import PhronesisSection from "../sections/services/PhronesisSection";
import { PAGES } from "../data/seo";
import Seo from "../components/Seo";

export default function Services() {
  return (
    <main>
      <Seo {...PAGES.services} />
      <PageHeader
        crumb="Nos Services"
        eyebrow="Nos Services"
        title="Deux portefeuilles phares. Une vision commune."
        subtitle="Hikma pour l'intelligence analytique. FlagShip pour l'investissement collectif. Deux piliers qui structurent l'offre de Phronesis Capital."
      />
      <PhronesisSection />
      <FlagshipSection />
      <OtherServices />
      <CtaBanner
        title="Accéder à l'ensemble de nos services."
        text="Rejoignez le club et profitez de notre pôle Recherche & Analyse et de la puissance collective de FlagShip."
      />
    </main>
  );
}