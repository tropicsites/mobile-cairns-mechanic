import type { Metadata } from "next";
import { ProcessPage } from "@/components/process-page";
export const metadata: Metadata = { title: "Cómo funciona", description: "Cómo pedir ayuda mecánica móvil, rescate o reparación en taller.", alternates: { canonical: "/es/how-it-works" } };
export default function Page() { return <ProcessPage lang="es" />; }
