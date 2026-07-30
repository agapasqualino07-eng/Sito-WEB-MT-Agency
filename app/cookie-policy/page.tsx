import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Come MT Agency utilizza (o non utilizza) i cookie su questo sito web.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-ink">
        Cookie Policy
      </h1>
      <p className="mt-2 text-sm text-ink-soft">
        Ultimo aggiornamento: [DATA_AGGIORNAMENTO]
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-ink-soft">
        <div>
          <h2 className="text-lg font-semibold text-ink">
            1. Cosa sono i cookie
          </h2>
          <p className="mt-2">
            I cookie sono piccoli file di testo che i siti visitati
            depositano sul dispositivo dell&apos;utente, dove vengono
            memorizzati per essere poi ritrasmessi agli stessi siti alla
            visita successiva.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-ink">
            2. Cookie utilizzati da questo sito
          </h2>
          <p className="mt-2">
            Questo sito è stato progettato per non installare cookie di
            profilazione, di marketing o di terze parti, e al momento non
            installa nemmeno cookie tecnici. Non utilizziamo strumenti di
            analytics basati su cookie: i font sono caricati direttamente
            dal nostro server (nessuna richiesta a Google Fonts o ad altri
            servizi esterni). Per questo motivo non è presente un banner di
            consenso ai cookie: non ce n&apos;è bisogno, perché non
            installiamo cookie non tecnici.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-ink">
            3. Modulo di contatto
          </h2>
          <p className="mt-2">
            Il modulo di contatto nella pagina{" "}
            <a href="/contatti" className="underline hover:text-brand">
              Contatti
            </a>{" "}
            non utilizza cookie. Per finalità anti-spam elaboriamo in modo
            transitorio, in memoria del server e non tramite cookie,
            l&apos;indirizzo IP di chi invia il modulo: i dettagli sono
            descritti nella{" "}
            <a href="/privacy-policy" className="underline hover:text-brand">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-ink">
            4. Se in futuro aggiungeremo strumenti con cookie
          </h2>
          <p className="mt-2">
            Se in futuro decidessimo di aggiungere strumenti che installano
            cookie non tecnici (ad esempio uno strumento di analisi o
            marketing), aggiorneremo questa pagina e attiveremo un banner
            di consenso conforme alla normativa, con pulsanti &quot;Accetta&quot;
            e &quot;Rifiuta&quot; di pari evidenza, nessuna casella
            preselezionata e la possibilità di revocare il consenso in
            qualsiasi momento.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-ink">5. Contatti</h2>
          <p className="mt-2">
            Per qualsiasi domanda su questa Cookie Policy puoi scriverci a{" "}
            {siteConfig.email}.
          </p>
        </div>
      </div>
    </section>
  );
}
