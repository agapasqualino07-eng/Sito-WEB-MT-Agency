"use server";

import { headers } from "next/headers";
import { contactFormSchema } from "@/lib/validation";
import { isRateLimited } from "@/lib/rate-limit";
import { siteConfig } from "@/lib/site-config";

const TIME_TRAP_MS = 2000;

const GENERIC_ERROR =
  "Non siamo riusciti a inviare il messaggio. Riprova tra poco oppure chiamaci o scrivici direttamente su WhatsApp.";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string[]>;
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

async function getClientIp(): Promise<string> {
  const headerList = await headers();
  const forwardedFor = headerList.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]!.trim();
  return headerList.get("x-real-ip") ?? "unknown";
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: campo nascosto che un utente reale non compila mai.
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    // Non rivelare al bot che è stato bloccato: risposta identica al successo.
    return {
      status: "success",
      message: "Messaggio inviato! Ti ricontattiamo il prima possibile.",
    };
  }

  // Time-trap: invii più veloci della soglia sono quasi certamente automatici.
  const startedAtRaw = formData.get("startedAt");
  const startedAt = Number(startedAtRaw);
  if (!startedAtRaw || Number.isNaN(startedAt) || Date.now() - startedAt < TIME_TRAP_MS) {
    return {
      status: "success",
      message: "Messaggio inviato! Ti ricontattiamo il prima possibile.",
    };
  }

  const ip = await getClientIp();
  if (isRateLimited(ip)) {
    return {
      status: "error",
      message:
        "Troppe richieste in poco tempo. Riprova tra qualche minuto oppure chiamaci direttamente.",
    };
  }

  const parsed = contactFormSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    activity: formData.get("activity"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Controlla i campi evidenziati e riprova.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  const { name, phone, activity, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error(
      "[contact] Invio email non configurato: mancano RESEND_API_KEY, CONTACT_TO_EMAIL o RESEND_FROM_EMAIL."
    );
    return { status: "error", message: GENERIC_ERROR };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${siteConfig.name} <${fromEmail}>`,
        to: [toEmail],
        subject: `Nuova richiesta audit gratuito – ${name}`,
        text: [
          `Nuovo contatto dal sito ${siteConfig.name}`,
          "",
          `Nome: ${name}`,
          `Telefono/WhatsApp: ${phone}`,
          `Tipo di attività: ${activity}`,
          `Messaggio: ${message || "(nessun messaggio aggiuntivo)"}`,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("[contact] Errore invio email:", await response.text());
      return { status: "error", message: GENERIC_ERROR };
    }
  } catch (error) {
    console.error("[contact] Errore invio email:", error);
    return { status: "error", message: GENERIC_ERROR };
  }

  return {
    status: "success",
    message:
      "Messaggio inviato! Ti ricontattiamo il prima possibile, oppure chiamaci subito se preferisci.",
  };
}
