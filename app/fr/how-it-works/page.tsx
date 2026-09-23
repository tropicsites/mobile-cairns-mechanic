import type { Metadata } from "next";
import { ProcessPage } from "@/components/process-page";
export const metadata: Metadata = { title: "Comment ça marche", description: "Comment demander une intervention mobile, un dépannage ou une réparation en atelier.", alternates: { canonical: "/fr/how-it-works" } };
export default function Page() { return <ProcessPage lang="fr" />; }
