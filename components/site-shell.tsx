import { Mail, Menu, MessageCircle, Phone } from "lucide-react";
import { EMAIL, EMAIL_LINK, Lang, langPrefix, PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK, copy } from "@/lib/site-data";

type Page = "home" | "services" | "process" | "areas" | "service" | "about";

const navCopy = {
  en: { home: "Home", services: "Services", process: "How it works", areas: "Areas", about: "About" },
  es: { home: "Inicio", services: "Servicios", process: "Cómo funciona", areas: "Zonas", about: "Nosotros" },
  fr: { home: "Accueil", services: "Services", process: "Fonctionnement", areas: "Zones", about: "À propos" },
};

function pageHref(lang: Lang, page: Page, slug?: string) {
  const pre = langPrefix(lang);
  if (page === "home") return pre || "/";
  if (page === "services") return `${pre}/services`;
  if (page === "process") return `${pre}/how-it-works`;
  if (page === "areas") return `${pre}/areas-we-service`;
  if (page === "about") return `${pre}/about`;
  return `${pre}/services/${slug}`;
}

export function Header({ lang = "en", page = "home", slug }: { lang?: Lang; page?: Page; slug?: string }) {
  const c = copy[lang];
  const n = navCopy[lang];
  const links = <>
    <a href={pageHref(lang, "home")} aria-current={page === "home" ? "page" : undefined}>{n.home}</a>
    <a href={pageHref(lang, "services")} aria-current={page === "services" || page === "service" ? "page" : undefined}>{n.services}</a>
    <a href={pageHref(lang, "process")} aria-current={page === "process" ? "page" : undefined}>{n.process}</a>
    <a href={pageHref(lang, "areas")} aria-current={page === "areas" ? "page" : undefined}>{n.areas}</a>
    <a href={pageHref(lang, "about")} aria-current={page === "about" ? "page" : undefined}>{n.about}</a>
  </>;

  return <header className="site-header"><div className="wrap header-row">
    <a href={pageHref(lang, "home")} className="logo" aria-label="Mobile Cairns Mechanic home"><img className="brand-logo" src="/mobile-cairns-mechanic-logo.png" alt="Mobile Cairns Mechanic" /></a>
    <nav className="main-nav">{links}</nav>
    <div className="header-actions">
      <div className="lang-switch" aria-label="Language">
        <a className={lang === "en" ? "active" : ""} href={pageHref("en", page, slug)}>EN</a>
        <a className={lang === "es" ? "active" : ""} href={pageHref("es", page, slug)}>ES</a>
        <a className={lang === "fr" ? "active" : ""} href={pageHref("fr", page, slug)}>FR</a>
      </div>
      <div className="header-contact">
        <a className="call-pill" href={PHONE_LINK} aria-label={c.call}><Phone size={16} /><span>{c.call}</span></a>
        <a className="whatsapp-pill" href={WHATSAPP_LINK} aria-label={c.wa}><MessageCircle size={16} /><span>WhatsApp</span></a>
      </div>
      <details className="mobile-menu"><summary aria-label="Menu"><Menu /></summary><nav>{links}</nav></details>
    </div>
  </div></header>;
}

export function Footer({ lang = "en" }: { lang?: Lang }) {
  const pre = langPrefix(lang);
  const t = {
    en: ["Mobile service · Cairns workshop · 24/7 roadside assistance", "Mobile + workshop", "If it has an engine, we fix it."],
    es: ["Servicio móvil · Taller en Cairns · Asistencia 24/7", "Móvil + taller", "Si tiene motor, lo reparamos."],
    fr: ["Service mobile · Atelier à Cairns · Assistance 24h/24", "Mobile + atelier", "Si ça a un moteur, on le répare."],
  }[lang];
  return <footer><div className="wrap footer-grid">
    <div><a href={pre || "/"} className="logo footer-logo" aria-label="Mobile Cairns Mechanic home"><img className="brand-logo" src="/mobile-cairns-mechanic-logo.png" alt="Mobile Cairns Mechanic" /></a><p>{t[0]}</p></div>
    <div><strong>{t[1]}</strong><p>{t[2]}</p><p>Unit 3/3 Toohey St, Portsmith QLD 4870</p><p>Mon–Fri · 7:30am–5:00pm</p></div>
    <div className="footer-contact"><a href={PHONE_LINK}><Phone size={15} />{PHONE_DISPLAY}</a><a href={WHATSAPP_LINK}><MessageCircle size={15} />WhatsApp</a><a href={EMAIL_LINK}><Mail size={15} />{EMAIL}</a></div>
  </div><div className="wrap footer-bottom">© {new Date().getFullYear()} Cairns Mechanic</div></footer>;
}

export function MobileBar({ lang = "en" }: { lang?: Lang }) {
  const c = copy[lang];
  return <div className="mobile-bar"><a href={WHATSAPP_LINK}><MessageCircle size={19} />{c.wa}</a><a className="hot" href={PHONE_LINK}><Phone size={19} />{c.call}</a></div>;
}
