import type { MetadataRoute } from "next";

const routes = [
  "",
  "/services",
  "/industries",
  "/case-studies",
  "/about",
  "/pricing",
  "/contact",
  "/blog",
  "/documentation",
  "/faqs",
  "/terms-and-policies",
  "/terms",
  "/privacy-policy",
  "/refund-policy",
  "/cookie-policy",
  "/acceptable-use-policy",
  "/payment-terms",
  "/project-delivery-policy",
  "/cancellation-policy",
  "/intellectual-property-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://asmantech.com";
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
