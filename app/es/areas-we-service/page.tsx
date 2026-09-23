import type { Metadata } from "next";
import { AreasPage } from "@/components/areas-page";
export const metadata: Metadata = { title: "Zonas del mecánico móvil", description: "Cobertura desde Port Douglas hasta Ingham y por Atherton Tablelands.", alternates: { canonical: "/es/areas-we-service", languages: { "en-AU": "/areas-we-service", es: "/es/areas-we-service", fr: "/fr/areas-we-service" } } };
export default function Page() { return <AreasPage lang="es" />; }
