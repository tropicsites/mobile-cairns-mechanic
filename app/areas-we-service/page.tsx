import type { Metadata } from "next";
import { AreasPage } from "@/components/areas-page";
export const metadata: Metadata = { title: "Mobile Mechanic Service Areas", description: "Mobile mechanic coverage from Port Douglas to Ingham and across the Atherton Tablelands.", alternates: { canonical: "/areas-we-service", languages: { "en-AU": "/areas-we-service", es: "/es/areas-we-service", fr: "/fr/areas-we-service" } } };
export default function Page() { return <AreasPage lang="en" />; }
