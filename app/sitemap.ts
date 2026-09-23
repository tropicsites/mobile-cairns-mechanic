import type { MetadataRoute } from "next";
import { services } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cairnsmechanic.com.au";
  return [
    { url: base, priority: 1 },
    { url: `${base}/es`, priority: 0.9 },
    { url: `${base}/fr`, priority: 0.9 },
    ...(["", "/es", "/fr"].flatMap((prefix) => [
      { url: `${base}${prefix}/about`, priority: 0.85 },
      { url: `${base}${prefix}/services`, priority: 0.9 },
      { url: `${base}${prefix}/how-it-works`, priority: 0.85 },
      { url: `${base}${prefix}/areas-we-service`, priority: 0.8 },
      ...services.map((service) => ({ url: `${base}${prefix}/services/${service.slug}`, priority: 0.85 })),
    ])),
  ];
}
