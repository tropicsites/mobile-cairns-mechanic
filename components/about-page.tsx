import { Award, Check, MapPin, Phone, Users, Wrench } from "lucide-react";
import { Footer, Header, MobileBar } from "@/components/site-shell";
import { EMAIL, EMAIL_LINK, Lang, PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from "@/lib/site-data";

const aboutCopy = {
  en: {
    eyebrow: "About Cairns Mechanic",
    title: "Built to help people keep moving.",
    lead: "Led by Leon, a Brighton-born mechanic with 15 years of experience, our team follows one simple rule: treat every customer as if they were a friend or family member.",
    stats: [["15 years", "mechanical experience"], ["Level 3", "automotive qualification"], ["Plant + marine", "additional industry training"]],
    storyK: "Why Cairns Mechanic",
    storyH: "More than a parts fitter.",
    story1: "Leon’s training in England covered the whole vehicle—not just replacing parts. His experience spans light vehicles, diesel and heavy-duty systems, electrical fault finding, plant and marine equipment.",
    story2: "After travelling himself, Leon knows how completely people depend on their car. A breakdown can mean missing work, losing accommodation plans or becoming stranded far from home. That is why he built a mobile service backed by a workshop and hoist: practical help, wherever the job needs to happen.",
    cairnsH: "From Brighton to the tropics",
    cairnsP: "Leon came to Cairns for the tropical lifestyle, the strong work ethic and everything that makes Far North Queensland special—the reef, the 4WD tracks and the Daintree. He now lives here with his family and is proud to help locals, backpackers, travellers and businesses.",
    teamH: "A skilled team, one standard",
    teamP: "Leon works with a trusted team who share the same commitment to honest advice, thorough diagnosis and getting people safely moving again.",
    detailsK: "Workshop details",
    detailsH: "Mobile when possible. Workshop when needed.",
    details: ["Unit 3/3 Toohey St, Portsmith QLD 4870", "Workshop: Monday–Friday, 7:30am–5:00pm", "24/7 mobile emergency calls, subject to current availability", "English and Spanish spoken", "Card, cash, bank transfer and Afterpay", "leon.cairnsmechanic@gmail.com"],
    warrantyH: "Work backed with confidence",
    warrantyP: "Six-month workmanship warranty, plus the applicable supplier warranty on fitted parts.",
    ctaH: "Need a mechanic who will actually find the problem?",
    ctaP: "Call Leon or send your location, vehicle and symptoms on WhatsApp.",
    call: "Call the team",
  },
  es: {
    eyebrow: "Sobre Cairns Mechanic",
    title: "Creado para ayudar a la gente a seguir adelante.",
    lead: "Liderado por Leon, mecánico de Brighton con 15 años de experiencia, nuestro equipo sigue una norma sencilla: tratar a cada cliente como a un amigo o familiar.",
    stats: [["15 años", "de experiencia mecánica"], ["Nivel 3", "titulación de automoción"], ["Maquinaria + marina", "formación adicional"]],
    storyK: "Por qué Cairns Mechanic",
    storyH: "Mucho más que cambiar piezas.",
    story1: "La formación de Leon en Inglaterra abarcó el vehículo completo. Su experiencia incluye vehículos ligeros, sistemas diésel y pesados, diagnóstico eléctrico, maquinaria y motores marinos.",
    story2: "Como antiguo viajero, Leon sabe cuánto dependemos del coche. Una avería puede significar perder trabajo, alojamiento o quedarse tirado lejos de casa. Por eso creó un servicio móvil respaldado por un taller con elevador: ayuda práctica donde haga falta.",
    cairnsH: "De Brighton al trópico",
    cairnsP: "Leon llegó a Cairns por la vida tropical, la cultura de trabajo y todo lo especial del norte de Queensland: la barrera de coral, las pistas 4x4 y Daintree. Ahora vive aquí con su familia y ayuda con orgullo a residentes, mochileros, viajeros y empresas.",
    teamH: "Un equipo experto, un mismo estándar",
    teamP: "Leon trabaja con un equipo de confianza que comparte su compromiso con los consejos honestos, un diagnóstico completo y conseguir que la gente vuelva a circular con seguridad.",
    detailsK: "Datos del taller",
    detailsH: "Móvil cuando sea posible. Taller cuando sea necesario.",
    details: ["Unit 3/3 Toohey St, Portsmith QLD 4870", "Taller: lunes–viernes, 7:30–17:00", "Llamadas móviles de emergencia 24/7, según disponibilidad", "Atención en inglés y español", "Tarjeta, efectivo, transferencia y Afterpay", "leon.cairnsmechanic@gmail.com"],
    warrantyH: "Trabajo con garantía",
    warrantyP: "Seis meses de garantía sobre la mano de obra, además de la garantía del proveedor aplicable a las piezas instaladas.",
    ctaH: "¿Necesitas un mecánico que encuentre de verdad el problema?",
    ctaP: "Llama a Leon o envía tu ubicación, vehículo y síntomas por WhatsApp.",
    call: "Llamar al equipo",
  },
  fr: {
    eyebrow: "À propos de Cairns Mechanic",
    title: "Créé pour aider chacun à reprendre la route.",
    lead: "Dirigée par Leon, mécanicien originaire de Brighton avec 15 ans d’expérience, notre équipe suit une règle simple : traiter chaque client comme un ami ou un membre de la famille.",
    stats: [["15 ans", "d’expérience mécanique"], ["Niveau 3", "qualification automobile"], ["Engins + marine", "formation complémentaire"]],
    storyK: "Pourquoi Cairns Mechanic",
    storyH: "Bien plus qu’un monteur de pièces.",
    story1: "La formation de Leon en Angleterre couvrait l’ensemble du véhicule. Son expérience comprend les véhicules légers, les systèmes diesel et poids lourds, le diagnostic électrique, les engins et la mécanique marine.",
    story2: "Ancien voyageur, Leon sait à quel point on dépend de son véhicule. Une panne peut compromettre le travail, le logement ou vous laisser loin de chez vous. Il a donc créé un service mobile soutenu par un atelier avec pont élévateur.",
    cairnsH: "De Brighton aux tropiques",
    cairnsP: "Leon a choisi Cairns pour le mode de vie tropical, la culture du travail et tout ce qui rend Far North Queensland unique : la Grande Barrière, les pistes 4x4 et Daintree. Il y vit désormais avec sa famille et aide habitants, backpackers, voyageurs et entreprises.",
    teamH: "Une équipe compétente, une même exigence",
    teamP: "Leon travaille avec une équipe de confiance qui partage son engagement : conseils honnêtes, diagnostic rigoureux et remise en route en toute sécurité.",
    detailsK: "Informations atelier",
    detailsH: "Mobile si possible. Atelier si nécessaire.",
    details: ["Unit 3/3 Toohey St, Portsmith QLD 4870", "Atelier : lundi–vendredi, 7h30–17h00", "Appels d’urgence mobile 24h/24, selon disponibilité", "Service en anglais et espagnol", "Carte, espèces, virement et Afterpay", "leon.cairnsmechanic@gmail.com"],
    warrantyH: "Un travail garanti",
    warrantyP: "Garantie main-d’œuvre de six mois, plus la garantie fournisseur applicable aux pièces installées.",
    ctaH: "Besoin d’un mécanicien qui trouve vraiment la panne ?",
    ctaP: "Appelez Leon ou envoyez votre position, véhicule et symptômes sur WhatsApp.",
    call: "Appeler l’équipe",
  },
} satisfies Record<Lang, any>;

export function AboutPage({ lang }: { lang: Lang }) {
  const c = aboutCopy[lang];
  return <><Header lang={lang} page="about" /><main>
    <section className="about-hero"><div className="wrap about-hero-grid">
      <div><p className="eyebrow"><Users size={15} />{c.eyebrow}</p><h1>{c.title}</h1><p>{c.lead}</p><div className="cta-row"><a className="btn primary" href={PHONE_LINK}><Phone size={18} />{c.call}</a><a className="btn secondary on-dark" href={WHATSAPP_LINK}>WhatsApp</a></div></div>
      <div className="about-badge"><Wrench /><span>BRIGHTON</span><strong>TO</strong><span>CAIRNS</span></div>
    </div></section>
    <section className="about-stats"><div className="wrap">{c.stats.map((s: string[]) => <div key={s[0]}><strong>{s[0]}</strong><span>{s[1]}</span></div>)}</div></section>
    <section className="section"><div className="wrap about-story-grid"><div><p className="kicker">{c.storyK}</p><h2>{c.storyH}</h2></div><div><p>{c.story1}</p><p>{c.story2}</p></div></div></section>
    <section className="about-values"><div className="wrap value-grid"><article><MapPin /><h2>{c.cairnsH}</h2><p>{c.cairnsP}</p></article><article><Users /><h2>{c.teamH}</h2><p>{c.teamP}</p></article></div></section>
    <section className="section"><div className="wrap detail-grid"><article><p className="kicker">{c.detailsK}</p><h2>{c.detailsH}</h2><div className="include-list">{c.details.map((x: string) => <div key={x}><Check />{x}</div>)}</div><h2>{c.warrantyH}</h2><p>{c.warrantyP}</p></article><aside><Award /><h3>{c.ctaH}</h3><p>{c.ctaP}</p><a href={PHONE_LINK}>{PHONE_DISPLAY}</a><a href={EMAIL_LINK}>{EMAIL}</a><a href={WHATSAPP_LINK}>WhatsApp</a></aside></div></section>
  </main><Footer lang={lang} /><MobileBar lang={lang} /></>;
}
