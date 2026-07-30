import type { Metadata } from "next";
import { CallButton, WhatsAppButton } from "@/components/cta-links";

export const metadata: Metadata = {
  title: "Servizi e offerta: scheda Google + sito web a 200€/mese",
  description:
    "Cosa è incluso nel bundle MT Agency: gestione scheda Google Business Profile e sito web in abbonamento a 200€/mese. Prezzo trasparente, nessun vincolo.",
  alternates: { canonical: "/servizi" },
};

const included = [
  {
    title: "Gestione scheda Google Business Profile",
    items: [
      "Pubblicazione periodica di post sulla scheda",
      "Risposte alle recensioni, positive e negative",
      "Ottimizzazione di categorie, orari, servizi e foto",
      "Gestione della sezione Domande&Risposte",
      "Contenuti scritti con l'aiuto dell'AI e sempre revisionati da una persona prima della pubblicazione",
    ],
  },
  {
    title: "Sito web vetrina in abbonamento",
    items: [
      "Sito professionale, mobile-first, veloce da caricare",
      "Aggiornamenti quando servono (nuovi servizi, foto, orari, contatti)",
      "Hosting e manutenzione tecnica inclusi",
      "Nessun vincolo lungo: cancellabile in qualsiasi momento",
    ],
  },
];

const notIncluded = [
  "Campagne pubblicitarie a pagamento (Google Ads, Meta Ads): non è il nostro modello, lavoriamo sulla ricerca organica locale",
  "Produzione fotografica o video professionale (si può concordare separatamente)",
  "Creazione di un nuovo brand da zero (logo, identità visiva)",
  "Email marketing o gestione CRM",
];

const idealFor = [
  "Sei un artigiano di servizio o emergenza (elettricista, fabbro, idraulico, spurghi, condizionamento) o una concessionaria in provincia di Catania",
  "Vuoi più chiamate da chi ti cerca già su Google, non contatti freddi da pubblicità",
  "Sei disponibile a rispondere velocemente a chiamate e recensioni: la scheda genera l'occasione, la chiudi tu",
  "Vuoi un prezzo fisso e chiaro, senza sorprese in fattura",
];

export default function ServiziPage() {
  return (
    <>
      <section className="bg-brand text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Un solo abbonamento: scheda Google + sito web
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            200€/mese, tutto incluso. Prezzo trasparente, nessun contratto
            lungo: lo spieghiamo per intero qui sotto, così arrivi in
            chiamata già informato.
          </p>
        </div>
      </section>

      {/* Prezzo */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-bg-muted p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
            Prezzo dell&apos;abbonamento
          </p>
          <p className="text-5xl font-extrabold text-brand">
            200€<span className="text-xl font-medium text-ink-soft">/mese</span>
          </p>
          <p className="max-w-md text-sm text-ink-soft">
            Un unico canone mensile, cancellabile quando vuoi. Nessun costo
            di attivazione nascosto.
          </p>
        </div>
      </section>

      {/* Cosa è incluso */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Cosa è incluso
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {included.map((block) => (
            <div
              key={block.title}
              className="rounded-xl border border-border bg-white p-6"
            >
              <h3 className="font-semibold text-ink">{block.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-brand">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Cosa non è incluso */}
      <section className="bg-bg-muted py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Cosa NON è incluso
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Preferiamo dirtelo prima, non dopo: ecco cosa non fa parte del
            bundle da 200€/mese.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {notIncluded.map((item) => (
              <li
                key={item}
                className="flex gap-2 rounded-lg border border-border bg-white p-4 text-sm text-ink-soft"
              >
                <span aria-hidden="true">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Per chi è ideale */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Per chi è ideale
        </h2>
        <ul className="mt-6 space-y-3">
          {idealFor.map((item) => (
            <li key={item} className="flex gap-3 text-ink-soft">
              <span aria-hidden="true" className="mt-1 text-accent">
                ●
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Risultati attesi */}
      <section className="bg-bg-muted py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Cosa aspettarti
          </h2>
          <p className="mt-4 text-ink-soft">
            Non prometto numeri che non possiamo controllare: nessuno può
            garantire quante chiamate riceverai. Quello che facciamo è
            lavorare con costanza su scheda Google e sito perché chi cerca
            un artigiano come te a Catania e provincia trovi una presenza
            online curata, aggiornata e affidabile, invece di una scheda
            abbandonata.
          </p>
        </div>
      </section>

      {/* CTA finale */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Prima di decidere, guardiamo insieme la tua scheda
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft">
          L&apos;audit gratuito non è una demo commerciale: è un&apos;analisi
          reale della tua scheda Google Business Profile.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CallButton size="lg" />
          <WhatsAppButton size="lg" label="Richiedi l'audit gratuito" />
        </div>
      </section>
    </>
  );
}
