import { plans, siteConfig, siteUrl } from "./site-config";

export const organizationId = `${siteUrl}/#organization`;

function isPlaceholder(value: string) {
  return !value || value.startsWith("[");
}

/**
 * JSON-LD Organization + LocalBusiness (schema.org non usa più
 * "ProfessionalService", deprecato). Include un nodo Service con Offer
 * sotto hasOfferCatalog, con provider che punta all'@id dell'agenzia.
 * Validare con https://search.google.com/test/rich-results
 */
export function buildOrganizationJsonLd() {
  const telephone = siteConfig.phoneHref.startsWith("tel:")
    ? siteConfig.phoneHref.replace("tel:", "")
    : siteConfig.phoneHref;

  const sameAs = Object.values(siteConfig.social).filter(
    (url) => !isPlaceholder(url)
  );

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": organizationId,
    name: siteConfig.name,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${siteUrl}/logo.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      addressCountry: siteConfig.addressCountry,
    },
    telephone: isPlaceholder(telephone) ? undefined : telephone,
    email: isPlaceholder(siteConfig.email) ? undefined : siteConfig.email,
    areaServed: siteConfig.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    vatID: isPlaceholder(siteConfig.vatNumber)
      ? undefined
      : `IT${siteConfig.vatNumber}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servizi MT Agency",
      itemListElement: plans.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        price: String(plan.price),
        priceCurrency: siteConfig.priceCurrency,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: String(plan.price),
          priceCurrency: siteConfig.priceCurrency,
          unitText: "mese",
          billingDuration: "P1M",
        },
        itemOffered: {
          "@type": "Service",
          name: plan.name,
          description: plan.tagline,
          provider: { "@id": organizationId },
          areaServed: siteConfig.areaServed,
        },
      })),
    },
  };
}

export function jsonLdScriptProps(data: unknown) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    },
  } as const;
}
