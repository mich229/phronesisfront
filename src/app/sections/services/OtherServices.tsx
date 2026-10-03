import FeatureCard from "../../components/FeatureCard";
import SectionHeading from "../../components/SectionHeading";
import { allServices } from "../../data/services";

export default function OtherServices() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          className="mb-14"
          eyebrow="Services complémentaires"
          title="L'ensemble de notre offre."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allServices.map((s) => (
            <FeatureCard key={s.title} {...s} variant="large" />
          ))}
        </div>
      </div>
    </section>
  );
}