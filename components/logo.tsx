export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-hidden="true"
      className={className}
    >
      <rect width="48" height="48" rx="10" fill="#0B3B60" />
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="#ffffff"
      >
        MT
      </text>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="text-lg font-bold tracking-tight text-brand">
        MT Agency
      </span>
    </span>
  );
}
