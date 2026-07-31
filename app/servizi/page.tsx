import type { Metadata } from "next";
import { CallButton, WhatsAppButton } from "@/components/cta-links";
import {
  plans,
  siteMaintenancePrice,
  siteOwnershipMonths,
  trialMonths,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Servizi e prezzi: sito, Google Business Profile o entrambi",
  description:
    "Non tutti partono dallo stesso punto: scegli se sistemare il sito, la scheda Google o entrambi. Tre piani da 150€/mese, primo mese di prova.",
  alternates: { canonical: "/servizi" },
};

const startingPoints = [
  {
    situation: "Non hai un sito, o è vecchissimo",
    plan: "Solo sito web",
  },
  {
    situation: "Hai già un sito ma la scheda Google è abbandonata",
    plan: "Solo Google Business Profile",
  },
  {
    situation: "Vuoi sistemare tutto in una volta",
    plan: "Sito + Google Business Profile",
  },
];

const planItems: Record<(typeof plans)[number]["id"], string[]> = {
  sito: [
    "Sito professionale, mobile-first, veloce da caricare",
    "Aggiornamenti quando servono (nuovi servizi, foto, orari, contatti)",
    "Hosting e manutenzione tecnica inclusi",
    "Per le concessionarie: pannello per inserire e aggiornare da soli le auto in vendita, sempre in autonomia",
    `Dopo ${siteOwnershipMonths} mesi il sito diventa tuo`,
  ],
  gbp: [
    "Pubblicazione periodica di post sulla scheda",
    "Risposte alle recensioni, positive e negative",
    "Ottimizzazione di categorie, orari, servizi e foto",
    "Gestione della sezione Domande&Risposte",
    "Contenuti scritti con l'aiuto dell'AI e sempre revisionati da una persona prima della pubblicazione",
  ],
  bundle: [
    "Tutto quello incluso nel piano Solo sito web",
    "Tutto quello incluso nel piano Solo Google Business Profile",
    "50€/mese in meno rispetto ad attivare i due piani separatamente",
    "Un unico referente per sito e scheda: coerenza tra i due canali",
    `Dopo ${siteOwnershipMonths} mesi il sito diventa tuo`,
  ],
};

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
            Non tutti partono dallo stesso punto
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            C&apos;è chi deve ancora mettere online un sito decente, e chi ha
            già un sito ma una scheda Google mai toccata. Per questo ci sono
            tre piani, non uno solo: scegli quello che ti serve davvero,
            senza pagare per quello che non ti manca.
          </p>
        </div>
      </section>

      {/* Da dove iniziare */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-xl font-bold tracking-tight text-ink">
          Da dove vuoi iniziare?
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {startingPoints.map((item) => (
            <div
              key={item.situation}
              className="rounded-xl border border-border bg-bg-muted p-5"
            >
              <p className="text-sm text-ink-soft">{item.situation}</p>
              <p className="mt-2 font-semibold text-brand">→ {item.plan}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Piani e prezzi */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col rounded-2xl border p-6 ${
                plan.highlighted
                  ? "border-accent bg-white ring-2 ring-accent"
                  : "border-border bg-white"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-3 inline-flex w-fit items-center rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-white">
                  Il più scelto
                </span>
              )}
              <h2 className="font-semibold text-ink">{plan.name}</h2>
              <p className="mt-1 text-sm text-ink-soft">{plan.tagline}</p>
              <p className="mt-5 text-3xl font-extrabold text-brand">
                {plan.price}€<span className="text-base font-medium text-ink-soft">/mese</span>
              </p>
              <p className="mt-1 text-xs text-ink-soft">
                1° mese di prova, poi si parte
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-ink-soft">
                {planItems[plan.id].map((item) => (
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

      {/* Primo mese di prova */}
      <section className="bg-bg-muted py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Il primo mese è di prova
          </h2>
          <p className="mt-4 text-ink-soft">
            Qualunque piano tu scelga, il primo mese lo usiamo per mettere a
            posto le basi: scheda Google ottimizzata e/o sito online, senza
            che tu paghi nulla. L&apos;addebito mensile parte solo dal{" "}
            {trialMonths + 1}° mese, quando il lavoro di fondo è già fatto e
            puoi valutare se ha senso continuare. Da lì è cancellabile
            quando vuoi.
          </p>
        </div>
      </section>

      {/* Dopo 12 mesi il sito è tuo */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Dopo {siteOwnershipMonths} mesi, il sito è tuo
          </h2>
          <p className="mt-4 text-ink-soft">
            Sui piani che includono il sito (Solo sito web e Sito + Google
            Business Profile), dopo {siteOwnershipMonths} mesi di abbonamento
            attivo il sito diventa a tutti gli effetti tuo. Da quel momento
            hai due strade, senza vincoli:
          </p>
          <ul className="mt-5 space-y-3 text-ink-soft">
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-1 text-brand">
                ●
              </span>
              <span>
                <strong className="text-ink">
                  Continui con noi la manutenzione a {siteMaintenancePrice}
                  €/mese
                </strong>{" "}
                — aggiornamenti, hosting e assistenza tecnica come prima, a
                un prezzo più basso perché il grosso del lavoro è già fatto.
              </span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-1 text-brand">
                ●
              </span>
              <span>
                <strong className="text-ink">
                  Oppure ti tieni il sito così com&apos;è
                </strong>{" "}
                — nessun altro pagamento, nessuna manutenzione da parte
                nostra, ma resta tuo e continua a funzionare.
              </span>
            </li>
          </ul>
          <p className="mt-5 text-sm text-ink-soft">
            Con il piano Bundle non cambia nulla in fattura: i 250€/mese
            restano invariati, semplicemente da quel momento coprono la
            manutenzione del sito ({siteMaintenancePrice}€, ormai di tua
            proprietà) più la gestione della scheda Google (150€).
          </p>
        </div>
      </section>

      {/* Cosa NON è incluso */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Cosa NON è incluso
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Preferiamo dirtelo prima, non dopo, anche se questo significa
          escluderci da qualche progetto: ecco cosa non fa parte di nessuno
          dei tre piani.
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
      </section>

      {/* Per chi è ideale */}
      <section className="bg-bg-muted py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Questo servizio fa per te se...
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
        </div>
      </section>

      {/* Risultati attesi */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Cosa aspettarti davvero
        </h2>
        <p className="mt-4 text-ink-soft">
          Non prometto numeri che non possiamo controllare: nessuno può
          garantire quante chiamate riceverai, e diffida di chi lo fa.
          Quello che facciamo è lavorare con costanza su scheda Google e
          sito perché chi cerca un artigiano come te a Catania e provincia
          trovi una presenza online curata, aggiornata e affidabile, invece
          di una scheda abbandonata. Il resto — chiudere la chiamata — resta
          il tuo mestiere.
        </p>
      </section>

      {/* CTA finale */}
      <section className="bg-bg-muted py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Prima di decidere, guardiamo insieme la tua scheda
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-soft">
            L&apos;audit gratuito non è una demo commerciale: è
            un&apos;analisi reale della tua scheda Google Business Profile,
            così scegli il piano giusto sapendo già cosa ti serve.
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
