import ClubCta from "../sections/club/ClubCta";
import ClubHero from "../sections/club/ClubHero";
import History from "../sections/club/History";
import Strategy from "../sections/club/Strategy";
import Team from "../sections/club/Team";
import Values from "../sections/club/Values";
import Vision from "../sections/club/Vision";

export default function Club() {
  return (
    <main>
      <ClubHero />
      <History />
      <Vision />
      <Strategy />
      <Values />
      <Team />
      <ClubCta />
    </main>
  );
}