import { siteConfig, whatsappDefaultMessage, whatsappHref } from "@/lib/site-config";

type Size = "md" | "lg";

const sizeClasses: Record<Size, string> = {
  md: "min-h-[44px] px-5 py-2.5 text-sm",
  lg: "min-h-[52px] px-6 py-3.5 text-base",
};

export function CallButton({
  size = "md",
  className,
  label = "Chiama ora",
}: {
  size?: Size;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={siteConfig.phoneHref}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-accent font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark ${sizeClasses[size]} ${className ?? ""}`}
    >
      <PhoneIcon />
      {label}
    </a>
  );
}

export function WhatsAppButton({
  size = "md",
  className,
  label = "Scrivici su WhatsApp",
  message = whatsappDefaultMessage,
}: {
  size?: Size;
  className?: string;
  label?: string;
  message?: string;
}) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp font-semibold text-white shadow-sm transition-colors hover:bg-whatsapp-dark ${sizeClasses[size]} ${className ?? ""}`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-current"
    >
      <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1.1-1.1 1.1C10.8 21.1 2.9 13.2 2.9 3.1 2.9 2.5 3.4 2 4 2h3.4c.6 0 1.1.5 1.1 1.1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 fill-current"
    >
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5.1-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.1c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 14.8 3.6 13.4 3.6 12c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.8 8.4-8.4 8.4zm4.6-6.3c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.2-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.2.2-.4.1-.2 0-.3 0-.5s-.6-1.5-.9-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2 0-.2-.2-.2-.4-.3z" />
    </svg>
  );
}
