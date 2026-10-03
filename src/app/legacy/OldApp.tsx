import { Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Club from "./pages/Club";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import Adhesion from "./pages/Adhesion";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="le-club" element={<Club />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="faq" element={<Faq />} />
        <Route path="adhesion" element={<Adhesion />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

// ─── Types ───────────────────────────────────────────────────────────────────

type Page = "home" | "services" | "blog" | "faq" | "adhesion" | "club";

// ─── Constants ───────────────────────────────────────────────────────────────

const NAVY = "#0D1B2E";
const GOLD = "#C8A84B";
const serif = { fontFamily: "'Playfair Display', Georgia, serif" };

// ─── Data ────────────────────────────────────────────────────────────────────

const perfData = [
  { m: "Jan 24", club: 100, ref: 100 },
  { m: "Avr 24", club: 108, ref: 102 },
  { m: "Jul 24", club: 119, ref: 105 },
  { m: "Oct 24", club: 129, ref: 108 },
  { m: "Jan 25", club: 141, ref: 110 },
  { m: "Avr 25", club: 155, ref: 113 },
  { m: "Jul 25", club: 163, ref: 115 },
];

const testimonials = [
  { name: "Marianne Kouassi", role: "Membre depuis 2022", text: "Rejoindre ce club a transformé ma vision de l'investissement. Mon portefeuille a progressé de 34 % en deux ans grâce à l'intelligence collective du groupe.", initials: "MK" },
  { name: "Théo Beaumont", role: "Membre depuis 2021", text: "La qualité des analyses et la rigueur des décisions collectives m'ont permis d'accéder à des opportunités que je n'aurais jamais pu identifier seul.", initials: "TB" },
  { name: "Sandra Diallo", role: "Membre depuis 2023", text: "Débutante en finance, le club m'a donné les outils, le savoir et la confiance pour investir sereinement. La pédagogie est au cœur de tout.", initials: "SD" },
];


const phronesisFeatures = [
  { icon: Database, title: "Analyse fondamentale", desc: "Évaluation rigoureuse des fondamentaux d'entreprise : bilans, ratios, avantages concurrentiels et perspectives de croissance." },
  { icon: BarChart2, title: "Intelligence de marché", desc: "Veille continue des marchés mondiaux, flux de capitaux, indicateurs macroéconomiques et signaux d'alerte en temps réel." },
  { icon: FileText, title: "Rapports sectoriels", desc: "Publications approfondies par secteur (tech, énergie, santé, finance) pour identifier les tendances et opportunités émergentes." },
  { icon: Shield, title: "Due diligence", desc: "Processus structuré d'évaluation des risques avant chaque décision d'investissement collectif du club." },
  { icon: Globe, title: "Veille macroéconomique", desc: "Analyse des politiques monétaires, cycles économiques et géopolitique mondiale pour anticiper les mouvements de marché." },
  { icon: Layers, title: "Formation avancée", desc: "Programmes de formation en analyse financière, valorisation d'entreprises et construction de portefeuille pour les membres." },
];

const flagshipFeatures = [
  { icon: PieChart, title: "Portefeuille diversifié mondial", desc: "Exposition équilibrée sur les grandes et moyennes capitalisations mondiales : Amérique du Nord, Europe, Asie et marchés émergents." },
  { icon: TrendingUp, title: "Stratégie croissance long terme", desc: "Approche axée sur la création de valeur durable, avec un horizon d'investissement de 3 à 10 ans sur chaque position." },
  { icon: Users, title: "Gouvernance démocratique", desc: "Chaque membre vote sur les décisions d'allocation. Transparence totale sur les positions, raisonnements et performances." },
  { icon: Zap, title: "Opportunités exclusives", desc: "Accès à des introductions en bourse, placements privés et co-investissements inaccessibles aux investisseurs individuels." },
  { icon: FileText, title: "Reporting mensuel", desc: "Rapport détaillé chaque mois : performance par position, attribution des gains, analyse des écarts et perspectives." },
  { icon: Lock, title: "Gestion du risque active", desc: "Règles strictes de diversification, stop-loss définis et couvertures sectorielles pour protéger le capital collectif." },
];

const allServices = [
  { icon: BarChart2, title: "Analyse de marché", desc: "Analyses hebdomadaires rédigées par nos experts pour orienter vos décisions avec clarté et précision." },
  { icon: Users, title: "Investissement collectif", desc: "Mutualisez vos ressources pour accéder ensemble à des opportunités réservées aux grands investisseurs." },
  { icon: BookOpen, title: "Formation continue", desc: "Webinaires, ateliers et bibliothèque de ressources pour renforcer votre culture financière." },
  { icon: Shield, title: "Gestion du risque", desc: "Outils de diversification et de suivi pour protéger et faire fructifier votre patrimoine en toute sérénité." },
  { icon: Globe, title: "Marchés internationaux", desc: "Explorez des opportunités sur les marchés émergents et développés aux quatre coins du globe." },
  { icon: TrendingUp, title: "Suivi de portefeuille", desc: "Application dédiée pour visualiser en temps réel l'évolution de vos investissements et performances." },
];

const allPosts = [
  { id: 1, cat: "Stratégie", featured: true, title: "Diversifier intelligemment son portefeuille en 2025 : les règles fondamentales", date: "10 juil. 2025", readTime: "5 min", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop&auto=format", excerpt: "La diversification reste la règle d'or de tout investisseur avisé. Découvrez les principes pour construire un portefeuille robuste face aux aléas des marchés." },
  { id: 2, cat: "Formation", featured: false, title: "ETF et fonds indiciels : l'essentiel pour débutants", date: "3 juil. 2025", readTime: "7 min", img: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=600&h=360&fit=crop&auto=format", excerpt: "Les ETF ont révolutionné l'accès aux marchés financiers. Un guide complet pour comprendre et intégrer ces instruments à votre stratégie." },
  { id: 3, cat: "Marché", featured: false, title: "Marchés émergents : tendances et opportunités en 2025", date: "27 juin 2025", readTime: "6 min", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=360&fit=crop&auto=format", excerpt: "Asie du Sud-Est, Afrique subsaharienne, Amérique latine : où se trouvent les meilleures opportunités parmi les économies en développement ?" },
  { id: 4, cat: "Actualités", featured: false, title: "Compte-rendu : assemblée générale du club — juin 2025", date: "20 juin 2025", readTime: "4 min", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=360&fit=crop&auto=format", excerpt: "Retour sur les décisions prises lors de notre assemblée générale : bilan semestriel, nouvelles allocations et cap stratégique." },
  { id: 5, cat: "Stratégie", featured: false, title: "Investissement ESG : entre performance financière et impact durable", date: "15 juin 2025", readTime: "8 min", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=360&fit=crop&auto=format", excerpt: "L'investissement responsable n'est plus un compromis sur la performance. Comment intégrer les critères ESG sans sacrifier le rendement." },
  { id: 6, cat: "Formation", featured: false, title: "Les ratios financiers indispensables pour analyser une action", date: "8 juin 2025", readTime: "10 min", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=360&fit=crop&auto=format", excerpt: "P/E, EV/EBITDA, ROE, dette nette… Maîtriser ces indicateurs clés vous permettra d'évaluer la santé financière d'une entreprise avec précision." },
];

const faqCategories = [
  {
    id: "general", label: "Général",
    items: [
      { q: "Qu'est-ce qu'un club d'investissement ?", a: "Un club d'investissement est une association de personnes qui mettent en commun leurs épargnes pour investir collectivement sur les marchés financiers. Chaque membre participe aux décisions et bénéficie des gains proportionnellement à sa mise." },
      { q: "Qui peut rejoindre Horizons Capital ?", a: "Toute personne majeure souhaitant investir collectivement et développer sa culture financière. Aucune expérience préalable n'est nécessaire — nous accueillons autant les débutants que les investisseurs chevronnés." },
      { q: "Comment fonctionne le club au quotidien ?", a: "Le club organise des réunions mensuelles pour analyser les marchés et voter sur les décisions d'investissement. Entre les réunions, les membres accèdent aux analyses, au forum communautaire et à leur tableau de bord via notre application." },
      { q: "Quelle est la vision à long terme du club ?", a: "Notre ambition est d'évoluer progressivement vers un fonds d'investissement agréé par les autorités compétentes. Cette évolution permettra à nos membres d'accéder à un spectre encore plus large d'instruments et de stratégies patrimoniales." },
    ],
  },
  {
    id: "adhesion", label: "Adhésion",
    items: [
      { q: "Comment rejoindre le club ?", a: "Complétez le formulaire d'adhésion en ligne. Notre équipe examine votre candidature et vous contacte sous 48 heures pour un entretien de présentation. Une fois validé, vous recevez vos accès et pouvez participer dès la prochaine réunion mensuelle." },
      { q: "Quel est le montant minimum pour investir ?", a: "Le montant minimum de participation aux investissements collectifs est de 500 €. Vous adaptez librement votre contribution à vos capacités et objectifs, sans plafond maximum." },
      { q: "Peut-on quitter le club à tout moment ?", a: "Oui, vous pouvez soumettre une demande de retrait à tout moment. Le remboursement de votre part du portefeuille collectif est effectué selon les modalités définies dans le règlement intérieur, généralement dans un délai de 30 jours." },
      { q: "Les cotisations mensuelles sont-elles remboursables ?", a: "Les cotisations couvrent l'accès aux services du club (analyses, webinaires, application). Elles ne sont pas remboursables une fois le mois entamé, mais vous pouvez résilier votre abonnement à tout moment pour les mois suivants." },
    ],
  },
  {
    id: "investment", label: "Investissement",
    items: [
      { q: "Comment sont prises les décisions d'investissement ?", a: "Collectivement, lors de réunions mensuelles. Chaque membre dispose d'un droit de vote proportionnel à sa participation au capital collectif. Les propositions sont préparées par notre équipe d'analyse (Phronesis Capital) et présentées en réunion pour délibération." },
      { q: "Quels types d'actifs le club investit-il ?", a: "Le club investit principalement en actions cotées (grandes et moyennes capitalisations mondiales), ETF sectoriels et obligations. Notre portefeuille FlagShip maintient une diversification géographique et sectorielle stricte." },
      { q: "Comment sont gérés les risques ?", a: "La diversification est au cœur de notre stratégie : pas plus de 10 % du portefeuille sur un seul titre, exposition équilibrée entre secteurs et zones géographiques. Notre équipe Phronesis Capital assure une veille continue des risques macroéconomiques." },
      { q: "Quelle est la performance historique du club ?", a: "Depuis le lancement en 2021, le portefeuille collectif affiche une performance cumulée de +63,2 %, contre +14,7 % pour l'indice de référence sur la même période. Ces chiffres sont vérifiables et communiqués à chaque rapport trimestriel." },
    ],
  },
  {
    id: "tech", label: "Application",
    items: [
      { q: "Comment accéder à mon portefeuille ?", a: "Via notre application dédiée aux membres, accessible sur web, iOS et Android. Vous recevez vos identifiants par e-mail après validation de votre adhésion. L'application permet de suivre votre portefeuille, consulter les rapports et participer aux votes." },
      { q: "L'application est-elle disponible hors connexion ?", a: "Les données de portefeuille nécessitent une connexion pour être actualisées. Cependant, les rapports PDF téléchargés restent accessibles hors ligne sur votre appareil." },
      { q: "Comment contacter le support ?", a: "Par e-mail à support@horizons-capital.fr (réponse sous 24h en jours ouvrés), via le chat intégré à l'application ou par téléphone du lundi au vendredi, 9h–18h." },
      { q: "Mes données financières sont-elles sécurisées ?", a: "Oui. Toutes les communications sont chiffrées (TLS 1.3), les données sont hébergées en France (RGPD), et nous appliquons une authentification à deux facteurs obligatoire." },
    ],
  },
];

// ─── Shared: Navbar ───────────────────────────────────────────────────────────

interface NavProps {
  page: Page;
  navigate: (p: Page, anchor?: string) => void;
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  openDrop: "services" | "resources" | null;
  setOpenDrop: (v: "services" | "resources" | null) => void;
}

function Navbar({ page, navigate, scrolled, menuOpen, setMenuOpen, openDrop, setOpenDrop }: NavProps) {
  const isHome = page === "home";

  const navTo = (p: Page, anchor?: string) => {
    setMenuOpen(false);
    setOpenDrop(null);
    navigate(p, anchor);
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={{ background: scrolled ? NAVY : `${NAVY}cc`, backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navTo("home")}
            className="flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: GOLD }}>
              <TrendingUp size={15} style={{ color: NAVY }} />
            </div>
            <span className="text-white font-semibold text-lg leading-none" style={serif}>
              Horizons Capital
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => navTo("club")}
              className="text-sm transition-colors"
              style={{ color: page === "club" ? GOLD : "rgba(255,255,255,0.7)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = page === "club" ? GOLD : "rgba(255,255,255,0.7)")}
            >
              Le Club
            </button>

            {/* Nos Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDrop("services")}
              onMouseLeave={() => setOpenDrop(null)}
            >
              <button
                className="flex items-center gap-1 text-sm transition-colors"
                style={{ color: page === "services" ? GOLD : "rgba(255,255,255,0.7)" }}
              >
                Nos Services
                <ChevronDown
                  size={13}
                  style={{ transform: openDrop === "services" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" }}
                />
              </button>
              {openDrop === "services" && (
                <div
                  className="absolute top-full left-0 mt-3 w-52 rounded-lg shadow-2xl overflow-hidden border"
                  style={{ background: "white", borderColor: "rgba(13,27,46,0.1)" }}
                >
                  <button
                    onClick={() => navTo("services")}
                    className="w-full flex items-center gap-2.5 px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors font-medium"
                  >
                    <BarChart2 size={14} style={{ color: GOLD }} />
                    Tous les services
                  </button>
                  <div className="h-px mx-4" style={{ background: "rgba(13,27,46,0.08)" }} />
                  <button
                    onClick={() => navTo("services", "phronesis")}
                    className="w-full flex items-center gap-2.5 px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors"
                  >
                    <Database size={14} style={{ color: GOLD }} />
                    Phronesis Capital
                  </button>
                  <button
                    onClick={() => navTo("services", "flagship")}
                    className="w-full flex items-center gap-2.5 px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors"
                  >
                    <PieChart size={14} style={{ color: GOLD }} />
                    FlagShip
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => navTo("adhesion")}
              className="text-sm transition-colors"
              style={{ color: page === "adhesion" ? GOLD : "rgba(255,255,255,0.7)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = page === "adhesion" ? GOLD : "rgba(255,255,255,0.7)")}
            >
              Adhésion
            </button>
            <button
              onClick={() => navTo("club", "histoire")}
              className="text-sm transition-colors"
              style={{ color: "rgba(255,255,255,0.7)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            >
              À propos
            </button>

            {/* Ressources dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDrop("resources")}
              onMouseLeave={() => setOpenDrop(null)}
            >
              <button
                className="flex items-center gap-1 text-sm transition-colors"
                style={{ color: page === "blog" || page === "faq" ? GOLD : "rgba(255,255,255,0.7)" }}

              >
                Ressources
                <ChevronDown
                  size={13}
                  style={{ transform: openDrop === "resources" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" }}
                />
              </button>
              {openDrop === "resources" && (
                <div
                  className="absolute top-full left-0 mt-3 w-44 rounded-lg shadow-2xl overflow-hidden border"
                  style={{ background: "white", borderColor: "rgba(13,27,46,0.1)" }}
                >
                  <button
                    onClick={() => navTo("blog")}
                    className="w-full flex items-center gap-2.5 px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors"
                  >
                    <BookOpen size={14} style={{ color: GOLD }} />
                    Blog
                  </button>
                  <div className="h-px mx-4" style={{ background: "rgba(13,27,46,0.08)" }} />
                  <button
                    onClick={() => navTo("faq")}
                    className="w-full flex items-center gap-2.5 px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors"
                  >
                    <HelpCircle size={14} style={{ color: GOLD }} />
                    FAQ
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="flex items-center gap-1.5 text-sm transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}>
              <ExternalLink size={13} /> Espace Membre
            </a>
            <button
              onClick={() => navTo("adhesion")}
              className="flex items-center gap-2 px-5 py-2 rounded text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: GOLD, color: NAVY }}
            >
              Rejoindre <ArrowRight size={13} />
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-white p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-[68px] px-6 pb-8 gap-1 overflow-y-auto" style={{ background: NAVY }}>
          {[
            { label: "Le Club", action: () => navTo("club") },
            { label: "Notre histoire", action: () => navTo("club", "histoire") },
            { label: "Équipe & Bureau", action: () => navTo("club", "equipe") },
            { label: "Nos valeurs", action: () => navTo("club", "valeurs") },
            { label: "Tous les services", action: () => navTo("services") },
            { label: "Phronesis Capital", action: () => navTo("services", "phronesis") },
            { label: "FlagShip", action: () => navTo("services", "flagship") },
            { label: "Adhésion", action: () => navTo("adhesion") },
            { label: "Blog", action: () => navTo("blog") },
            { label: "FAQ", action: () => navTo("faq") },
          ].map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              className="text-left py-3.5 border-b text-base transition-colors"
              style={{ color: "rgba(255,255,255,0.8)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              {label}
            </button>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <a href="#" className="flex items-center justify-center gap-2 py-3.5 rounded text-sm font-semibold border text-white hover:bg-white/10 transition-colors" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
              <ExternalLink size={15} /> Espace Membre
            </a>
            <button
              onClick={() => navTo("adhesion")}
              className="flex items-center justify-center gap-2 py-3.5 rounded text-sm font-semibold"
              style={{ background: GOLD, color: NAVY }}
            >
              Rejoindre le club <ArrowRight size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Shared: Footer ───────────────────────────────────────────────────────────

function Footer({ navigate }: { navigate: (p: Page, anchor?: string) => void }) {
  return (
    <footer style={{ background: "#07101A", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded flex items-center justify-center flex-shrink-0" style={{ background: GOLD }}>
                <TrendingUp size={13} style={{ color: NAVY }} />
              </div>
              <span className="text-white font-semibold" style={serif}>Horizons Capital</span>
            </div>
            <p className="text-sm leading-relaxed">Investir ensemble, croître ensemble. Le club d'investissement qui démocratise la finance pour tous.</p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded flex items-center justify-center transition-colors hover:text-white" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Navigation</h4>
            <div className="flex flex-col gap-3 text-sm">
              {[["Le Club", "club", ""], ["Notre histoire", "club", "histoire"], ["Équipe", "club", "equipe"], ["Nos Services", "services", ""], ["Adhésion", "adhesion", ""]].map(([label, p, anchor]) => (
                <button key={label} onClick={() => navigate(p as Page, anchor || undefined)} className="text-left hover:text-white transition-colors">{label}</button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Nos produits</h4>
            <div className="flex flex-col gap-3 text-sm">
              {[["Phronesis Capital", "services", "phronesis"], ["FlagShip", "services", "flagship"], ["Blog", "blog", ""], ["FAQ", "faq", ""]].map(([label, p, anchor]) => (
                <button key={label} onClick={() => navigate(p as Page, anchor || undefined)} className="text-left hover:text-white transition-colors">{label}</button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2"><Mail size={13} style={{ color: GOLD, flexShrink: 0 }} /><span>contact@horizons-capital.fr</span></div>
              <div className="flex items-center gap-2"><Phone size={13} style={{ color: GOLD, flexShrink: 0 }} /><span>+33 1 23 45 67 89</span></div>
              <div className="flex items-start gap-2"><MapPin size={13} style={{ color: GOLD, flexShrink: 0, marginTop: 2 }} /><span>12 Rue de la Bourse<br />75002 Paris, France</span></div>
            </div>
            <a href="#" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold transition-all hover:opacity-90" style={{ background: GOLD, color: NAVY }}>
              <ExternalLink size={13} /> Espace Membre
            </a>
          </div>
        </div>

        {/* Risk disclaimer */}
        <div
          className="rounded-lg p-5 mb-8 text-xs leading-relaxed"
          style={{ background: "rgba(255,255,255,0.04)", borderLeft: `3px solid ${GOLD}40`, color: "rgba(255,255,255,0.38)" }}
        >
          <p className="font-semibold mb-1.5 uppercase tracking-widest text-[10px]" style={{ color: `${GOLD}80` }}>
            Avertissement sur les risques — Information importante
          </p>
          <p>
            L'investissement en bourse et dans des sociétés non cotées comporte des risques de perte en capital, partiels ou totaux. Les performances passées ne préjugent pas des performances futures. La valeur des investissements peut fluctuer à la hausse comme à la baisse en fonction des conditions de marché, de la conjoncture économique, des taux d'intérêt et d'autres facteurs imprévisibles. Les investissements dans des sociétés non cotées sont par nature illiquides et comportent des risques supplémentaires liés à l'absence de marché secondaire organisé, à la difficulté d'évaluation et à la dépendance aux décisions de gestion de l'émetteur. Avant tout investissement, nous vous recommandons de consulter un conseiller financier indépendant et de vous assurer que l'investissement est adapté à votre situation personnelle, vos objectifs et votre tolérance au risque. Horizons Capital ne fournit pas de conseil en investissement au sens réglementaire du terme.
          </p>
        </div>

        <div className="border-t pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <p>© 2025 Horizons Capital. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-5 justify-center">
            {["Mentions légales", "Politique de confidentialité", "CGU"].map((item) => (
              <button key={item} className="hover:text-white transition-colors">{item}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page: Home ───────────────────────────────────────────────────────────────

function HomePage({ navigate }: { navigate: (p: Page, anchor?: string) => void }) {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const homeFaqs = [
    { q: "Qui peut rejoindre le club ?", a: "Toute personne majeure souhaitant investir collectivement et développer sa culture financière. Aucune expérience préalable n'est nécessaire." },
    { q: "Quel est le montant minimum pour investir ?", a: "Le montant minimum de participation aux investissements collectifs est de 500 €." },
    { q: "Comment accéder à mon portefeuille ?", a: "Via notre application dédiée, accessible sur web, iOS et Android après validation de votre adhésion." },
    { q: "Le club est-il encadré réglementairement ?", a: "Oui, le club opère dans le cadre légal des clubs d'investissement. L'évolution vers un fonds agréé est planifiée." },
    { q: "Comment sont prises les décisions d'investissement ?", a: "Collectivement, lors de réunions mensuelles. Chaque membre dispose d'un droit de vote proportionnel à sa participation." },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
    }
  };

  return (
    <main>
      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: NAVY }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop&auto=format" alt="" className="w-full h-full object-cover" style={{ opacity: 0.15 }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY}ee 50%, #162A45 100%)` }} />
          <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(200,168,75,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,0.04) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full grid lg:grid-cols-[1fr_420px] gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border text-xs font-semibold uppercase tracking-widest" style={{ background: `${GOLD}15`, borderColor: `${GOLD}30`, color: GOLD }}>
              Club d'Investissement
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-[4.5rem] font-bold text-white leading-[1.1] mb-6" style={serif}>
              Investir <span style={{ color: GOLD }}>ensemble</span>,<br />croître<br />ensemble.
            </h1>
            <p className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
              Horizons Capital démocratise l'accès aux marchés financiers. Rejoignez une communauté d'investisseurs engagés et faites fructifier votre patrimoine collectivement.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => navigate("adhesion")} className="flex items-center gap-2 px-7 py-3.5 rounded font-semibold text-sm transition-all hover:opacity-90" style={{ background: GOLD, color: NAVY }}>
                Rejoindre le club <ArrowRight size={15} />
              </button>
              <a href="#" className="flex items-center gap-2 px-7 py-3.5 rounded font-semibold text-sm border text-white transition-all hover:bg-white/10" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                <ExternalLink size={15} /> Espace Membre
              </a>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-4">
            <div className="rounded-xl p-6 border" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>Performance depuis le lancement</p>
              <p className="text-5xl font-bold" style={{ ...serif, color: GOLD }}>+63,2 %</p>
              <p className="text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>vs. +14,7 % pour l'indice de référence</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ label: "Membres actifs", value: "247" }, { label: "Actifs gérés", value: "2,4 M€" }].map(({ label, value }) => (
                <div key={label} className="rounded-xl p-5 border" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</p>
                  <p className="text-3xl font-bold text-white" style={serif}>{value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl p-5 border flex items-center gap-4" style={{ background: `${GOLD}10`, borderColor: `${GOLD}25` }}>
              <ExternalLink size={18} style={{ color: GOLD, flexShrink: 0 }} />
              <div>
                <p className="text-sm font-semibold text-white">Espace Membre</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>Accédez à votre portefeuille en temps réel</p>
              </div>
              <a href="#" className="ml-auto text-xs font-semibold px-3 py-1.5 rounded transition-all hover:opacity-80" style={{ background: GOLD, color: NAVY }}>Se connecter</a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>Découvrir</span>
          <ChevronDown size={16} style={{ color: "rgba(255,255,255,0.25)" }} />
        </div>
      </section>

      {/* Stats */}
      <div className="border-b" style={{ background: "#0A1520", borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[{ label: "Membres actifs", value: "247" }, { label: "Années d'existence", value: "4" }, { label: "Rendement moyen annuel", value: "+31 %" }, { label: "Actifs sous gestion", value: "2,4 M€" }].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold" style={{ ...serif, color: GOLD }}>{value}</p>
              <p className="text-xs mt-1.5 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Le Club */}
      <section id="club" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Le Club</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground leading-snug" style={serif}>
              L'investissement n'est plus réservé à quelques-uns.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Horizons Capital est fondé sur une conviction simple : l'intelligence collective surpasse l'expertise individuelle. Nous réunissons des professionnels, des étudiants et des passionnés de finance autour d'une même ambition.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {["Décisions transparentes et collectives", "Accompagnement pédagogique continu", "Évolution planifiée vers un fonds d'investissement agréé"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={17} className="mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={() => navigate("adhesion")} className="flex items-center gap-2 px-7 py-3.5 rounded font-semibold text-sm transition-all hover:opacity-90" style={{ background: NAVY, color: "#F4F1EA" }}>
                Nous rejoindre <ArrowRight size={15} />
              </button>
              <button onClick={() => navigate("club")} className="flex items-center gap-2 px-7 py-3.5 rounded font-semibold text-sm border transition-all hover:bg-foreground/5" style={{ borderColor: "rgba(13,27,46,0.2)", color: NAVY }}>
                En savoir plus <ArrowRight size={15} />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl" style={{ background: `${GOLD}08` }} />
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=500&fit=crop&auto=format" alt="Réunion du club" className="relative w-full rounded-xl object-cover shadow-2xl" />
            <div className="absolute -bottom-5 -left-5 rounded-xl px-6 py-4 shadow-xl" style={{ background: GOLD, color: NAVY }}>
              <p className="text-3xl font-bold" style={serif}>+63 %</p>
              <p className="text-xs font-semibold mt-0.5">Performance depuis le lancement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos services (aperçu) */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Nos Services</span>
            <h2 className="mt-3 text-4xl font-bold text-foreground" style={serif}>Tout ce qu'il vous faut pour investir bien.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Deux produits phares, six services complémentaires — conçus pour chaque étape de votre parcours financier.</p>
          </div>
          {/* Products cards */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {[
              { id: "phronesis", icon: Database, name: "Phronesis Capital", tagline: "Intelligence & Analyse", desc: "Notre division recherche. Analyses fondamentales, rapports sectoriels, veille macroéconomique et due diligence pour des décisions éclairées." },
              { id: "flagship", icon: PieChart, name: "FlagShip", tagline: "Portefeuille collectif phare", desc: "Le véhicule d'investissement principal du club. Portefeuille diversifié mondialement, gouvernance démocratique et reporting mensuel transparent." },
            ].map(({ id, icon: Icon, name, tagline, desc }) => (
              <button
                key={id}
                onClick={() => navigate("services", id)}
                className="text-left rounded-xl p-8 border border-border bg-card hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: `${GOLD}15` }}>
                    <Icon size={21} style={{ color: GOLD }} />
                  </div>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors mt-1" />
                </div>
                <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: GOLD }}>{tagline}</p>
                <h3 className="text-xl font-semibold text-foreground mb-3" style={serif}>{name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </button>
            ))}
          </div>
          <div className="text-center">
            <button onClick={() => navigate("services")} className="inline-flex items-center gap-2 text-sm font-medium transition-colors" style={{ color: NAVY }}>
              Voir tous les services <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Comment ça marche</span>
            <h2 className="mt-3 text-4xl font-bold text-foreground" style={serif}>Quatre étapes vers votre liberté financière.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { n: "01", title: "Candidature en ligne", desc: "Complétez votre demande d'adhésion. Notre équipe examine votre profil et vous répond sous 48 heures." },
              { n: "02", title: "Entretien personnalisé", desc: "Définissons ensemble votre profil d'investisseur et alignons la stratégie avec vos objectifs de vie." },
              { n: "03", title: "Investissez collectivement", desc: "Participez aux réunions mensuelles, votez sur les décisions et contribuez à la stratégie commune." },
              { n: "04", title: "Suivez votre croissance", desc: "Consultez votre tableau de bord à tout moment pour mesurer en temps réel la performance de votre portefeuille." },
            ].map(({ n, title, desc }, i) => (
              <div key={n} className="relative">
                {i < 3 && <div className="hidden lg:block absolute top-8 left-full w-full h-px" style={{ background: `linear-gradient(90deg, ${GOLD}40, transparent)` }} />}
                <div className="text-7xl font-bold leading-none mb-4 select-none" style={{ ...serif, color: `${GOLD}25` }}>{n}</div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="py-28" style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 grid lg:grid-cols-[1fr_auto] items-end gap-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Performance</span>
              <h2 className="mt-3 text-4xl font-bold text-white" style={serif}>Des résultats qui parlent d'eux-mêmes.</h2>
              <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.5)" }}>Notre portefeuille collectif surperforme régulièrement les indices de référence depuis le lancement du club.</p>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{ background: GOLD }} /><span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>Portefeuille Club</span></div>
              <div className="flex items-center gap-2"><div className="w-8 h-0 border-t-2 border-dashed" style={{ borderColor: "rgba(255,255,255,0.35)" }} /><span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>Indice de référence</span></div>
            </div>
          </div>
          <div className="rounded-xl p-8 border" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={perfData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient key="grad-club" id="homeGClub" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={GOLD} stopOpacity={0.25} />
                    <stop offset="95%" stopColor={GOLD} stopOpacity={0} />
                  </linearGradient>
                  <linearGradient key="grad-ref" id="homeGRef" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffffff" stopOpacity={0.08} />
                    <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="m" stroke="rgba(255,255,255,0.15)" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }} />
                <YAxis stroke="rgba(255,255,255,0.15)" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }} domain={[95, 175]} />
                <Tooltip contentStyle={{ background: "#0D1B2E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#fff", fontSize: 12 }} formatter={(val: number, key: string) => [`${val}`, key === "club" ? "Portefeuille Club" : "Indice"]} />
                <Area name="Portefeuille Club" type="monotone" dataKey="club" stroke={GOLD} strokeWidth={2.5} fill="url(#homeGClub)" dot={false} />
                <Area name="Indice de référence" type="monotone" dataKey="ref" stroke="rgba(255,255,255,0.35)" strokeWidth={1.5} strokeDasharray="5 4" fill="url(#homeGRef)" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>Les performances passées ne préjugent pas des performances futures. Base 100 = janvier 2024.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Témoignages</span>
            <h2 className="mt-3 text-4xl font-bold text-foreground" style={serif}>Ce que disent nos membres.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map(({ name, role, text, initials }) => (
              <div key={name} className="bg-card border border-border rounded-xl p-8 flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-5xl leading-none font-serif" style={{ color: `${GOLD}40` }}>"</div>
                <p className="text-foreground leading-relaxed text-sm flex-1">{text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: `${GOLD}20`, color: GOLD }}>{initials}</div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{name}</p>
                    <p className="text-muted-foreground text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Blog</span>
              <h2 className="mt-3 text-4xl font-bold text-foreground" style={serif}>Derniers articles.</h2>
            </div>
            <button onClick={() => navigate("blog")} className="flex items-center gap-2 text-sm font-medium transition-colors" style={{ color: NAVY }}>
              Voir tous les articles <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {allPosts.slice(0, 3).map(({ id, cat, title, date, img }) => (
              <article key={id} className="group cursor-pointer" onClick={() => navigate("blog")}>
                <div className="aspect-video bg-muted rounded-xl overflow-hidden mb-5">
                  <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>{cat}</span>
                <h3 className="mt-2 font-semibold text-foreground leading-snug" style={serif}>{title}</h3>
                <p className="mt-2 text-muted-foreground text-xs">{date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>FAQ</span>
            <h2 className="mt-3 text-4xl font-bold text-foreground" style={serif}>Questions fréquentes.</h2>
          </div>
          <div className="flex flex-col">
            {homeFaqs.map(({ q, a }, i) => (
              <div key={i} className="border-b" style={{ borderColor: "rgba(13,27,46,0.1)" }}>
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full flex items-center justify-between gap-4 py-5 text-left">
                  <span className="font-medium text-foreground">{q}</span>
                  {faqOpen === i ? <Minus size={16} className="flex-shrink-0" style={{ color: GOLD }} /> : <Plus size={16} className="flex-shrink-0 text-muted-foreground" />}
                </button>
                {faqOpen === i && <p className="pb-5 text-muted-foreground text-sm leading-relaxed">{a}</p>}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button onClick={() => navigate("faq")} className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: NAVY }}>
              Toutes les questions <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="apropos" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=500&fit=crop&auto=format" alt="L'équipe Horizons Capital" className="w-full rounded-xl object-cover shadow-2xl" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>À propos</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground leading-snug" style={serif}>Une vision à long terme pour un impact durable.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">Fondé en 2021, Horizons Capital est né d'une conviction : rendre l'investissement accessible à tous, indépendamment du capital de départ ou de l'expérience préalable.</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">Notre ambition à long terme est d'évoluer vers un fonds d'investissement agréé, permettant à nos membres d'accéder à un éventail encore plus large d'instruments financiers et de stratégies patrimoniales.</p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[{ label: "Fondé en", value: "2021" }, { label: "Pays représentés", value: "12" }, { label: "Réunions tenues", value: "48+" }, { label: "Taux de satisfaction", value: "97 %" }].map(({ label, value }) => (
                <div key={label} className="pl-4 border-l-2" style={{ borderColor: GOLD }}>
                  <p className="text-2xl font-bold text-foreground" style={serif}>{value}</p>
                  <p className="text-muted-foreground text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28" style={{ background: NAVY }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white" style={serif}>Prêt à faire fructifier votre patrimoine ?</h2>
          <p className="mt-6 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>Rejoignez les 247 membres qui investissent intelligemment avec Horizons Capital.</p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button onClick={() => navigate("adhesion")} className="flex items-center gap-2 px-8 py-4 rounded font-semibold text-sm transition-all hover:opacity-90" style={{ background: GOLD, color: NAVY }}>
              Rejoindre le club <ArrowRight size={16} />
            </button>
            <a href="#" className="flex items-center gap-2 px-8 py-4 rounded font-semibold text-sm text-white transition-all hover:bg-white/10 border" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
              <ExternalLink size={16} /> Espace Membre
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── Page: Services ───────────────────────────────────────────────────────────

function ServicesPage({ navigate }: { navigate: (p: Page, anchor?: string) => void }) {
  return (
    <main>
      {/* Page header */}
      <div className="pt-[68px]" style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-xs mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
            <button onClick={() => navigate("home")} className="hover:text-white transition-colors">Accueil</button>
            <span>/</span>
            <span style={{ color: GOLD }}>Nos Services</span>
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Nos Services</span>
          <h1 className="mt-3 text-5xl font-bold text-white max-w-2xl leading-tight" style={serif}>
            Deux produits phares. Une vision commune.
          </h1>
          <p className="mt-5 text-lg max-w-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Phronesis Capital pour l'intelligence analytique. FlagShip pour l'investissement collectif. Deux piliers qui structurent l'offre d'Horizons Capital.
          </p>
        </div>
      </div>

      {/* ── PHRONESIS CAPITAL ── */}
      <section id="phronesis" className="py-28" style={{ background: "#0A1520" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: `${GOLD}20` }}>
                  <Database size={20} style={{ color: GOLD }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Division Recherche</p>
                  <h2 className="text-3xl font-bold text-white" style={serif}>Phronesis Capital</h2>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                Du grec <em style={{ color: GOLD }}>phronésis</em> — la sagesse pratique. Notre division d'analyse et d'intelligence financière fournit l'infrastructure analytique qui guide chaque décision d'investissement du club.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
                Phronesis Capital produit des analyses fondamentales approfondies, des rapports sectoriels, une veille macroéconomique continue et assure la due diligence avant chaque investissement collectif. C'est le cerveau analytique d'Horizons Capital.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Analyse fondamentale", "Rapports sectoriels", "Due diligence", "Veille macro"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium border" style={{ borderColor: `${GOLD}30`, color: GOLD, background: `${GOLD}10` }}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=460&fit=crop&auto=format" alt="Analyse de données financières" className="w-full rounded-xl object-cover shadow-2xl" />
              <div className="absolute inset-0 rounded-xl" style={{ background: "linear-gradient(to top, rgba(10,21,32,0.6) 0%, transparent 50%)" }} />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-lg p-4 border" style={{ background: "rgba(10,21,32,0.8)", borderColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: GOLD }}>Dernière publication</p>
                  <p className="text-white text-sm font-medium">Rapport Q2 2025 — Marchés émergents d'Asie</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {phronesisFeatures.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl p-6 border" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${GOLD}15` }}>
                  <Icon size={18} style={{ color: GOLD }} />
                </div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLAGSHIP ── */}
      <section id="flagship" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 rounded-2xl" style={{ background: `${GOLD}06` }} />
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=460&fit=crop&auto=format" alt="Portefeuille d'investissement" className="relative w-full rounded-xl object-cover shadow-2xl" />
              <div className="absolute -bottom-5 -right-5 rounded-xl px-6 py-4 shadow-xl hidden lg:block" style={{ background: GOLD, color: NAVY }}>
                <p className="text-2xl font-bold" style={serif}>+63,2 %</p>
                <p className="text-xs font-semibold mt-0.5">Performance cumulée</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: `${GOLD}15` }}>
                  <PieChart size={20} style={{ color: GOLD }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Portefeuille collectif phare</p>
                  <h2 className="text-3xl font-bold text-foreground" style={serif}>FlagShip</h2>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Le véhicule d'investissement principal d'Horizons Capital. FlagShip est le portefeuille collectif phare du club — diversifié, transparent, gouverné démocratiquement par ses membres.
              </p>
              <p className="leading-relaxed mb-8 text-muted-foreground">
                Chaque membre contribue selon ses capacités et participe aux décisions d'allocation. Les analyses de Phronesis Capital alimentent les décisions du FlagShip, créant une chaîne de valeur intégrée de la recherche à l'exécution.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[{ label: "Positions actives", value: "24" }, { label: "Marchés couverts", value: "8" }, { label: "Diversification", value: "100%" }].map(({ label, value }) => (
                  <div key={label} className="bg-secondary rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-foreground" style={serif}>{value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {flagshipFeatures.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl p-6 border border-border bg-card hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${GOLD}15` }}>
                  <Icon size={18} style={{ color: GOLD }} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTRES SERVICES ── */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Services complémentaires</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground" style={serif}>L'ensemble de notre offre.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-xl p-7 border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: `${GOLD}10` }}>
                  <Icon size={21} style={{ color: GOLD }} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: NAVY }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white" style={serif}>Accédez à l'ensemble de nos services.</h2>
          <p className="mt-5 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>Rejoignez le club et profitez de l'intelligence de Phronesis Capital et de la puissance collective de FlagShip.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button onClick={() => navigate("adhesion")} className="flex items-center gap-2 px-8 py-4 rounded font-semibold text-sm transition-all hover:opacity-90" style={{ background: GOLD, color: NAVY }}>
              Rejoindre le club <ArrowRight size={16} />
            </button>
            <a href="#" className="flex items-center gap-2 px-8 py-4 rounded font-semibold text-sm text-white border transition-all hover:bg-white/10" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
              <ExternalLink size={16} /> Espace Membre
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── Page: Blog ───────────────────────────────────────────────────────────────

function BlogPage({ navigate }: { navigate: (p: Page, anchor?: string) => void }) {
  const categories = ["Tous", "Stratégie", "Formation", "Marché", "Actualités"];
  const [activecat, setActivecat] = useState("Tous");
  const [search, setSearch] = useState("");

  const filtered = allPosts.filter((p) => {
    const matchCat = activecat === "Tous" || p.cat === activecat;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = allPosts[0];
  const rest = filtered.filter((p) => p.id !== 1);

  return (
    <main>
      {/* Header */}
      <div className="pt-[68px]" style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-xs mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
            <button onClick={() => navigate("home")} className="hover:text-white transition-colors">Accueil</button>
            <span>/</span>
            <span style={{ color: GOLD }}>Blog</span>
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Blog</span>
          <h1 className="mt-3 text-5xl font-bold text-white" style={serif}>Ressources & Insights.</h1>
          <p className="mt-5 text-lg max-w-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Analyses, formations et actualités pour renforcer votre culture financière et affiner votre stratégie d'investissement.
          </p>
        </div>
      </div>

      {/* Featured article */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <button className="w-full text-left group" onClick={() => {}}>
            <div className="grid lg:grid-cols-2 gap-10 items-center bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-video lg:aspect-auto lg:h-80 bg-muted overflow-hidden">
                <img src={featured.img} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 lg:pr-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>{featured.cat}</span>
                  <span className="text-muted-foreground text-xs">•</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={11} /> {featured.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4 leading-snug" style={serif}>{featured.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-xs">{featured.date}</span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: GOLD }}>Lire l'article <ArrowRight size={14} /></span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Search + filters */}
      <section className="pb-8 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActivecat(cat)}
                  className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
                  style={activecat === cat ? { background: NAVY, color: "#F4F1EA" } : { background: "rgba(13,27,46,0.07)", color: "#6B6355" }}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-72">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg text-sm bg-card border border-border focus:outline-none focus:ring-1"
                style={{ "--tw-ring-color": GOLD } as React.CSSProperties}
              />
            </div>
          </div>

          {/* Articles grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">Aucun article trouvé.</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {(activecat === "Tous" && !search ? rest : filtered).map(({ id, cat, title, date, readTime, img, excerpt }) => (
                <article key={id} className="group cursor-pointer">
                  <div className="aspect-video bg-muted rounded-xl overflow-hidden mb-5">
                    <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>{cat}</span>
                    <span className="text-muted-foreground text-xs flex items-center gap-1"><Clock size={10} /> {readTime}</span>
                  </div>
                  <h3 className="font-semibold text-foreground leading-snug mb-2 group-hover:underline" style={serif}>{title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3">{excerpt}</p>
                  <p className="text-muted-foreground text-xs">{date}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-secondary">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Newsletter</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground" style={serif}>Restez informé(e) chaque semaine.</h2>
          <p className="mt-4 text-muted-foreground">Recevez nos meilleures analyses et les actualités des marchés directement dans votre boîte mail.</p>
          <div className="mt-8 flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="votre@email.com" className="flex-1 px-4 py-3 rounded-lg text-sm bg-card border border-border focus:outline-none" />
            <button className="px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:opacity-90 flex-shrink-0" style={{ background: NAVY, color: "#F4F1EA" }}>S'abonner</button>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── Page: Adhésion ───────────────────────────────────────────────────────────

function AdhesionPage({ navigate }: { navigate: (p: Page, anchor?: string) => void }) {
  const [quickEmail, setQuickEmail] = useState("");
  const [formData, setFormData] = useState({
    prenom: "", nom: "", email: "", tel: "",
    situation: "", experience: "", montant: "", motivation: "",
  });
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const goToForm = () => {
    if (quickEmail) setFormData((f) => ({ ...f, email: quickEmail }));
    const el = document.getElementById("formulaire");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  const update = (field: string, value: string) => {
    setFormData((f) => ({ ...f, [field]: value }));
    setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!formData.prenom.trim()) errs.prenom = "Requis";
    if (!formData.nom.trim()) errs.nom = "Requis";
    if (!formData.email.includes("@")) errs.email = "Email invalide";
    if (!formData.motivation.trim()) errs.motivation = "Requis";
    if (!accepted) errs.accept = "Vous devez accepter les conditions";
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <main className="flex items-center justify-center bg-background" style={{ minHeight: "100vh", paddingTop: 68 }}>
        <div className="text-center max-w-lg px-6 py-20">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8" style={{ background: `${GOLD}15` }}>
            <CheckCircle size={36} style={{ color: GOLD }} />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4" style={serif}>Candidature reçue !</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Merci <strong className="text-foreground">{formData.prenom}</strong>. Notre équipe a bien reçu votre candidature.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Vous recevrez un e-mail de confirmation à <strong className="text-foreground">{formData.email}</strong> et serez contacté(e) sous 48 heures ouvrées pour la suite du processus.
          </p>
          <button
            onClick={() => navigate("home")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: NAVY, color: "#F4F1EA" }}
          >
            Retour à l'accueil <ArrowRight size={15} />
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* ── Hero ── */}
      <section style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 pt-[100px] pb-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 text-xs mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
              <button onClick={() => navigate("home")} className="hover:text-white transition-colors">Accueil</button>
              <span>/</span>
              <span style={{ color: GOLD }}>Adhésion</span>
            </div>

            <h1 className="text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.1] mb-6" style={serif}>
              Candidatez aujourd'hui,{" "}
              <br className="hidden lg:block" />
              <span style={{ color: GOLD }}>investissez demain.</span>
            </h1>

            <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
              L'adhésion à Horizons Capital est entièrement <strong className="text-white font-semibold">gratuite</strong>. Remplissez votre candidature en ligne — notre équipe de gestion examinera votre profil et vous contactera sous 48 heures ouvrées.
            </p>

            {/* Quick email capture */}
            <div className="flex gap-3 max-w-md">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                value={quickEmail}
                onChange={(e) => setQuickEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-sm text-white placeholder-white/40 focus:outline-none"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
              />
              <button
                onClick={goToForm}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap transition-all hover:opacity-90"
                style={{ background: GOLD, color: NAVY }}
              >
                Postuler <ArrowRight size={14} />
              </button>
            </div>
            <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.32)" }}>
              Après envoi, notre équipe vous contactera sous 48 heures ouvrées.
            </p>
          </div>

          {/* Right — Membership card art */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[340px] h-[210px]">
              {/* Back card */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #1a3558, #0d2240)",
                  transform: "rotate(7deg) translateY(-10px) translateX(10px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                }}
              />
              {/* Main card */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, #162A45 0%, ${NAVY} 100%)`,
                  border: `1px solid ${GOLD}35`,
                  boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
                }}
              >
                {/* Decorative circles */}
                <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full" style={{ background: `${GOLD}07` }} />
                <div className="absolute -right-4 -top-4 w-28 h-28 rounded-full" style={{ background: `${GOLD}05` }} />

                <div className="relative p-8 h-full flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: GOLD }}>
                      <TrendingUp size={18} style={{ color: NAVY }} />
                    </div>
                    {/* Chip */}
                    <div className="flex items-center gap-0.5">
                      <div className="w-6 h-6 rounded-full" style={{ background: GOLD, opacity: 0.55 }} />
                      <div className="w-6 h-6 rounded-full -ml-3" style={{ background: GOLD, opacity: 0.32 }} />
                    </div>
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] mb-1" style={{ color: `${GOLD}80` }}>
                      Carte Membre
                    </p>
                    <p className="text-2xl font-bold text-white" style={serif}>Horizons Capital</p>
                    <div className="mt-4 flex gap-2.5">
                      {["●●●●", "●●●●", "●●●●", "2025"].map((g, i) => (
                        <span
                          key={i}
                          className="text-xs tracking-widest"
                          style={{ color: "rgba(255,255,255,0.28)", fontFamily: "monospace" }}
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Gold bottom stripe */}
                <div
                  className="absolute bottom-0 inset-x-0 h-[3px]"
                  style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD}30)` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 Étapes ── */}
      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight" style={serif}>
              Comment rejoindre{" "}
              <span style={{ color: GOLD }}>Horizons Capital</span>
              {" "}en 4 étapes ?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { n: 1, title: "Candidature", desc: "Remplissez le formulaire en ligne avec vos informations et votre motivation à rejoindre le club." },
              { n: 2, title: "Analyse du profil", desc: "Notre équipe de gestion examine votre candidature et évalue votre profil d'investisseur sous 48 heures." },
              { n: 3, title: "Entretien", desc: "Vous êtes invité(e) à un échange avec un membre de l'équipe pour affiner votre profil et vos objectifs." },
              { n: 4, title: "Bienvenue !", desc: "Adhésion validée. Vous recevez vos accès à l'application membre et rejoignez la communauté d'investisseurs." },
            ].map(({ n, title, desc }) => (
              <div key={n} className="relative bg-card rounded-2xl px-6 pt-12 pb-8 border border-border text-center shadow-sm">
                <div
                  className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
                  style={{ background: NAVY, color: GOLD, border: "3px solid white" }}
                >
                  {n}
                </div>
                <h3 className="font-bold text-foreground text-lg mb-3" style={serif}>{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modèle gratuit ── */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Engagement</span>
          <h2 className="mt-3 text-4xl font-bold text-foreground" style={serif}>
            Une adhésion{" "}
            <span style={{ color: GOLD }}>entièrement gratuite.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Rejoindre Horizons Capital ne coûte rien. Votre engagement, c'est votre implication et votre participation active à la communauté.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-14 text-left">
            {[
              {
                icon: CheckCircle,
                title: "Aucun frais d'entrée",
                desc: "L'adhésion au club est totalement gratuite. Votre candidature est examinée sans frais et sans aucun engagement financier préalable.",
              },
              {
                icon: TrendingUp,
                title: "Participation flexible",
                desc: "Investissez collectivement selon vos capacités, dès 500 €. Vous ajustez votre mise au fil du temps, en fonction de votre situation.",
              },
              {
                icon: ExternalLink,
                title: "Accès immédiat à l'application",
                desc: "Dès validation de votre adhésion, accédez à notre application de suivi de portefeuille, aux analyses de Phronesis Capital et au forum.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: `${GOLD}15` }}>
                  <Icon size={21} style={{ color: GOLD }} />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-3" style={serif}>{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formulaire complet ── */}
      <section id="formulaire" className="py-28 bg-background">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Formulaire de candidature</span>
            <h2 className="mt-3 text-4xl font-bold text-foreground" style={serif}>Déposez votre candidature.</h2>
            <p className="mt-4 text-muted-foreground">Tous les champs marqués * sont obligatoires.</p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-card rounded-2xl p-8 border border-border shadow-sm"
          >
            {/* Prénom / Nom */}
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              {[
                { field: "prenom", label: "Prénom *", placeholder: "Jean", type: "text" },
                { field: "nom", label: "Nom *", placeholder: "Dupont", type: "text" },
              ].map(({ field, label, placeholder, type }) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
                  <input
                    type={type}
                    value={(formData as Record<string, string>)[field]}
                    onChange={(e) => update(field, e.target.value)}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-lg text-sm bg-background border focus:outline-none transition-colors"
                    style={{ borderColor: errors[field] ? "#ef4444" : "rgba(13,27,46,0.15)" }}
                  />
                  {errors[field] && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors[field]}</p>}
                </div>
              ))}
            </div>

            {/* Email / Téléphone */}
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="jean.dupont@email.com"
                  className="w-full px-4 py-3 rounded-lg text-sm bg-background border focus:outline-none transition-colors"
                  style={{ borderColor: errors.email ? "#ef4444" : "rgba(13,27,46,0.15)" }}
                />
                {errors.email && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Téléphone</label>
                <input
                  type="tel"
                  value={formData.tel}
                  onChange={(e) => update("tel", e.target.value)}
                  placeholder="+33 6 00 00 00 00"
                  className="w-full px-4 py-3 rounded-lg text-sm bg-background border focus:outline-none"
                  style={{ borderColor: "rgba(13,27,46,0.15)" }}
                />
              </div>
            </div>

            {/* Situation / Expérience */}
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              {[
                {
                  field: "situation", label: "Situation professionnelle",
                  opts: ["Salarié(e)", "Entrepreneur / Indépendant", "Étudiant(e)", "Cadre supérieur", "Retraité(e)", "Autre"],
                },
                {
                  field: "experience", label: "Expérience en investissement",
                  opts: ["Débutant (moins d'1 an)", "Intermédiaire (1–5 ans)", "Confirmé (5–10 ans)", "Expert (+ de 10 ans)"],
                },
              ].map(({ field, label, opts }) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
                  <select
                    value={(formData as Record<string, string>)[field]}
                    onChange={(e) => update(field, e.target.value)}
                    className="w-full px-4 py-3 rounded-lg text-sm bg-background border focus:outline-none"
                    style={{ borderColor: "rgba(13,27,46,0.15)" }}
                  >
                    <option value="">Sélectionner…</option>
                    {opts.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
            </div>

            {/* Montant */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-foreground mb-2">Montant d'investissement envisagé</label>
              <select
                value={formData.montant}
                onChange={(e) => update("montant", e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-sm bg-background border focus:outline-none"
                style={{ borderColor: "rgba(13,27,46,0.15)" }}
              >
                <option value="">Sélectionner…</option>
                {["500 – 2 000 €", "2 000 – 5 000 €", "5 000 – 20 000 €", "Plus de 20 000 €"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>

            {/* Motivation */}
            <div className="mb-7">
              <label className="block text-sm font-medium text-foreground mb-2">Votre motivation *</label>
              <textarea
                value={formData.motivation}
                onChange={(e) => update("motivation", e.target.value)}
                rows={4}
                placeholder="Pourquoi souhaitez-vous rejoindre Horizons Capital ? Quels sont vos objectifs d'investissement ?"
                className="w-full px-4 py-3 rounded-lg text-sm bg-background border focus:outline-none resize-none"
                style={{ borderColor: errors.motivation ? "#ef4444" : "rgba(13,27,46,0.15)" }}
              />
              {errors.motivation && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.motivation}</p>}
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3 mb-8">
              <input
                id="accept"
                type="checkbox"
                checked={accepted}
                onChange={(e) => {
                  setAccepted(e.target.checked);
                  setErrors((err) => { const n = { ...err }; delete n.accept; return n; });
                }}
                className="mt-0.5 w-4 h-4 flex-shrink-0 cursor-pointer"
                style={{ accentColor: NAVY }}
              />
              <label htmlFor="accept" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                J'accepte les <span className="underline text-foreground cursor-pointer">conditions générales</span> et la <span className="underline text-foreground cursor-pointer">politique de confidentialité</span> d'Horizons Capital.
              </label>
            </div>
            {errors.accept && <p className="text-xs mb-6 -mt-4" style={{ color: "#ef4444" }}>{errors.accept}</p>}

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: NAVY, color: "#F4F1EA" }}
            >
              Déposer ma candidature <ArrowRight size={16} />
            </button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Candidature gratuite · Réponse sous 48 h ouvrées · Aucun engagement
            </p>
          </form>
        </div>
      </section>

      {/* ── CTA Membre ── */}
      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground mb-3">Déjà membre ?</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: NAVY, color: "#F4F1EA" }}
          >
            <ExternalLink size={15} /> Accéder à l'Espace Membre
          </a>
        </div>
      </section>
    </main>
  );
}

// ─── Page: FAQ ────────────────────────────────────────────────────────────────

function FAQPage({ navigate }: { navigate: (p: Page, anchor?: string) => void }) {
  const [activeTab, setActiveTab] = useState("general");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const current = faqCategories.find((c) => c.id === activeTab)!;

  return (
    <main>
      {/* Header */}
      <div className="pt-[68px]" style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-xs mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
            <button onClick={() => navigate("home")} className="hover:text-white transition-colors">Accueil</button>
            <span>/</span>
            <span style={{ color: GOLD }}>FAQ</span>
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>FAQ</span>
          <h1 className="mt-3 text-5xl font-bold text-white" style={serif}>Toutes vos questions.</h1>
          <p className="mt-5 text-lg max-w-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Retrouvez les réponses aux questions les plus fréquentes sur le club, l'adhésion, les investissements et notre application.
          </p>
        </div>
      </div>

      {/* FAQ content */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {faqCategories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => { setActiveTab(id); setOpenIdx(null); }}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
                style={activeTab === id ? { background: NAVY, color: "#F4F1EA" } : { background: "rgba(13,27,46,0.07)", color: "#6B6355" }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Category title */}
          <h2 className="text-2xl font-bold text-foreground mb-8" style={serif}>{current.label}</h2>

          {/* Accordion */}
          <div className="flex flex-col">
            {current.items.map(({ q, a }, i) => (
              <div key={i} className="border-b" style={{ borderColor: "rgba(13,27,46,0.1)" }}>
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-foreground leading-snug">{q}</span>
                  {openIdx === i
                    ? <Minus size={16} className="flex-shrink-0 mt-0.5" style={{ color: GOLD }} />
                    : <Plus size={16} className="flex-shrink-0 mt-0.5 text-muted-foreground" />}
                </button>
                {openIdx === i && (
                  <p className="pb-5 text-muted-foreground text-sm leading-relaxed">{a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground" style={serif}>Vous n'avez pas trouvé votre réponse ?</h2>
          <p className="mt-4 text-muted-foreground">Notre équipe est disponible pour répondre à toutes vos questions personnalisées.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="mailto:contact@horizons-capital.fr" className="flex items-center gap-2 px-7 py-3.5 rounded font-semibold text-sm transition-all hover:opacity-90" style={{ background: NAVY, color: "#F4F1EA" }}>
              <Mail size={15} /> Nous écrire
            </a>
            <button onClick={() => navigate("adhesion")} className="flex items-center gap-2 px-7 py-3.5 rounded font-semibold text-sm transition-all hover:opacity-90" style={{ background: GOLD, color: NAVY }}>
              Rejoindre le club <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── Page: Club ──────────────────────────────────────────────────────────────

function ClubPage({ navigate }: { navigate: (p: Page, anchor?: string) => void }) {
  const timeline = [
    { year: "2021", title: "Fondation", desc: "12 membres fondateurs créent Horizons Capital avec une conviction commune : l'investissement collectif peut transformer le rapport à l'argent." },
    { year: "2022", title: "Premiers succès", desc: "Premier exercice complet avec une performance de +18,4 %, validant la robustesse de l'approche collective face à l'indice de référence." },
    { year: "2023", title: "Cap des 100 membres", desc: "La communauté franchit les 100 membres. Lancement officiel de Phronesis Capital, notre division de recherche et d'analyse." },
    { year: "2024", title: "Lancement FlagShip", desc: "Le portefeuille FlagShip est lancé avec 2,4 M€ d'actifs sous gestion. Performance cumulée depuis l'origine : +63,2 %." },
    { year: "2025", title: "Vers un fonds agréé", desc: "Cap des 250 membres actifs. L'évolution vers un fonds d'investissement agréé est planifiée à horizon 2027–2028." },
  ];

  const ambitions = [
    { n: "01", title: "Court terme (2025–2026)", desc: "Atteindre 500 membres. Structurer les processus internes. Renforcer les performances du portefeuille FlagShip." },
    { n: "02", title: "Moyen terme (2027–2028)", desc: "Obtenir l'agrément réglementaire. Diversifier les véhicules d'investissement. Ouvrir progressivement aux actifs non cotés." },
    { n: "03", title: "Long terme (2029+)", desc: "Devenir un fonds de référence avec plus de 50 M€ d'actifs. Élargir la communauté à des dizaines de milliers de membres." },
  ];

  const allocation = [
    { label: "Actions européennes", pct: 35, color: GOLD },
    { label: "Actions américaines", pct: 28, color: "#2E6DA4" },
    { label: "Marchés émergents", pct: 22, color: "#27AE60" },
    { label: "Obligations & Revenu fixe", pct: 10, color: "#8E44AD" },
    { label: "Liquidités", pct: 5, color: "#95A5A6" },
  ];

  const sectors = [
    { name: "Technologie", pct: 28 },
    { name: "Santé & Biotech", pct: 20 },
    { name: "Finance", pct: 18 },
    { name: "Transition énergétique", pct: 15 },
    { name: "Consommation", pct: 12 },
    { name: "Autres", pct: 7 },
  ];

  const valeurs = [
    { icon: Shield, title: "Transparence", desc: "Chaque décision, chaque investissement, chaque résultat est partagé avec l'ensemble des membres en temps réel. Aucune zone d'ombre." },
    { icon: Users, title: "Intelligence collective", desc: "Nous croyons que la sagesse du groupe surpasse l'expertise individuelle. Toute décision d'allocation est soumise au vote des membres." },
    { icon: BarChart2, title: "Rigueur analytique", desc: "Nos décisions reposent sur une analyse fondamentale approfondie, jamais sur des intuitions ou des mouvements de court terme." },
    { icon: BookOpen, title: "Pédagogie", desc: "Former nos membres est une mission centrale. L'investissement ne doit plus être perçu comme réservé à une élite financière." },
    { icon: Globe, title: "Éthique & ESG", desc: "Nous intégrons des critères environnementaux, sociaux et de gouvernance dans notre processus d'investissement à tous les niveaux." },
    { icon: TrendingUp, title: "Performance durable", desc: "Notre objectif n'est pas le gain rapide mais la création de valeur sur le long terme, dans l'intérêt de chaque membre du club." },
  ];

  const team = [
    {
      name: "Jean-Marc Essomba",
      role: "Président du Club",
      bio: "Passionné de finance depuis 15 ans, Jean-Marc a fondé Horizons Capital avec la conviction que l'investissement collectif est le levier le plus puissant pour construire un patrimoine.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format",
    },
    {
      name: "Aminata Traoré",
      role: "Vice-Présidente & Responsable Recherche",
      bio: "Analyste financière certifiée CFA, Aminata dirige l'ensemble de la production analytique de Phronesis Capital avec rigueur et pédagogie.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&auto=format",
    },
    {
      name: "Thomas Nguyen",
      role: "Trésorier & Analyste Portefeuille",
      bio: "Dix ans d'expérience en salle de marché. Thomas pilote la stratégie FlagShip et assure la conformité réglementaire des opérations du club.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format",
    },
    {
      name: "Fatoumata Koné",
      role: "Responsable Relations Membres",
      bio: "Fatoumata assure l'accueil des nouveaux membres, coordonne les réunions mensuelles et anime la communauté avec enthousiasme.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format",
    },
    {
      name: "Bastien Moreau",
      role: "Analyste Senior, Phronesis Capital",
      bio: "Spécialiste des marchés émergents et de l'ESG, Bastien produit les rapports sectoriels qui guident les décisions d'investissement du club.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&auto=format",
    },
    {
      name: "Clarisse Abena",
      role: "Chargée de Communication & Formation",
      bio: "Clarisse conçoit les supports pédagogiques, organise les webinaires mensuels et veille à la diffusion du savoir financier au sein du club.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&auto=format",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section style={{ background: NAVY }} className="pt-[68px]">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="flex items-center gap-2 text-xs mb-8" style={{ color: "rgba(255,255,255,0.35)" }}>
            <button onClick={() => navigate("home")} className="hover:text-white transition-colors">Accueil</button>
            <span>/</span>
            <span style={{ color: GOLD }}>Le Club</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Le Club</span>
              <h1 className="mt-3 text-5xl lg:text-6xl font-bold text-white leading-[1.1]" style={serif}>
                Une communauté,<br />
                <span style={{ color: GOLD }}>une ambition.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                Horizons Capital est plus qu'un club d'investissement. C'est un espace de partage, d'apprentissage et de croissance collective — fondé sur la transparence, la rigueur et l'intelligence de groupe.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => { const el = document.getElementById("equipe"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" }); }}
                  className="flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm transition-all hover:opacity-90"
                  style={{ background: GOLD, color: NAVY }}
                >
                  Rencontrer l'équipe <ArrowRight size={14} />
                </button>
                <button
                  onClick={() => navigate("adhesion")}
                  className="flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm border text-white transition-all hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.2)" }}
                >
                  Nous rejoindre
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Fondé en", value: "2021" },
                { label: "Membres actifs", value: "247" },
                { label: "Actifs gérés", value: "2,4 M€" },
                { label: "Performance cumulée", value: "+63 %" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-xl p-6 border text-center" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
                  <p className="text-3xl font-bold" style={{ ...serif, color: GOLD }}>{value}</p>
                  <p className="text-xs mt-1.5 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notre histoire — Timeline */}
      <section id="histoire" className="py-28 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Notre histoire</span>
            <h2 className="mt-3 text-4xl font-bold text-foreground" style={serif}>De 12 fondateurs à 247 membres engagés.</h2>
            <p className="mt-5 text-muted-foreground max-w-xl leading-relaxed">Chaque grande aventure commence par une conviction. La nôtre : l'investissement collectif et éduqué peut transformer durablement le rapport à l'argent.</p>
          </div>
          <div className="flex flex-col gap-0">
            {timeline.map(({ year, title, desc }, i) => (
              <div key={year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0"
                    style={{ background: i === timeline.length - 1 ? GOLD : "white", color: i === timeline.length - 1 ? NAVY : GOLD, border: `2px solid ${GOLD}`, boxShadow: "0 0 0 4px rgba(200,168,75,0.1)" }}
                  >
                    {year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 my-1" style={{ background: `${GOLD}25`, minHeight: 32 }} />
                  )}
                </div>
                <div className={`pb-10 flex-1 ${i === timeline.length - 1 ? "" : ""}`}>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>{year}</span>
                  <h3 className="font-bold text-foreground text-lg mt-0.5 mb-2" style={serif}>{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Ambitions */}
      <section id="vision" className="py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Vision & Ambitions</span>
              <h2 className="mt-3 text-4xl font-bold text-foreground leading-snug" style={serif}>
                Vers un fonds d'investissement de référence.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Notre ambition transcende le cadre d'un simple club. À horizon 3 à 5 ans, Horizons Capital évoluera vers un fonds d'investissement agréé, offrant à nos membres l'accès à des instruments et stratégies habituellement réservés aux institutionnels.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Cette évolution permettra d'attirer des investisseurs externes, d'amplifier notre capacité d'action et de démultiplier l'impact de notre communauté sur les marchés financiers mondiaux.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {ambitions.map(({ n, title, desc }) => (
                <div key={n} className="bg-card rounded-xl p-6 border border-border flex gap-5">
                  <div className="text-2xl font-bold flex-shrink-0 mt-0.5" style={{ ...serif, color: `${GOLD}50` }}>{n}</div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs & Stratégie */}
      <section id="strategie" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Objectifs & Stratégie</span>
            <h2 className="mt-3 text-4xl font-bold text-foreground" style={serif}>Notre philosophie d'investissement.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Une approche rigoureuse, collective et tournée vers le long terme — ancrée dans l'analyse fondamentale et la discipline de marché.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-bold text-foreground text-lg mb-6" style={serif}>Allocation géographique cible</h3>
              <div className="flex flex-col gap-5">
                {allocation.map(({ label, pct, color }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-foreground">{label}</span>
                      <span className="text-sm font-semibold text-foreground">{pct} %</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-bold text-foreground text-lg mb-6" style={serif}>Exposition sectorielle</h3>
              <div className="flex flex-col gap-5">
                {sectors.map(({ name, pct }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-foreground">{name}</span>
                      <span className="text-sm font-semibold text-foreground">{pct} %</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: GOLD }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Horizon long terme", desc: "Toutes nos positions sont construites avec un horizon minimum de 18 mois. Nous n'essayons pas de battre le marché par le timing." },
              { title: "Analyse fondamentale", desc: "Chaque investissement repose sur une analyse des fondamentaux : business model, valorisation, management, bilan, perspectives sectorielles." },
              { title: "Vote démocratique", desc: "Aucune position ne peut être ouverte ou fermée sans l'approbation d'une majorité qualifiée lors de nos réunions mensuelles." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-secondary rounded-xl p-6 border border-border">
                <div className="w-1.5 h-8 rounded-full mb-4" style={{ background: GOLD }} />
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs & Engagements */}
      <section id="valeurs" className="py-28" style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>Nos valeurs & engagements</span>
            <h2 className="mt-3 text-4xl font-bold text-white" style={serif}>Les principes qui nous définissent.</h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>Six valeurs fondamentales, gravées dans notre charte fondatrice depuis 2021, guident chacune de nos décisions.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valeurs.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl p-7 border transition-all duration-300 cursor-default"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${GOLD}50`; e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5" style={{ background: `${GOLD}18` }}>
                  <Icon size={20} style={{ color: GOLD }} />
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe / Bureau */}
      <section id="equipe" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: GOLD }}>L'équipe dirigeante</span>
            <h2 className="mt-3 text-4xl font-bold text-foreground" style={serif}>Le Bureau d'Horizons Capital.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Des professionnels passionnés, élus démocratiquement par les membres, engagés au service de la communauté et de sa performance.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map(({ name, role, bio, img }) => (
              <div key={name} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: GOLD }}>{role}</p>
                  <h3 className="font-bold text-foreground text-lg mb-3" style={serif}>{name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground" style={serif}>Prêt à rejoindre l'aventure ?</h2>
          <p className="mt-5 text-muted-foreground max-w-lg mx-auto">
            Rejoignez 247 membres qui partagent la même vision d'un investissement intelligent, collectif et accessible à tous.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate("adhesion")}
              className="flex items-center gap-2 px-8 py-4 rounded font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: NAVY, color: "#F4F1EA" }}
            >
              Candidater maintenant <ArrowRight size={16} />
            </button>
            <a href="#" className="flex items-center gap-2 px-8 py-4 rounded font-semibold text-sm border transition-all hover:bg-foreground/5" style={{ borderColor: "rgba(13,27,46,0.2)", color: NAVY }}>
              <ExternalLink size={16} /> Espace Membre
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── App (root) ───────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [pendingAnchor, setPendingAnchor] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<"services" | "resources" | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Scroll to anchor after page transition
  useEffect(() => {
    if (!pendingAnchor) return;
    const t = setTimeout(() => {
      const el = document.getElementById(pendingAnchor);
      if (el) {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
      }
      setPendingAnchor(null);
    }, 120);
    return () => clearTimeout(t);
  }, [page, pendingAnchor]);

  const navigate = (newPage: Page, anchor?: string) => {
    setMenuOpen(false);
    setOpenDrop(null);
    if (newPage !== page) {
      setPage(newPage);
      setPendingAnchor(anchor || null);
      window.scrollTo(0, 0);
    } else if (anchor) {
      const el = document.getElementById(anchor);
      if (el) {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Navbar
        page={page}
        navigate={navigate}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        openDrop={openDrop}
        setOpenDrop={setOpenDrop}
      />

      {page === "home" && <HomePage navigate={navigate} />}
      {page === "club" && <ClubPage navigate={navigate} />}
      {page === "services" && <ServicesPage navigate={navigate} />}
      {page === "blog" && <BlogPage navigate={navigate} />}
      {page === "faq" && <FAQPage navigate={navigate} />}
      {page === "adhesion" && <AdhesionPage navigate={navigate} />}

      <Footer navigate={navigate} />
    </div>
  );
}
