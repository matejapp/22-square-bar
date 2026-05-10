// "OD 2020" rotated stamp/seal. Decorative.
export default function Stamp({ label = "OD 2020", sub = "Šimanovci", className = "" }) {
  return (
    <div
      className={`stamp inline-flex flex-col items-center justify-center
                  border-2 border-terracotta text-terracotta
                  rounded-full w-28 h-28 md:w-32 md:h-32
                  font-display font-semibold tracking-wider
                  select-none ${className}`}
      aria-hidden="true"
    >
      <span className="text-[10px] tracking-[0.3em] uppercase">22 Square Bar</span>
      <span className="text-2xl md:text-3xl leading-none mt-1">{label}</span>
      <span className="text-[9px] uppercase tracking-[0.25em] mt-1 italic">{sub}</span>
    </div>
  );
}
