/**
 * Dati dell'agenzia in un unico punto. I valori tra [PARENTESI QUADRE] sono
 * segnaposto: vanno sostituiti con i dati reali prima del lancio in produzione.
 * Vedi README.md per l'elenco completo dei segnaposto da compilare.
 */

// Dominio placeholder: da aggiornare con il dominio reale acquistato.
export const siteUrl = "https://www.mtagency.it";

export const siteConfig = {
  name: "MT Agency",
  legalName: "MT Agency",
  tagline: "Più clienti dalla ricerca su Google, senza pensieri",
  description:
    "MT Agency gestisce la scheda Google Business Profile e il sito web di artigiani ed emergenze in provincia di Catania: più chiamate dalla ricerca locale, a un prezzo trasparente di 200€/mese.",
  url: siteUrl,

  // Contatti — SEGNAPOSTO da compilare
  phoneDisplay: "[TELEFONO]",
  phoneHref: "tel:+39[TELEFONO_NUMERICO]",
  whatsappNumber: "[WHATSAPP_NUMERO_INTERNAZIONALE]", // es. 393331234567 (senza +, senza spazi)
  email: "[EMAIL]",

  // Area servita
  addressLocality: "Catania",
  addressRegion: "Sicilia",
  addressCountry: "IT",
  areaServed: ["Catania", "Provincia di Catania", "Sicilia"],

  // Dati legali — SEGNAPOSTO da compilare (due partite IVA individuali, no REA/capitale sociale)
  vatNumber: "[PARTITA IVA]",

  // Social — SEGNAPOSTO, lasciare vuoto l'array se non ancora attivi
  social: {
    instagram: "[LINK_INSTAGRAM]",
    facebook: "[LINK_FACEBOOK]",
    linkedin: "[LINK_LINKEDIN]",
  },

  priceMonthly: 200,
  priceCurrency: "EUR",
} as const;

export function whatsappHref(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export const whatsappDefaultMessage =
  "Ciao, vorrei l'audit gratuito della mia scheda Google";
