import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { ArrowRight, ChevronDown, ExternalLink, Menu, TrendingUp, X } from "lucide-react";
import { NAV, type NavItem } from "../data/navigation";
import Logo from "../components/Logo";
import { SITE } from "../data/site";

const linkCls = (active: boolean) =>
  `text-sm transition-colors hover:text-white ${active ? "text-gold" : "text-white/70"}`;

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.key]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (item: NavItem) =>
    item.to && !item.to.includes("#")
      ? location.pathname === item.to
      : !!item.children?.some((c) => location.pathname === c.to.split("#")[0]);

  const mobileLinks = NAV.flatMap((i) => i.children ?? [{ label: i.label, to: i.to! }]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
          scrolled ? "bg-navy" : "bg-navy/80"
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6">
          <Link to="/" aria-label={`${SITE.name} — accueil`}>
            <Logo size={38} />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    className={`flex items-center gap-1 ${linkCls(isActive(item))}`}
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      className="transition-transform group-focus-within:rotate-180 group-hover:rotate-180"
                    />
                  </button>
                  <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <div className="w-52 overflow-hidden rounded-lg border border-navy/10 bg-white shadow-2xl">
                      {item.children.map(({ label, to, icon: Icon }) => (
                        <Link
                          key={to}
                          to={to}
                          className="flex items-center gap-2.5 border-t border-navy/10 px-4 py-3 text-sm text-foreground transition-colors first:border-t-0 hover:bg-secondary"
                        >
                          <Icon size={14} className="text-gold" />
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.label} to={item.to!} className={linkCls(isActive(item))}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={SITE.memberAreaUrl}
              className="flex items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-white"
            >
              <ExternalLink size={13} /> Espace Membre
            </a>
            <Link
              to="/adhesion"
              className="flex items-center gap-2 rounded bg-gold px-5 py-2 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
            >
              Rejoindre <ArrowRight size={13} />
            </Link>
          </div>

          <button
            type="button"
            className="p-1 text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col gap-1 overflow-y-auto bg-navy px-6 pb-8 pt-[68px]">
          {mobileLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="border-b border-white/10 py-3.5 text-left text-base text-white/80 transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={SITE.memberAreaUrl}
              className="flex items-center justify-center gap-2 rounded border border-white/20 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <ExternalLink size={15} /> Espace Membre
            </a>
            <Link
              to="/adhesion"
              className="flex items-center justify-center gap-2 rounded bg-gold py-3.5 text-sm font-semibold text-navy"
            >
              Rejoindre le club <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}