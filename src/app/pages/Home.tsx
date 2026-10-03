import CtaBanner from "../components/CtaBanner";
import { KEY_FIGURES, SITE } from "../data/site";
import About from "../sections/home/About";
import BlogPreview from "../sections/home/BlogPreview";
import ClubIntro from "../sections/home/ClubIntro";
import FaqPreview from "../sections/home/FaqPreview";
import Hero from "../sections/home/Hero";
import HowItWorks from "../sections/home/HowItWorks";
import Performance from "../sections/home/Performance";
import ServicesPreview from "../sections/home/ServicesPreview";
import StatsBar from "../sections/home/StatsBar";
import Testimonials from "../sections/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <ClubIntro />
      <ServicesPreview />
      <HowItWorks />
      <Performance />
      <Testimonials />
      <BlogPreview />
      <FaqPreview />
      <About />
      <CtaBanner
        title={"Prêt à faire fructifier votre patrimoine\u00A0?"}
        text={`Rejoignez les ${KEY_FIGURES.members} membres qui investissent intelligemment avec ${SITE.name}.`}
      />
    </main>
  );
}