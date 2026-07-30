import type { Metadata } from "next";
import { CallButton, WhatsAppButton } from "@/components/cta-links";

export const metadata: Metadata = {
  title: "Chi siamo e i nostri obiettivi",
  description:
    "MT Agency nasce a Catania da due soci fondatori: marketing e sviluppo software uniti per dare agli artigiani siciliani la stessa presenza online delle grandi aziende.",
  alternates: { canonical: "/chi-siamo" },
};

const objectives = [
  {
    title: "ROI dimostrabile",
    description:
      "Non vendiamo fumo: ogni attività che facciamo sulla tua scheda Google e sul tuo sito ha un obiettivo misurabile, chiamate e contatti in più, non vanity metric.",
  },
  {
    title: "Relazione diretta",
    description:
      "Parli con chi lavora davvero sul tuo account, non con un call center. Siamo due persone raggiungibili, non un ufficio anonimo.",
  },
  {
    title: "Qualità umana sui contenuti",
    description:
      "L'AI ci aiuta a scrivere più velocemente, ma ogni post, risposta o testo pubblicato sulla tua scheda passa sempre da una revisione umana prima di andare online.",
  },
];

export default function ChiSiamoPage() {
  return (
    <>
      <section className="bg-brand text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Due persone di Catania, un obiettivo chiaro
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            Dare agli artigiani siciliani la stessa presenza online delle
            grandi aziende, a un prezzo sostenibile e senza vincoli.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Chi siamo
        </h2>
        <p className="mt-4 max-w-3xl text-ink-soft">
          MT Agency è un progetto part-time nato a Catania dall&apos;incontro
          di due soci fondatori con competenze complementari: uno con un
          background in marketing, vendita e copywriting, l&apos;altro
          ingegnere e sviluppatore software. Uniamo chi sa come si vende e
          si comunica con chi sa come si costruisce un sito veloce, sicuro e
          fatto bene.
        </p>
        <p className="mt-4 max-w-3xl text-ink-soft">
          Non siamo una grande agenzia con decine di clienti in gestione
          automatica: seguiamo un numero di artigiani che possiamo davvero
          curare, uno per uno, con la stessa attenzione che vorremmo per la
          nostra attività.
        </p>
      </section>

      <section className="bg-bg-muted py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            La nostra missione
          </h2>
          <p className="mt-4 max-w-3xl text-ink-soft">
            Gli artigiani siciliani lavorano bene quanto (spesso meglio di)
            qualsiasi grande azienda, ma online restano invisibili: schede
            Google abbandonate, nessun sito o un sito mai aggiornato. Il
            nostro obiettivo è cambiare questo, con strumenti concreti e un
            prezzo che un&apos;attività artigiana può sostenere senza
            pensieri, e senza legarsi a contratti che non vuole.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          I nostri obiettivi
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {objectives.map((objective) => (
            <div
              key={objective.title}
              className="rounded-xl border border-border bg-white p-6"
            >
              <h3 className="font-semibold text-ink">{objective.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {objective.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-muted py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Parliamone direttamente
          </h2>
          <p className="mt-3 text-ink-soft">
            Se lavori a Catania o provincia e vuoi capire se possiamo
            aiutarti, comincia con l&apos;audit gratuito della tua scheda
            Google.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CallButton size="lg" />
            <WhatsAppButton size="lg" label="Richiedi l'audit gratuito" />
          </div>
        </div>
      </section>
    </>
  );
}
