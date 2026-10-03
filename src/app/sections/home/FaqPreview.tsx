import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import FaqAccordion from "../../components/FaqAccordion";
import SectionHeading from "../../components/SectionHeading";
import { homeFaqs } from "../../data/home";

export default function FaqPreview() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading className="mb-10" eyebrow="FAQ" title="Questions fréquentes." />
        <FaqAccordion items={homeFaqs} />
        <div className="mt-8 text-center">
          <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-medium text-navy">
            Toutes les questions <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}