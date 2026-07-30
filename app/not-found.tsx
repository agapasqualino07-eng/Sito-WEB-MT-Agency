import Link from "next/link";
import { CallButton, WhatsAppButton } from "@/components/cta-links";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-ink">
        Pagina non trovata
      </h1>
      <p className="mt-3 text-ink-soft">
        La pagina che cerchi non esiste o è stata spostata.{" "}
        <Link href="/" className="underline hover:text-brand">
          Torna alla home
        </Link>
        , oppure contattaci direttamente.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <CallButton size="lg" />
        <WhatsAppButton size="lg" label="Scrivici su WhatsApp" />
      </div>
    </section>
  );
}
