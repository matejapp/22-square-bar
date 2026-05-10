// Reusable hero with editorial styling — serif headline, subtle grain
// overlay, two-layer navy gradient for legibility.
export default function Hero({
  bg,
  height = "h-[60vh]",
  eyebrow,
  title,
  subtitle,
  children,
}) {
  return (
    <section
      className={`relative ${height} flex items-center justify-center text-center bg-navy-deep overflow-hidden grain`}
      aria-label={typeof title === "string" ? title : "Hero"}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      {/* Two-layer gradient: directional tint + bottom fade for text legibility */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(9,46,74,0.55) 0%, rgba(9,46,74,0.30) 35%, rgba(7,30,48,0.92) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(9,46,74,0.45) 0%, rgba(0,0,0,0.10) 100%)",
        }}
      />

      <div className="relative z-10 text-cream px-4 max-w-4xl">
        {eyebrow && (
          <p className="text-[11px] font-semibold tracking-[0.35em] text-orange uppercase mb-4">
            {eyebrow}
          </p>
        )}
        {title && (
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] mb-5">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="font-italic-display text-lg md:text-2xl text-cream/85 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
