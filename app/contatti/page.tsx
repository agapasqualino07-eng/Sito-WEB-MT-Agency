import type { Metadata } from "next";
import Link from "next/link";
import { CallButton, WhatsAppButton } from "@/components/cta-links";
import { ContactForm } from "./contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Chiamaci, scrivici su WhatsApp o compila il modulo: richiedi l'audit gratuito della tua scheda Google Business Profile. Serviamo Catania e provincia.",
  alternates: { canonical: "/contatti" },
};

export default function ContattiPage() {
  return (
    <>
      <section className="bg-brand text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Raccontaci a che punto sei
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            Non serve avere già le idee chiare: chiamaci, scrivici su
            WhatsApp o lascia i tuoi dati, e partiamo dall&apos;audit
            gratuito della tua scheda Google, senza impegno.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-ink">Contatti diretti</h2>
            <div className="mt-5 flex flex-col gap-3">
              <CallButton size="lg" className="w-full sm:w-auto" />
              <WhatsAppButton
                size="lg"
                label="Richiedi l'audit gratuito"
                className="w-full sm:w-auto"
              />
            </div>

            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-ink">Telefono</dt>
                <dd>
                  <a
                    href={siteConfig.phoneHref}
                    className="text-ink-soft hover:text-brand"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Email</dt>
                <dd>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-ink-soft hover:text-brand"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Area servita</dt>
                <dd className="text-ink-soft">
                  {siteConfig.areaServed.join(", ")}
                </dd>
              </div>
            </dl>

            <div className="mt-8 rounded-lg border border-border bg-bg-muted p-4 text-xs text-ink-soft">
              <p>
                {siteConfig.legalName} — P.IVA {siteConfig.vatNumber}
              </p>
              <p className="mt-1">
                <Link href="/privacy-policy" className="underline hover:text-brand">
                  Leggi la privacy policy
                </Link>{" "}
                prima di inviare i tuoi dati.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative rounded-2xl border border-border bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-ink">
                Oppure lascia i tuoi dati
              </h2>
              <p className="mt-1 text-sm text-ink-soft">
                Ti ricontattiamo per fissare l&apos;audit gratuito della tua
                scheda Google.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
