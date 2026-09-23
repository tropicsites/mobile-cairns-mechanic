import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutPage } from "@/components/about-page";
import { Lang } from "@/lib/site-data";

export function generateStaticParams() { return [{ lang: "es" }, { lang: "fr" }]; }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (lang === "es") return { title: "Nosotros", description: "Conoce al equipo de Cairns Mechanic, con 15 años de experiencia.", alternates: { canonical: "/es/about" } };
  if (lang === "fr") return { title: "À propos", description: "Découvrez l’équipe Cairns Mechanic, forte de 15 ans d’expérience.", alternates: { canonical: "/fr/about" } };
  return {};
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!(["es", "fr"] as string[]).includes(lang)) notFound();
  return <AboutPage lang={lang as Lang} />;
}
