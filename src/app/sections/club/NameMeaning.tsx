import Logo from "../../components/Logo";

export default function NameMeaning() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 text-center md:flex-row md:text-left">
        <Logo variant="mark" tone="navy" size={130} className="shrink-0" />
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Notre nom</span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold text-foreground">
            Pourquoi «&nbsp;Phronesis&nbsp;»&nbsp;?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            <em>Phronêsis</em> est un mot grec ancien, que l'on retrouve chez Aristote : la sagesse
            pratique, c'est-à-dire la capacité de juger avec discernement ce qu'il convient de faire
            dans une situation concrète. C'est l'esprit que nous voulons mettre dans chacune de nos
            décisions d'investissement : décider ensemble, avec méthode et prudence.
          </p>
        </div>
      </div>
    </section>
  );
}