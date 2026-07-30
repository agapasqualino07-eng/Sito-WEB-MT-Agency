import Link from "next/link";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/contatti", label: "Contatti" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-ink-soft">
              Google Business Profile e sito web in abbonamento per artigiani
              ed emergenze in provincia di Catania.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink">Navigazione</h2>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink">Contatti</h2>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-brand">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-brand"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>Catania e provincia</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink">Note legali</h2>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>
                <Link href="/privacy-policy" className="hover:text-brand">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-brand">
                  Cookie policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.legalName}. Tutti i diritti riservati.
          </p>
          <p>P.IVA {siteConfig.vatNumber}</p>
        </div>
      </div>
    </footer>
  );
}
