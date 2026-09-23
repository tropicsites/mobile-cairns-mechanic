import type { Metadata } from "next";
import { ServicesPage } from "@/components/services-page";
export const metadata: Metadata = { title: "Services mécaniques", description: "Mécanicien mobile, atelier, dépannage, contrôles et assistance 24h/24 dans Far North Queensland.", alternates: { canonical: "/fr/services" } };
export default function Page() { return <ServicesPage lang="fr" />; }
