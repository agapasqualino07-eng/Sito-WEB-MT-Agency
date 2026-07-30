import { CallButton, WhatsAppButton } from "@/components/cta-links";

export function StickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 p-3 backdrop-blur md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-6xl gap-3">
        <WhatsAppButton size="md" label="WhatsApp" className="flex-1" />
        <CallButton size="md" className="flex-1" />
      </div>
    </div>
  );
}
