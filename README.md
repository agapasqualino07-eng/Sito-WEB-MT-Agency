# MT Agency — sito istituzionale

Sito web dell'agenzia MT Agency (local SEO / Google Business Profile + siti
web in abbonamento per artigiani di servizio ed emergenza e concessionarie
in provincia di Catania). Next.js (App Router) + TypeScript, quasi
interamente statico (SSG), deploy pensato per Vercel.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** per lo styling
- **Zod** per la validazione server-side del form di contatto
- **next/font** per i font self-hosted (nessuna richiesta a Google Fonts)
- Nessun database: contenuti statici, form di contatto via Server Action

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

Altri script:

```bash
npm run build   # build di produzione
npm run start   # avvia la build di produzione
npm run lint    # ESLint
```

### Variabili d'ambiente

Copia `.env.example` in `.env.local` per lo sviluppo locale. Servono per
l'invio email del modulo di contatto (tramite [Resend](https://resend.com)):

- `RESEND_API_KEY` — chiave API di Resend (solo server-side)
- `CONTACT_TO_EMAIL` — casella email a cui arrivano le richieste dal form
- `RESEND_FROM_EMAIL` — indirizzo mittente verificato su Resend

Nessuna di queste variabili deve avere il prefisso `NEXT_PUBLIC_` (non sono
mai esposte al client). Senza queste variabili il form mostra un errore
generico e invita l'utente a chiamare o scrivere su WhatsApp: nessuna
richiesta viene persa silenziosamente, ma nemmeno recapitata via email.

### Sicurezza delle dipendenze (CI)

Il repository include `.github/dependabot.yml` (aggiornamenti npm
settimanali). È consigliato aggiungere, nella pipeline CI, uno step che
esegua:

```bash
npm audit --audit-level=high
```

come gate di build, per bloccare deploy con vulnerabilità note ad alta
severità nelle dipendenze.

## Deploy su Vercel

1. Importa il repository su [vercel.com/new](https://vercel.com/new).
2. Framework Preset: Next.js (rilevato automaticamente).
3. Imposta le variabili d'ambiente (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`,
   `RESEND_FROM_EMAIL`) in **Project Settings → Environment Variables**,
   marcando `RESEND_API_KEY` come **Sensitive**.
4. Collega il dominio reale in **Project Settings → Domains** e aggiorna
   `siteUrl` in `lib/site-config.ts` con il dominio definitivo.
5. Deploy.

### Attivare il Bot Protection di Vercel

1. Vai su **Project Settings → Security** (o **Firewall**, a seconda del
   piano).
2. Attiva il **Bot Filter / Bot Protection** managed ruleset (incluso
   gratuitamente): filtra automaticamente i bot noti dal traffico verso il
   sito e in particolare verso il form di contatto.
3. Se lo spam sul form di contatto dovesse aumentare, valuta l'**Attack
   Challenge Mode** (mostra una sfida ai visitatori durante attacchi
   volumetrici) oppure aggiungi [Cloudflare
   Turnstile](https://developers.cloudflare.com/turnstile/) davanti al
   form (cookieless, non richiede consenso cookie).

## Attivare il cookie banner (solo se necessario in futuro)

Il sito, così com'è, non installa cookie non tecnici (font self-hosted,
nessun analytics con cookie, nessuno script di terze parti): per questo
**non** mostra un banner cookie, ed è dichiarato esplicitamente nella
Cookie Policy.

Se in futuro si aggiunge uno strumento che installa cookie non tecnici:

1. Importa `CookieConsentBanner` da `components/cookie-consent-banner.tsx`
   in `app/layout.tsx` e renderlo nel `<body>`.
2. Fai partire lo script/strumento con cookie **solo se**
   `localStorage.getItem("mt-cookie-consent") === "accepted"`.
3. Aggiorna la Cookie Policy (`app/cookie-policy/page.tsx`) con l'elenco
   dei cookie non tecnici installati.

Il componente ha già pulsanti "Accetta"/"Rifiuta" di pari evidenza, nessuna
preselezione e consenso rifiutabile in un click, come richiesto dalle linee
guida del Garante Privacy.

## Analytics (facoltativo)

Il sito non include analytics per impostazione predefinita (zero cookie,
zero richieste a terze parti). Se in futuro serve misurare il traffico
senza banner cookie, si consiglia uno strumento **cookieless** come
[Plausible](https://plausible.io) o [Umami](https://umami.is): non usano
cookie né dati personali, quindi non richiedono consenso. In tal caso:

1. Aggiungi lo script secondo la documentazione dello strumento scelto.
2. Aggiorna la CSP in `next.config.ts` (`connect-src` e, se lo script è
   esterno, `script-src`) per consentire il dominio dello strumento.

## Segnaposto da compilare

Tutti i valori tra `[PARENTESI QUADRE]` nel codice sono segnaposto. Elenco
completo:

| Segnaposto | Dove | Descrizione |
| --- | --- | --- |
| `[TELEFONO]` / `[TELEFONO_NUMERICO]` | `lib/site-config.ts` | Numero di telefono da mostrare e link `tel:` |
| `[WHATSAPP_NUMERO_INTERNAZIONALE]` | `lib/site-config.ts` | Numero WhatsApp in formato internazionale senza `+` (es. `393331234567`) |
| `[EMAIL]` | `lib/site-config.ts` | Email di contatto pubblica |
| `[PARTITA IVA]` | `lib/site-config.ts` | Partita IVA da mostrare in home/footer e nel JSON-LD (`vatID`) |
| `[LINK_INSTAGRAM]`, `[LINK_FACEBOOK]`, `[LINK_LINKEDIN]` | `lib/site-config.ts` | Profili social (lasciare il segnaposto se non attivi: vengono esclusi automaticamente dal JSON-LD) |
| `https://www.mtagency.it` (dominio) | `lib/site-config.ts` (`siteUrl`) | Dominio reale del sito, usato per canonical, sitemap, robots, Open Graph e JSON-LD |
| `[DATA_AGGIORNAMENTO]` | `app/privacy-policy/page.tsx`, `app/cookie-policy/page.tsx` | Data di ultimo aggiornamento delle informative |
| `[INDIRIZZO_TITOLARE]` | `app/privacy-policy/page.tsx` | Sede/indirizzo del titolare del trattamento |
| `[DATI_SECONDO_TITOLARE]` | `app/privacy-policy/page.tsx` | Da compilare solo se i due founder agiscono come contitolari del trattamento con partite IVA distinte |
| `[DETTAGLI_FORNITORE_EMAIL]` | `app/privacy-policy/page.tsx` | Dettagli/link alla informativa privacy di Resend (o del fornitore email scelto) |

## Struttura del progetto

```
app/
  layout.tsx              Layout root: header, footer, sticky CTA, JSON-LD, metadata di default
  page.tsx                Home
  servizi/page.tsx         Offerta e prezzo
  chi-siamo/page.tsx       Missione, founder, obiettivi
  contatti/                Pagina contatti + form (contact-form.tsx, client component)
  actions/contact.ts       Server Action: validazione Zod, honeypot, time-trap, rate limit, invio email
  privacy-policy/, cookie-policy/   Pagine legali
  sitemap.ts, robots.ts    SEO file conventions
  opengraph-image.tsx, icon.tsx, apple-icon.tsx, logo.png/route.tsx   Immagini generate (next/og)
components/                Header, Footer, StickyCta, CTA button, Logo, Faq, CookieConsentBanner
lib/                       site-config.ts (dati agenzia), schema.ts (JSON-LD), validation.ts, rate-limit.ts
```
