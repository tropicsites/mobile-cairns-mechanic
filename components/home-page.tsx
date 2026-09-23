import { ArrowRight, CarFront, Check, Mail, MapPin, MessageCircle, Phone, Star, Wrench } from "lucide-react";
import { Footer, Header, MobileBar } from "@/components/site-shell";
import { EMAIL, EMAIL_LINK, GOOGLE_MAPS_URL, Lang, langPrefix, PHONE_DISPLAY, PHONE_LINK, services, suburbs, WHATSAPP_LINK } from "@/lib/site-data";

const homeCopy = {
  en: {
    eye: "24/7 mobile mechanic · Recovery · Cairns & Far North Queensland",
    h1: "Broken down?",
    h2: "We come to you.",
    p: "Mobile mechanic, roadside assistance and vehicle recovery—from Port Douglas to Ingham and across the Tablelands. Backed by a Cairns workshop and hoist.",
    call: "Call now",
    message: "WhatsApp us",
    proof: [["24/7", "Emergency calls"], ["Any engine", "Any make or model"], ["Mobile + workshop", "No job too big or small"]],
    quickK: "What we do",
    quickH: "Help where you are. A workshop when you need it.",
    quick: [["Roadside & recovery", "Breakdowns, no-starts, lockouts, towing and off-road recovery."], ["Workshop repairs", "Clutch replacement, timing belts, engines, transmissions and every-size mechanical job."], ["Checks & inspections", "4WD pre-trip checks, pre-purchase inspections and RWC arrangements."]],
    all: "See all services",
    reviewsK: "Customer reviews",
    reviewsH: "Trusted when it matters.",
    reviewsP: "Rated 4.9 on Google by Cairns locals and travellers.",
    read: "Read our Google reviews",
    areaK: "Huge service area",
    areaH: "Port Douglas to Ingham—including the Tablelands.",
    areaP: "Call-out fees vary by distance. Tell us where you are and we’ll confirm availability and price before travelling.",
    areas: "See every service area",
    contactH: "Stranded or need a mechanic?",
    contactP: "Send your location, vehicle and what happened. We’ll tell you the next step.",
  },
  es: {
    eye: "Mecánico móvil 24/7 · Rescate · Cairns y Far North Queensland",
    h1: "¿Te has quedado tirado?",
    h2: "Vamos hasta ti.",
    p: "Mecánico móvil, asistencia y rescate desde Port Douglas hasta Ingham y por Tablelands. Con taller y elevador en Cairns.",
    call: "Llamar ahora",
    message: "WhatsApp",
    proof: [["24/7", "Llamadas de emergencia"], ["Cualquier motor", "Todas las marcas"], ["Móvil + taller", "Ningún trabajo es demasiado grande"]],
    quickK: "Qué hacemos",
    quickH: "Ayuda donde estés. Taller cuando haga falta.",
    quick: [["Carretera y rescate", "Averías, arranque, bloqueos, remolque y rescate fuera de carretera."], ["Reparaciones de taller", "Embragues, correas de distribución, motores, transmisiones y trabajos de cualquier tamaño."], ["Revisiones e inspecciones", "Revisión 4x4, inspección precompra y gestión del RWC."]],
    all: "Ver todos los servicios",
    reviewsK: "Opiniones de clientes",
    reviewsH: "Confianza cuando más importa.",
    reviewsP: "Valorado con 4,9 en Google por residentes y viajeros de Cairns.",
    read: "Leer opiniones en Google",
    areaK: "Amplia zona de servicio",
    areaH: "De Port Douglas a Ingham, incluido Tablelands.",
    areaP: "El desplazamiento depende de la distancia. Dinos dónde estás y confirmaremos disponibilidad y precio antes de salir.",
    areas: "Ver todas las zonas",
    contactH: "¿Estás tirado o necesitas mecánico?",
    contactP: "Envía tu ubicación, vehículo y qué ha pasado. Te diremos el siguiente paso.",
  },
  fr: {
    eye: "Mécanicien mobile 24h/24 · Dépannage · Cairns et Far North Queensland",
    h1: "En panne ?",
    h2: "On vient à vous.",
    p: "Mécanicien mobile, assistance et dépannage de Port Douglas à Ingham et dans les Tablelands. Avec atelier et pont élévateur à Cairns.",
    call: "Appeler maintenant",
    message: "WhatsApp",
    proof: [["24h/24", "Appels d’urgence"], ["Tout moteur", "Toutes les marques"], ["Mobile + atelier", "Aucun travail trop grand"]],
    quickK: "Nos services",
    quickH: "De l’aide sur place. Un atelier si nécessaire.",
    quick: [["Route et dépannage", "Pannes, démarrage, clés bloquées, remorquage et récupération hors route."], ["Réparations en atelier", "Embrayages, courroies de distribution, moteurs, transmissions et travaux de toute taille."], ["Contrôles", "Contrôle 4x4, inspection avant achat et organisation du RWC."]],
    all: "Voir tous les services",
    reviewsK: "Avis clients",
    reviewsH: "La confiance quand elle compte.",
    reviewsP: "Noté 4,9 sur Google par les habitants et voyageurs de Cairns.",
    read: "Lire les avis Google",
    areaK: "Grande zone d’intervention",
    areaH: "De Port Douglas à Ingham, Tablelands compris.",
    areaP: "Les frais varient selon la distance. Indiquez votre position pour confirmer disponibilité et prix avant le déplacement.",
    areas: "Voir toutes les zones",
    contactH: "En panne ou besoin d’un mécanicien ?",
    contactP: "Envoyez votre position, le véhicule et le problème. Nous vous indiquerons la suite.",
  },
} satisfies Record<Lang, any>;

export function HomePage({ lang }: { lang: Lang }) {
  const c = homeCopy[lang];
  const pre = langPrefix(lang);
  const quickIcons = [CarFront, Wrench, Check];
  const schema = { "@context": "https://schema.org", "@type": "AutoRepair", name: "24-7 Mobile Cairns Mechanic", url: "https://cairnsmechanic.com.au", telephone: "+61 493 828 624", email: EMAIL, sameAs: [GOOGLE_MAPS_URL], address: { "@type": "PostalAddress", streetAddress: "Unit 3/3 Toohey St", addressLocality: "Portsmith", postalCode: "4870", addressRegion: "QLD", addressCountry: "AU" }, openingHours: "Mo-Fr 07:30-17:00", contactPoint: { "@type": "ContactPoint", contactType: "24/7 mobile roadside assistance", telephone: "+61 493 828 624", availableLanguage: ["English", "Spanish", "French"], hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" } }, availableLanguage: ["English", "Spanish", "French"], areaServed: suburbs.map((name) => ({ "@type": "Place", name })), hasOfferCatalog: { "@type": "OfferCatalog", name: "Mechanical services", itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.text[lang].title } })) } };

  return <><Header lang={lang} page="home" /><main>
    <section className="hero home-simple"><div className="hero-photo" /><div className="hero-overlay" /><div className="wrap simple-hero-content">
      <p className="eyebrow"><MapPin size={15} />{c.eye}</p><h1>{c.h1}<br /><em>{c.h2}</em></h1><p>{c.p}</p>
      <div className="cta-row"><a className="btn primary" href={PHONE_LINK}><Phone size={20} />{PHONE_DISPLAY}</a><a className="btn secondary on-dark" href={WHATSAPP_LINK}><MessageCircle size={20} />{c.message}</a></div>
    </div></section>
    <section className="proof-strip"><div className="wrap">{c.proof.map((x: string[]) => <div key={x[0]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</div></section>
    <section className="section home-services"><div className="wrap"><header className="section-head"><p className="kicker">{c.quickK}</p><h2>{c.quickH}</h2></header><div className="quick-grid">{c.quick.map((x: string[], i: number) => { const Icon = quickIcons[i]; return <article key={x[0]}><Icon /><h3>{x[0]}</h3><p>{x[1]}</p></article>; })}</div><a className="btn dark" href={`${pre}/services`}>{c.all}<ArrowRight size={17} /></a></div></section>
    <section className="review-section" id="reviews"><div className="wrap review-grid"><div><p className="kicker light">{c.reviewsK}</p><h2>{c.reviewsH}</h2><p>{c.reviewsP}</p><a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">{c.read}<ArrowRight size={16} /></a></div><div className="review-score" aria-label="4.9 out of 5 on Google"><strong>4.9</strong><div>{[1,2,3,4,5].map((x) => <Star key={x} fill="currentColor" />)}</div><span>GOOGLE RATING</span></div></div></section>
    <section className="section home-area"><div className="wrap"><p className="kicker">{c.areaK}</p><h2>{c.areaH}</h2><p>{c.areaP}</p><a className="btn dark" href={`${pre}/areas-we-service`}>{c.areas}<ArrowRight size={17} /></a></div></section>
    <section className="contact"><div className="wrap contact-grid"><div><p className="kicker">CAIRNS MECHANIC · 24/7</p><h2>{c.contactH}</h2><p>{c.contactP}</p></div><div className="contact-actions"><a className="btn dark" href={PHONE_LINK}><Phone size={18} />{PHONE_DISPLAY}</a><a className="btn secondary" href={WHATSAPP_LINK}><MessageCircle size={18} />WhatsApp</a><a className="btn secondary contact-email" href={EMAIL_LINK}><Mail size={17} />{EMAIL}</a></div></div></section>
  </main><Footer lang={lang} /><MobileBar lang={lang} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
