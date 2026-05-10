import { formatPriceShort } from "../utils/format";

// Editorial-style menu row with dotted leader.
// Lighter on the chrome — the typography does the work.
export default function MenuItemCard({ item }) {
  return (
    <article className="group py-3 border-b border-navy/10 last:border-0">
      <div className="flex items-baseline">
        <h4 className="font-display text-lg text-navy whitespace-nowrap">
          {item.name}
        </h4>
        <span className="menu-leader" aria-hidden="true" />
        <span className="font-display font-semibold text-terracotta whitespace-nowrap tabular-nums">
          {formatPriceShort(item.price)}
        </span>
      </div>
      {item.description && (
        <p className="text-sm text-navy/60 mt-1 leading-snug italic">
          {item.description}
        </p>
      )}
    </article>
  );
}
