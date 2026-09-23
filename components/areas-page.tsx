import { MapPin, MessageCircle, Phone } from "lucide-react";
import { Footer, Header, MobileBar } from "@/components/site-shell";
import { areaGroups, Lang, PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from "@/lib/site-data";

const text = {
  en: { eye: "Far North Queensland coverage", h: "Port Douglas to Ingham—and across the Tablelands.", p: "We travel to homes, workplaces, safe roadside locations and 4WD tracks. Call-out fees vary by distance, so we confirm availability and price before travelling.", labels: { north: "Port Douglas & Northern Beaches", cairns: "Cairns & suburbs", south: "South to Ingham", tablelands: "Atherton Tablelands", daintree: "Daintree region—by arrangement" }, noteH: "Outside the list? Call us.", noteP: "Coverage depends on the current job, road conditions and distance. If we can reach you safely, we’ll do our best to help." },
  es: { eye: "Cobertura en Far North Queensland", h: "De Port Douglas a Ingham y por Tablelands.", p: "Vamos a domicilios, trabajos, ubicaciones seguras en carretera y pistas 4x4. El desplazamiento varía según la distancia y confirmamos disponibilidad y precio antes de salir.", labels: { north: "Port Douglas y Northern Beaches", cairns: "Cairns y alrededores", south: "Hacia el sur hasta Ingham", tablelands: "Atherton Tablelands", daintree: "Zona de Daintree, previa consulta" }, noteH: "¿No aparece tu zona? Llámanos.", noteP: "La cobertura depende del trabajo en curso, las carreteras y la distancia. Si podemos llegar de forma segura, haremos todo lo posible por ayudarte." },
  fr: { eye: "Couverture Far North Queensland", h: "De Port Douglas à Ingham et dans les Tablelands.", p: "Nous intervenons à domicile, au travail, sur les routes sûres et pistes 4x4. Les frais varient selon la distance ; disponibilité et prix sont confirmés avant le départ.", labels: { north: "Port Douglas et Northern Beaches", cairns: "Cairns et environs", south: "Vers le sud jusqu’à Ingham", tablelands: "Atherton Tablelands", daintree: "Région de Daintree, sur demande" }, noteH: "Votre zone n’est pas indiquée ? Appelez.", noteP: "La couverture dépend de l’intervention en cours, de l’état des routes et de la distance. Si nous pouvons vous rejoindre en sécurité, nous ferons notre possible." },
} satisfies Record<Lang, any>;

export function AreasPage({ lang }: { lang: Lang }) {
  const c = text[lang];
  return <><Header lang={lang} page="areas" /><main>
    <section className="areas-hero"><div className="wrap"><p className="eyebrow"><MapPin size={15} />{c.eye}</p><h1>{c.h}</h1><p>{c.p}</p><div className="cta-row"><a className="btn primary" href={PHONE_LINK}><Phone size={18} />{PHONE_DISPLAY}</a><a className="btn secondary on-dark" href={WHATSAPP_LINK}><MessageCircle size={18} />WhatsApp</a></div></div></section>
    <section className="section"><div className="wrap area-groups">{areaGroups.map((group) => <article key={group.key}><h2>{c.labels[group.key]}</h2><div className="area-list">{group.places.map((place) => <div key={place}><MapPin size={17} />{place}</div>)}</div></article>)}</div></section>
    <section className="contact"><div className="wrap contact-grid"><div><h2>{c.noteH}</h2><p>{c.noteP}</p></div><div className="contact-actions"><a className="btn dark" href={PHONE_LINK}><Phone size={18} />{PHONE_DISPLAY}</a><a className="btn secondary" href={WHATSAPP_LINK}><MessageCircle size={18} />WhatsApp</a></div></div></section>
  </main><Footer lang={lang} /><MobileBar lang={lang} /></>;
}
