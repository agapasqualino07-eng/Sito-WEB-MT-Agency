import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sul trattamento dei dati personali di MT Agency ai sensi del Regolamento UE 2016/679 (GDPR).",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-ink">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-ink-soft">
        Ultimo aggiornamento: [DATA_AGGIORNAMENTO]
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-ink-soft">
        <div>
          <h2 className="text-lg font-semibold text-ink">
            1. Titolare del trattamento
          </h2>
          <p className="mt-2">
            Il Titolare del trattamento dei dati raccolti tramite questo sito
            è {siteConfig.legalName}, P.IVA {siteConfig.vatNumber}, con sede
            in [INDIRIZZO_TITOLARE], contattabile all&apos;indirizzo email{" "}
            {siteConfig.email}. Il progetto è gestito da due soci fondatori
            operanti con partita IVA individuale: se agiscono come
            contitolari del trattamento ai sensi dell&apos;art. 26 GDPR, i
            dati di entrambi vanno indicati qui: [DATI_SECONDO_TITOLARE].
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-ink">
            2. Dati raccolti
          </h2>
          <p className="mt-2">
            Attraverso il modulo di contatto raccogliamo: nome, numero di
            telefono/WhatsApp, tipo di attività e l&apos;eventuale messaggio
            che inserisci volontariamente. Per finalità di sicurezza e
            prevenzione dello spam, il nostro sistema elabora in modo
            transitorio l&apos;indirizzo IP da cui parte l&apos;invio: questo
            dato non viene salvato in un database, ma trattato in memoria
            per un breve periodo (fino a 10 minuti) al solo scopo di
            limitare invii ripetuti automatizzati.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-ink">
            3. Finalità del trattamento
          </h2>
          <p className="mt-2">
            I dati raccolti tramite il modulo di contatto sono trattati per:
            rispondere alla tua richiesta di audit gratuito o informazioni,
            ricontattarti telefonicamente o via WhatsApp/email, prevenire
            invii automatizzati e abusi del modulo (anti-spam).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-ink">
            4. Base giuridica
          </h2>
          <p className="mt-2">
            Il trattamento si basa sull&apos;esecuzione di misure
            precontrattuali richieste dall&apos;interessato (art. 6.1.b
            GDPR), quando ci contatti per ricevere informazioni o un audit,
            e sul legittimo interesse del Titolare (art. 6.1.f GDPR) per le
            attività di prevenzione di abusi e spam.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-ink">
            5. Conservazione dei dati
          </h2>
          <p className="mt-2">
            I dati inviati tramite il modulo di contatto sono conservati per
            il tempo necessario a gestire la tua richiesta e, se diventi
            cliente, per la durata del rapporto contrattuale e per gli
            obblighi di legge successivi. L&apos;indirizzo IP trattato per
            finalità anti-spam non viene conservato oltre la finestra
            tecnica descritta al punto 2.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-ink">
            6. Destinatari dei dati
          </h2>
          <p className="mt-2">
            I dati inseriti nel modulo di contatto sono inviati, tramite un
            servizio di posta elettronica transazionale (Resend), alla
            casella email del Titolare, per permetterci di ricontattarti.
            Tale fornitore agisce come responsabile del trattamento ai sensi
            dell&apos;art. 28 GDPR. Il fornitore può trattare i dati anche al
            di fuori dello Spazio Economico Europeo; in tal caso il
            trasferimento avviene sulla base di garanzie adeguate (es.
            Clausole Contrattuali Standard della Commissione Europea).
            Dettagli aggiornati: [DETTAGLI_FORNITORE_EMAIL].
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-ink">
            7. Diritti dell&apos;interessato
          </h2>
          <p className="mt-2">
            In qualsiasi momento puoi esercitare, nei limiti e alle
            condizioni previste dagli articoli 15-22 del GDPR, il diritto
            di: accesso ai tuoi dati, rettifica, cancellazione, limitazione
            del trattamento, opposizione al trattamento, portabilità dei
            dati. Per esercitare questi diritti puoi scrivere a{" "}
            {siteConfig.email}. Hai inoltre diritto di proporre reclamo
            all&apos;Autorità Garante per la protezione dei dati personali
            (www.garanteprivacy.it).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-ink">8. Cookie</h2>
          <p className="mt-2">
            Per informazioni su come questo sito utilizza (o non utilizza)
            i cookie, consulta la nostra{" "}
            <a href="/cookie-policy" className="underline hover:text-brand">
              Cookie Policy
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-ink">
            9. Modifiche alla presente informativa
          </h2>
          <p className="mt-2">
            Questa informativa può essere aggiornata nel tempo, ad esempio
            in caso di modifiche normative o all&apos;introduzione di nuovi
            strumenti sul sito. La data di ultimo aggiornamento è indicata
            in cima alla pagina.
          </p>
        </div>
      </div>
    </section>
  );
}
