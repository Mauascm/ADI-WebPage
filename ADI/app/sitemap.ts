import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/data-ai-office",
    "/capacidades",
    "/modelo",
    "/experiencia",
    "/contacto",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
