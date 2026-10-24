import ClubCta from "../sections/club/ClubCta";
import ClubHero from "../sections/club/ClubHero";
import History from "../sections/club/History";
import Strategy from "../sections/club/Strategy";
import Team from "../sections/club/Team";
import Values from "../sections/club/Values";
import Vision from "../sections/club/Vision";
import NameMeaning from "../sections/club/NameMeaning";
import Seo from "../components/Seo";
import { PAGES } from "../data/seo";

export default function Club() {
  return (
    <main>
      <Seo {...PAGES.club} />
      <ClubHero />
      <NameMeaning />
      <History />
      <Vision />
      <Strategy />
      <Values />
      <Team />
      <ClubCta />
    </main>
  );
}