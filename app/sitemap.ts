import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

const routes = ["", "/servizi", "/chi-siamo", "/contatti"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
