// Editorial-style large italic pull quote with orange accent rule.
export default function PullQuote({ children, attribution, className = "" }) {
  return (
    <figure className={`pullquote ${className}`}>
      <blockquote className="font-display italic text-2xl md:text-3xl leading-snug text-navy">
        “{children}”
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 text-xs uppercase tracking-[0.3em] text-terracotta font-semibold">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}
