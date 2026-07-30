import { z } from "zod";

export const activityTypes = [
  "Elettricista",
  "Fabbro",
  "Idraulico",
  "Spurghi",
  "Condizionamento",
  "Concessionaria",
  "Altro",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Inserisci il tuo nome.")
    .max(100, "Nome troppo lungo."),
  phone: z
    .string()
    .trim()
    .min(6, "Inserisci un numero di telefono valido.")
    .max(30, "Numero di telefono troppo lungo.")
    .regex(/^[0-9+\s()./-]+$/, "Inserisci un numero di telefono valido."),
  activity: z.enum(activityTypes),
  message: z
    .string()
    .trim()
    .max(2000, "Messaggio troppo lungo.")
    .optional()
    .or(z.literal("")),
  // Honeypot: deve arrivare vuoto. Se compilato, è quasi certamente un bot.
  website: z.string().max(0).optional().or(z.literal("")),
  // Time-trap: timestamp (ms) impostato dal client al mount del form.
  startedAt: z.coerce.number().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
