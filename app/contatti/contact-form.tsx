"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  initialContactFormState,
  submitContactForm,
} from "@/app/actions/contact";
import { activityTypes } from "@/lib/validation";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialContactFormState
  );
  const formRef = useRef<HTMLFormElement>(null);
  const startedAtRef = useRef<HTMLInputElement>(null);

  // Impostato solo lato client (dopo il mount) per evitare un mismatch di
  // idratazione: il valore non può essere noto durante il render server.
  useEffect(() => {
    if (startedAtRef.current) {
      startedAtRef.current.value = String(Date.now());
    }
  }, []);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  const fieldErrors = state.fieldErrors ?? {};

  return (
    <form ref={formRef} action={formAction} className="space-y-5" noValidate>
      {/* Honeypot: campo nascosto agli utenti reali, visibile ai bot che compilano tutto */}
      <div className="absolute -left-[9999px] top-0" aria-hidden="true">
        <label htmlFor="website">Non compilare questo campo</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input type="hidden" name="startedAt" ref={startedAtRef} defaultValue="" />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1.5 block w-full rounded-lg border border-border px-3.5 py-2.5 text-ink shadow-sm focus:border-brand"
        />
        {fieldErrors.name && (
          <p className="mt-1.5 text-sm text-red-600">{fieldErrors.name[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-ink">
          Telefono o WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="mt-1.5 block w-full rounded-lg border border-border px-3.5 py-2.5 text-ink shadow-sm focus:border-brand"
        />
        {fieldErrors.phone && (
          <p className="mt-1.5 text-sm text-red-600">{fieldErrors.phone[0]}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="activity"
          className="block text-sm font-medium text-ink"
        >
          Tipo di attività
        </label>
        <select
          id="activity"
          name="activity"
          required
          defaultValue=""
          className="mt-1.5 block w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-ink shadow-sm focus:border-brand"
        >
          <option value="" disabled>
            Seleziona la tua attività
          </option>
          {activityTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {fieldErrors.activity && (
          <p className="mt-1.5 text-sm text-red-600">
            {fieldErrors.activity[0]}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-ink"
        >
          Messaggio (facoltativo)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1.5 block w-full rounded-lg border border-border px-3.5 py-2.5 text-ink shadow-sm focus:border-brand"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="min-h-[48px] w-full rounded-lg bg-accent px-5 font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Invio in corso…" : "Richiedi l'audit gratuito"}
      </button>

      {state.status !== "idle" && (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${
            state.status === "success" ? "text-green-700" : "text-red-600"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
