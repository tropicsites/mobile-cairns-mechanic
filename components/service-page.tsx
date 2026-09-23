import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import { Footer, Header, MobileBar } from "@/components/site-shell";
import { Lang, langPrefix, PHONE_DISPLAY, PHONE_LINK, Service, services, WHATSAPP_LINK } from "@/lib/site-data";

const labels = {
  en: { back: "Home", help: "What we can help with", how: "Mobile when possible. Workshop when needed.", howP: "We come to the vehicle first for diagnosis and suitable repairs. If the job needs the hoist or workshop equipment, we can continue the work at our Cairns workshop.", related: "Related services", also: "We can also help with", cta: "Need this service?", msg: "Send your location, vehicle details and symptoms on WhatsApp." },
  es: { back: "Inicio", help: "Cómo podemos ayudarte", how: "Móvil cuando sea posible. Taller cuando sea necesario.", howP: "Primero vamos hasta el vehículo para diagnosticar y reparar. Si necesita elevador o equipo de taller, continuamos en nuestro taller de Cairns.", related: "Servicios relacionados", also: "También podemos ayudarte con", cta: "¿Necesitas este servicio?", msg: "Envía tu ubicación, vehículo y síntomas por WhatsApp." },
  fr: { back: "Accueil", help: "Comment nous pouvons aider", how: "Mobile si possible. Atelier si nécessaire.", howP: "Nous venons d’abord au véhicule pour le diagnostic et les réparations adaptées. Si le pont est nécessaire, le travail continue dans notre atelier à Cairns.", related: "Services associés", also: "Nous pouvons aussi vous aider avec", cta: "Besoin de ce service ?", msg: "Envoyez votre position, véhicule et symptômes sur WhatsApp." },
};

const specialHow = {
  en: {
    "vehicle-recovery-towing": ["The right recovery for the situation.", "Tell us what happened, where the vehicle is and what you drive. We arrange suitable towing equipment for the job, provide an individual quote and take the vehicle to the destination you choose. Calls are answered 24/7; arrival time depends on the current job and location."],
    "rwc-safety-certificates": ["Arranged through an approved inspection partner.", "We coordinate light-vehicle Safety Certificate inspections with an approved partner, either mobile or at the workshop. Same-day appointments are often possible, and we can complete repairs and help arrange reinspection if required."],
  },
  es: {
    "vehicle-recovery-towing": ["El rescate adecuado para cada situación.", "Dinos qué ha pasado, dónde está el vehículo y qué conduces. Organizamos el equipo de remolque adecuado, damos un presupuesto individual y llevamos el vehículo donde elijas. Atendemos llamadas 24/7; la llegada depende del trabajo en curso y la ubicación."],
    "rwc-safety-certificates": ["Organizado mediante un colaborador autorizado.", "Coordinamos la inspección de vehículos ligeros con un colaborador autorizado, a domicilio o en el taller. Suele haber citas el mismo día y podemos realizar las reparaciones y ayudar con la reinspección."],
  },
  fr: {
    "vehicle-recovery-towing": ["Le dépannage adapté à chaque situation.", "Indiquez-nous la panne, la position et le véhicule. Nous organisons l’équipement adapté, proposons un devis individuel et transportons le véhicule vers la destination choisie. Les appels sont pris 24h/24 ; le délai dépend de l’intervention en cours et de la distance."],
    "rwc-safety-certificates": ["Organisé avec un partenaire agréé.", "Nous coordonnons le contrôle des véhicules légers avec un partenaire agréé, sur place ou à l’atelier. Un rendez-vous le jour même est souvent possible, et nous pouvons effectuer les réparations et aider à organiser la contre-visite."],
  },
} satisfies Record<Lang, Record<string, string[]>>;

export function ServicePage({ service, lang }: { service: Service; lang: Lang }) {
  const t = service.text[lang];
  const pre = langPrefix(lang);
  const l = labels[lang];
  const how = specialHow[lang][service.slug] || [l.how, l.howP];
  const schema = { "@context": "https://schema.org", "@type": "Service", name: t.title, provider: { "@type": "AutoRepair", name: "24-7 Mobile Cairns Mechanic", telephone: "+61 493 828 624", address: { "@type": "PostalAddress", streetAddress: "Unit 3/3 Toohey St", addressLocality: "Portsmith", postalCode: "4870", addressRegion: "QLD", addressCountry: "AU" } }, areaServed: { "@type": "City", name: "Cairns" }, availableLanguage: ["English", "Spanish", "French"], description: t.summary };

  return <><Header lang={lang} page="service" slug={service.slug} /><main>
    <section className="service-hero"><div className="wrap service-hero-grid"><div>
      <div className="crumb"><a href={pre || "/"}>{l.back}</a><span>/</span><span>{t.short}</span></div>
      <p className="eyebrow"><MapPin size={15} />CAIRNS · MOBILE + WORKSHOP</p><h1>{t.title}</h1><p>{t.intro}</p>
      <div className="cta-row"><a className="btn primary" href={PHONE_LINK}><Phone size={18} />{PHONE_DISPLAY}</a><a className="btn secondary on-dark" href={WHATSAPP_LINK}>WhatsApp<ArrowRight size={17} /></a></div>
    </div><div className="service-photo" /></div></section>
    <section className="section"><div className="wrap detail-grid"><article><p className="kicker">{l.help}</p><h2>{t.summary}</h2><div className="include-list">{t.includes.map((x) => <div key={x}><Check />{x}</div>)}</div><h2>{how[0]}</h2><p>{how[1]}</p></article><aside><h3>{l.cta}</h3><p>{l.msg}</p><a href={PHONE_LINK}>{PHONE_DISPLAY}</a><a href={WHATSAPP_LINK}>WhatsApp <ArrowRight size={16} /></a></aside></div></section>
    <section className="related section"><div className="wrap"><header className="section-head"><p className="kicker">{l.related}</p><h2>{l.also}</h2></header><div className="related-grid">{services.filter((s) => s.slug !== service.slug).slice(0, 3).map((s) => <a href={`${pre}/services/${s.slug}`} key={s.slug}><h3>{s.text[lang].short}</h3><p>{s.text[lang].summary}</p><span><ArrowRight /></span></a>)}</div></div></section>
  </main><Footer lang={lang} /><MobileBar lang={lang} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
