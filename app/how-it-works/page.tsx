import type { Metadata } from "next";
import { ProcessPage } from "@/components/process-page";
export const metadata: Metadata = { title: "How It Works", description: "How to book mobile mechanical help, roadside recovery or workshop repairs with Cairns Mechanic.", alternates: { canonical: "/how-it-works", languages: { "en-AU": "/how-it-works", es: "/es/how-it-works", fr: "/fr/how-it-works" } } };
export default function Page() { return <ProcessPage lang="en" />; }
