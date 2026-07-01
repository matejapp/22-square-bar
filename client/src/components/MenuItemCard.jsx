import { formatPriceShort } from "../utils/format";

export default function MenuItemCard({ item }) {
  const allergens = item.allergens
    ? item.allergens.split(",").map((s) => s.trim()).filter(Boolean)
    : [];

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
      {allergens.length > 0 && (
        <div className="flex gap-1 mt-1" aria-label={`Alergeni: ${allergens.join(", ")}`}>
          {allergens.map((code) => (
            <span
              key={code}
              className="inline-block text-[10px] font-bold leading-none px-1.5 py-0.5 rounded
                         bg-terracotta/10 text-terracotta border border-terracotta/20"
            >
              {code}
            </span>
          ))}
        </div>
      )}
      {item.description && (
        <p className="text-sm text-navy/60 mt-1 leading-snug italic">
          {item.description}
        </p>
      )}
    </article>
  );
}
