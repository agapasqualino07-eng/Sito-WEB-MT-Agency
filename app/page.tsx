import type { Metadata } from "next";
import Link from "next/link";
import { CallButton, WhatsAppButton } from "@/components/cta-links";
import { Faq } from "@/components/faq";
import { plans, siteConfig, trialMonths } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Local SEO e siti web per artigiani a Catania",
  description:
    "Gestiamo la tua scheda Google Business Profile e/o il tuo sito web: più chiamate da clienti che ti cercano già, da 150€/mese, con il primo mese di prova. Audit gratuito.",
  alternates: { canonical: "/" },
};

const targetGroups = [
  {
    title: "Elettricisti",
    priority: true,
    description:
      "Il nostro settore prioritario. Interventi civili e industriali, manutenzioni, urgenze: chi ti cerca su Google deve trovare una scheda curata e un sito che dia fiducia subito.",
  },
  {
    title: "Fabbri",
    priority: true,
    description:
      "Pronto intervento e apertura porte: qui la velocità con cui il cliente ti trova (e si fida) decide se chiama te o il concorrente. Ottimizziamo la scheda per le ricerche d'urgenza.",
  },
  {
    title: "Idraulici e spurghi",
    description:
      "Perdite, allagamenti, tubazioni otturate: interventi che il cliente cerca nel momento del bisogno. Presenza online curata significa più chiamate quando contano davvero.",
  },
  {
    title: "Condizionamento",
    description:
      "Installazione, assistenza, manutenzione stagionale: una scheda Google ottimizzata intercetta le ricerche di chi vuole preventivi rapidi.",
  },
  {
    title: "Concessionarie",
    description:
      "Presenza locale solida per chi cerca il concessionario di zona: scheda Google curata e sito professionale con cui puoi aggiornare tu stesso il parco auto in vendita.",
  },
];

const results = [
  {
    title: "Più chiamate dalla ricerca locale",
    description:
      "Scheda Google Business Profile ottimizzata per comparire quando chi ha bisogno di te cerca su Google e Google Maps.",
  },
  {
    title: "Scheda Google curata ogni settimana",
    description:
      "Post, risposte alle recensioni e sezione Domande&Risposte gestiti da noi con l'account Agenzia Google, con contenuti scritti con l'aiuto dell'AI e sempre rivisti da una persona prima della pubblicazione.",
  },
  {
    title: "Sito professionale sempre aggiornato",
    description:
      "Un sito vetrina che racconta chi sei e cosa fai, in abbonamento, senza pensieri tecnici e senza vincoli lunghi.",
  },
];

const steps = [
  {
    number: "1",
    title: "Audit gratuito della tua scheda Google",
    description:
      "Guardiamo insieme la tua scheda Google Business Profile così com'è oggi: cosa funziona, cosa ti sta facendo perdere chiamate.",
  },
  {
    number: "2",
    title: "Attivazione del piano scelto",
    description:
      "Scegli se attivare solo il sito, solo la scheda Google o entrambi. Il primo mese è di prova: paghi solo dal secondo mese in poi.",
  },
  {
    number: "3",
    title: "Gestione continua",
    description:
      "Seguiamo scheda e sito nel tempo: post, recensioni, aggiornamenti. Tu rispondi al telefono, al resto pensiamo noi.",
  },
];

const faqItems = [
  {
    question: "Quanto costano i piani?",
    answer:
      "Tre opzioni: solo sito web (150€/mese), solo gestione Google Business Profile (150€/mese), oppure entrambi in un unico abbonamento (250€/mese, il più scelto). Nessun costo nascosto.",
  },
  {
    question: "Come funziona il primo mese di prova?",
    answer: `Attivi il piano che preferisci e il primo mese lo usiamo per mettere a posto le basi (scheda ottimizzata e/o sito online): non paghi nulla. L'addebito mensile parte solo dal ${
      trialMonths + 1
    }° mese in poi.`,
  },
  {
    question: "Devo firmare un contratto lungo?",
    answer:
      "No. È un abbonamento mensile cancellabile: se non ti sta portando risultati, puoi interrompere quando vuoi.",
  },
  {
    question: "Chi scrive i contenuti della mia scheda Google?",
    answer:
      "Usiamo l'AI per velocizzare la scrittura di post e risposte, ma ogni contenuto viene sempre riletto e approvato da una persona del nostro team prima di essere pubblicato.",
  },
  {
    question: "Lavorate solo con elettricisti e fabbri?",
    answer:
      "Sono i settori dove abbiamo più esperienza e diamo priorità, insieme a idraulici, spurghi, condizionamento e concessionarie in provincia di Catania. Se il tuo mestiere è simile, scrivici e ne parliamo.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Più clienti dalla ricerca su Google, senza pensieri
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/90 sm:text-xl">
              Gestiamo la tua scheda Google Business Profile e/o il tuo sito
              web: più chiamate da chi ti sta già cercando a Catania e
              provincia, da 150€/mese, con il primo mese di prova.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton size="lg" />
              <WhatsAppButton size="lg" label="Richiedi l'audit gratuito" />
            </div>
            <p className="mt-4 text-sm text-white/70">
              Nessun impegno: l&apos;audit della tua scheda Google è
              gratuito.
            </p>
          </div>
        </div>
      </section>

      {/* Chi aiutiamo */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Chi aiutiamo
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Lavoriamo con artigiani di servizio ed emergenza e concessionarie
          in provincia di Catania. Diamo priorità a elettricisti e fabbri,
          dove la nostra esperienza rende i risultati più veloci.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {targetGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-border bg-white p-5"
            >
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-ink">{group.title}</h3>
                {group.priority && (
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent-dark">
                    Priorità
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {group.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cosa otteniamo per te */}
      <section className="bg-bg-muted py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Cosa otteniamo per te
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {results.map((result) => (
              <div key={result.title}>
                <h3 className="font-semibold text-ink">{result.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Come funziona */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Come funziona, in 3 passi
        </h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="rounded-xl border border-border bg-white p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {step.number}
              </span>
              <h3 className="mt-4 font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Offerta in sintesi */}
      <section className="bg-brand text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Tre modi per iniziare, prezzo chiaro
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              Sito, scheda Google, o entrambi: scegli tu. Il primo mese è di
              prova su ogni piano: paghi solo dal secondo mese in poi.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`flex flex-col rounded-2xl p-6 ${
                  plan.highlighted
                    ? "bg-white text-ink ring-2 ring-accent"
                    : "bg-brand-dark text-white"
                }`}
              >
                {plan.highlighted && (
                  <span className="mb-3 inline-flex w-fit items-center rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-white">
                    Il più scelto
                  </span>
                )}
                <h3 className="font-semibold">{plan.name}</h3>
                <p
                  className={`mt-1 text-sm ${
                    plan.highlighted ? "text-ink-soft" : "text-white/75"
                  }`}
                >
                  {plan.tagline}
                </p>
                <p className="mt-5 text-3xl font-extrabold">
                  {plan.price}€
                  <span className="text-base font-medium">/mese</span>
                </p>
                <p
                  className={`mt-1 text-xs ${
                    plan.highlighted ? "text-ink-soft" : "text-white/70"
                  }`}
                >
                  1° mese di prova
                </p>
                <ul
                  className={`mt-5 flex-1 space-y-2 text-sm ${
                    plan.highlighted ? "text-ink-soft" : "text-white/85"
                  }`}
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span aria-hidden="true">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/servizi"
              className="text-sm font-semibold text-white underline underline-offset-4 hover:text-white/80"
            >
              Guarda cosa è incluso in ogni piano
            </Link>
          </div>
        </div>
      </section>

      {/* Prova / credibilità */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Non ti chiediamo di fidarti sulla parola
            </h2>
            <p className="mt-4 text-ink-soft">
              Non vendiamo promesse: durante l&apos;audit gratuito ti
              mostriamo, sulla tua stessa scheda Google, cosa manca oggi e
              cosa cambieremmo. Vedi il lavoro prima di decidere se
              procedere.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-white p-6">
            <p className="font-semibold text-ink">
              Come funziona l&apos;audit gratuito
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li>✓ Analisi della tua scheda Google Business Profile</li>
              <li>✓ Punti deboli che ti fanno perdere chiamate</li>
              <li>✓ Nessun impegno, nessuna pressione a comprare</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-muted py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Domande frequenti
          </h2>
          <div className="mt-8">
            <Faq items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Parliamo della tua scheda Google
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft">
          Un audit gratuito, senza impegno. Se ha senso per{" "}
          {siteConfig.addressLocality} e provincia, ne parliamo subito.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CallButton size="lg" />
          <WhatsAppButton size="lg" label="Richiedi l'audit gratuito" />
        </div>
      </section>
    </>
  );
}
