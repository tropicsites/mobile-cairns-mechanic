import type { Metadata } from "next";
import { AreasPage } from "@/components/areas-page";
export const metadata: Metadata = { title: "Zones d’intervention", description: "Couverture de Port Douglas à Ingham et dans les Atherton Tablelands.", alternates: { canonical: "/fr/areas-we-service", languages: { "en-AU": "/areas-we-service", es: "/es/areas-we-service", fr: "/fr/areas-we-service" } } };
export default function Page() { return <AreasPage lang="fr" />; }
