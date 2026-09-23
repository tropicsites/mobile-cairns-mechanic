import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the Cairns Mechanic team, led by a Level 3 qualified mechanic with 15 years of automotive, plant and marine experience.",
  alternates: { canonical: "/about", languages: { "en-AU": "/about", es: "/es/about", fr: "/fr/about" } },
};

export default function Page() { return <AboutPage lang="en" />; }
