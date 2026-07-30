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
    "MT Agency gestisce la scheda Google Business Profile e il sito web di artigiani ed emergenze in provincia di Catania: piani da 150€/mese, con il primo mese di prova.",
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

  priceCurrency: "EUR",
} as const;

// Primo mese di prova su qualsiasi piano: si paga solo dal mese successivo.
export const trialMonths = 1;

export const plans = [
  {
    id: "sito",
    name: "Solo sito web",
    price: 150,
    tagline: "Per chi vuole prima sistemare la vetrina online.",
    features: [
      "Sito professionale, mobile-first, veloce da caricare",
      "Hosting e manutenzione tecnica inclusi",
      "Aggiornamenti quando servono (servizi, foto, orari, contatti)",
    ],
    highlighted: false,
  },
  {
    id: "gbp",
    name: "Solo Google Business Profile",
    price: 150,
    tagline: "Per chi ha già un sito e vuole più chiamate dalla scheda.",
    features: [
      "Post periodici e risposte alle recensioni",
      "Ottimizzazione scheda e sezione Domande&Risposte",
      "Contenuti scritti con AI, sempre rivisti da una persona",
    ],
    highlighted: false,
  },
  {
    id: "bundle",
    name: "Sito + Google Business Profile",
    price: 250,
    tagline: "La combinazione più efficace, a prezzo scontato.",
    features: [
      "Tutto quello incluso negli altri due piani",
      "50€/mese in meno rispetto ad attivarli separatamente",
      "Sito e scheda Google si rafforzano a vicenda",
    ],
    highlighted: true,
  },
] as const;

export function whatsappHref(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export const whatsappDefaultMessage =
  "Ciao, vorrei l'audit gratuito della mia scheda Google";
