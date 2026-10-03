import CtaBanner from "../components/CtaBanner";
import PageHeader from "../components/PageHeader";
import FlagshipSection from "../sections/services/FlagshipSection";
import OtherServices from "../sections/services/OtherServices";
import PhronesisSection from "../sections/services/PhronesisSection";

export default function Services() {
  return (
    <main>
      <PageHeader
        crumb="Nos Services"
        eyebrow="Nos Services"
        title="Deux produits phares. Une vision commune."
        subtitle="Phronesis Capital pour l'intelligence analytique. FlagShip pour l'investissement collectif. Deux piliers qui structurent l'offre d'Horizons Capital."
      />
      <PhronesisSection />
      <FlagshipSection />
      <OtherServices />
      <CtaBanner
        title="Accéder à l'ensemble de nos services."
        text="Rejoignez le club et profitez de l'intelligence de Phronesis Capital et de la puissance collective de FlagShip."
      />
    </main>
  );
}