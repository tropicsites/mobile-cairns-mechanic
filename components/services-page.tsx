import { ArrowRight, BatteryCharging, CarFront, Check, Compass, Gauge, MapPin, MessageCircle, Phone, ShieldCheck, Wrench } from "lucide-react";
import { Footer, Header, MobileBar } from "@/components/site-shell";
import { Lang, langPrefix, PHONE_DISPLAY, PHONE_LINK, services, WHATSAPP_LINK } from "@/lib/site-data";

const icons = { roadside: CarFront, service: Wrench, diagnostics: Gauge, battery: BatteryCharging, brakes: ShieldCheck, clutch: Wrench, timing: Gauge, engine: Wrench, inspection: Check, fourwd: Compass, recovery: CarFront, certificate: ShieldCheck, fleet: CarFront };
const text = {
  en: { eye: "Mobile + workshop · Every make · Every engine", h: "Mechanical services", p: "From a dead battery at the roadside to a full transmission rebuild in the workshop. No job is too big or too small.", view: "View service", ctaH: "Not sure which service you need?", ctaP: "Tell us what the vehicle is doing. We’ll help diagnose the problem and explain the next step.", call: "Call the team" },
  es: { eye: "Móvil + taller · Todas las marcas · Todos los motores", h: "Servicios mecánicos", p: "Desde una batería descargada en carretera hasta reconstruir una transmisión completa. Ningún trabajo es demasiado grande o pequeño.", view: "Ver servicio", ctaH: "¿No sabes qué servicio necesitas?", ctaP: "Cuéntanos qué hace el vehículo. Te ayudaremos a diagnosticarlo y explicaremos el siguiente paso.", call: "Llamar al equipo" },
  fr: { eye: "Mobile + atelier · Toutes marques · Tous moteurs", h: "Services mécaniques", p: "D’une batterie à plat au bord de la route à la réfection complète d’une transmission. Aucun travail n’est trop grand ou trop petit.", view: "Voir le service", ctaH: "Vous ne savez pas quel service choisir ?", ctaP: "Décrivez le comportement du véhicule. Nous vous aiderons à identifier le problème et la suite.", call: "Appeler l’équipe" },
} satisfies Record<Lang, any>;

export function ServicesPage({ lang }: { lang: Lang }) {
  const c = text[lang];
  const pre = langPrefix(lang);
  return <><Header lang={lang} page="services" /><main>
    <section className="areas-hero"><div className="wrap"><p className="eyebrow"><MapPin size={15} />{c.eye}</p><h1>{c.h}</h1><p>{c.p}</p><div className="cta-row"><a className="btn primary" href={PHONE_LINK}><Phone size={18} />{PHONE_DISPLAY}</a><a className="btn secondary on-dark" href={WHATSAPP_LINK}><MessageCircle size={18} />WhatsApp</a></div></div></section>
    <section className="section services"><div className="wrap"><div className="service-grid">{services.map((s, i) => { const Icon = icons[s.icon as keyof typeof icons] || Wrench; const item = s.text[lang]; return <a href={`${pre}/services/${s.slug}`} className="service-card" key={s.slug}><div className="service-top"><span className="icon"><Icon size={23} /></span><span>{String(i + 1).padStart(2, "0")}</span></div><h3>{item.short}</h3><p>{item.summary}</p><span className="card-link">{c.view}<ArrowRight size={16} /></span></a>; })}</div></div></section>
    <section className="contact"><div className="wrap contact-grid"><div><h2>{c.ctaH}</h2><p>{c.ctaP}</p></div><div className="contact-actions"><a className="btn dark" href={PHONE_LINK}><Phone size={18} />{PHONE_DISPLAY}</a><a className="btn secondary" href={WHATSAPP_LINK}><MessageCircle size={18} />WhatsApp</a></div></div></section>
  </main><Footer lang={lang} /><MobileBar lang={lang} /></>;
}
