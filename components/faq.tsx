export type FaqItem = {
  question: string;
  answer: string;
};

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-white">
      {items.map((item) => (
        <details key={item.question} className="group px-5 py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              className="shrink-0 text-xl leading-none text-brand transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
