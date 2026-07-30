import Link from "next/link";
import { Logo } from "@/components/logo";
import { CallButton, WhatsAppButton } from "@/components/cta-links";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/contatti", label: "Contatti" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="rounded-md" aria-label="MT Agency, torna alla home">
          <Logo />
        </Link>

        <nav aria-label="Principale" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-ink">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md py-2 transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <WhatsAppButton size="md" label="WhatsApp" />
          <CallButton size="md" />
        </div>

        <details className="relative md:hidden">
          <summary
            className="flex min-h-[44px] min-w-[44px] cursor-pointer list-none items-center justify-center rounded-md border border-border text-ink [&::-webkit-details-marker]:hidden"
            aria-label="Apri il menu"
          >
            <MenuIcon />
          </summary>
          <nav
            aria-label="Menu mobile"
            className="absolute right-0 top-[calc(100%+0.5rem)] w-56 rounded-lg border border-border bg-white p-2 shadow-lg"
          >
            <ul className="flex flex-col text-sm font-medium text-ink">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block min-h-[44px] rounded-md px-3 py-2.5 hover:bg-bg-muted"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-none stroke-current stroke-2"
    >
      <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
