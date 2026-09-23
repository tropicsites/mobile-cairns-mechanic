import type { Metadata } from "next";
import { ServicesPage } from "@/components/services-page";
export const metadata: Metadata = { title: "Mechanical Services Cairns", description: "Clutch replacement, timing belts, RWC, pre-purchase inspections, workshop repairs, recovery and 24/7 mobile roadside help in Cairns.", alternates: { canonical: "/services", languages: { "en-AU": "/services", es: "/es/services", fr: "/fr/services" } } };
export default function Page() { return <ServicesPage lang="en" />; }
