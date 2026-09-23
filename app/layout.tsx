import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cairnsmechanic.com.au"),
  title: { default: "24/7 Mobile Mechanic Cairns | Cairns Mechanic", template: "%s | Cairns Mechanic" },
  description: "24/7 mobile mechanic, roadside assistance, recovery and workshop repairs across Cairns, Port Douglas, Ingham and the Atherton Tablelands.",
  keywords: ["mobile mechanic Cairns", "24/7 mechanic Cairns", "clutch replacement Cairns", "timing belt replacement Cairns", "RWC Cairns", "pre-purchase car inspection Cairns", "roadside assistance Cairns", "car recovery Cairns", "4WD pre-trip check Cairns"],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "24/7 Mobile Cairns Mechanic",
    title: "24/7 Mobile Mechanic Cairns",
    description: "Mobile roadside help, recovery and full workshop repairs across Far North Queensland.",
    url: "https://cairnsmechanic.com.au",
  },
  twitter: { card: "summary_large_image", title: "24/7 Mobile Mechanic Cairns", description: "Mobile roadside help, recovery and full workshop repairs across Far North Queensland." },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body>{children}</body></html>;
}
