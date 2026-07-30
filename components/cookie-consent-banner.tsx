"use client";

/**
 * Cookie banner PREDISPOSTO ma NON ATTIVO.
 *
 * Il sito, così com'è, non installa cookie non tecnici (font self-hosted,
 * nessun analytics con cookie, nessuno script di terze parti), quindi il
 * banner non è necessario ed è dichiarato come tale nella Cookie Policy.
 *
 * Se in futuro si aggiunge uno strumento che installa cookie non tecnici
 * (es. un tool di analytics o marketing con cookie), attivare così:
 * 1. Importare <CookieConsentBanner /> in app/layout.tsx e renderlo nel <body>.
 * 2. Far sì che lo script/strumento con cookie parta SOLO se
 *    localStorage.getItem("mt-cookie-consent") === "accepted".
 * 3. Aggiornare la Cookie Policy con l'elenco dei cookie non tecnici installati.
 */

import { useEffect, useState } from "react";

const STORAGE_KEY = "mt-cookie-consent";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // localStorage non è disponibile durante il render server: la scelta
    // salvata va letta dopo il mount, quindi qui è inevitabile un secondo
    // render lato client (nessun mismatch di idratazione: il banner parte
    // sempre nascosto lato server).
    const stored = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!stored) setVisible(true);
  }, []);

  if (!visible) return null;

  function choose(value: "accepted" | "rejected") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferenze cookie"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white p-4 shadow-lg"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-soft">
          Usiamo solo strumenti che non richiedono cookie non tecnici. Puoi
          comunque scegliere se accettare eventuali cookie non essenziali.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="min-h-[44px] rounded-lg border border-border px-4 text-sm font-semibold text-ink hover:bg-bg-muted"
          >
            Rifiuta
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="min-h-[44px] rounded-lg bg-brand px-4 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
