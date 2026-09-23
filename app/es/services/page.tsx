import type { Metadata } from "next";
import { ServicesPage } from "@/components/services-page";
export const metadata: Metadata = { title: "Servicios mecánicos", description: "Mecánico móvil, taller, rescate, inspecciones y asistencia 24/7 en Far North Queensland.", alternates: { canonical: "/es/services" } };
export default function Page() { return <ServicesPage lang="es" />; }
