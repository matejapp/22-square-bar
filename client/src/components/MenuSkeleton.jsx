// Skeleton placeholder shown while the public menu loads.
export default function MenuSkeleton() {
  return (
    <div
      className="grid md:grid-cols-2 gap-8"
      aria-busy="true"
      aria-label="Učitavanje menija"
    >
      {Array.from({ length: 4 }).map((_, c) => (
        <div key={c}>
          <div className="skeleton h-6 w-40 mb-5" />
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="mb-4">
              <div className="flex items-center justify-between gap-3">
                <div className="skeleton h-4 w-1/2" />
                <div className="skeleton h-4 w-12" />
              </div>
              <div className="skeleton h-3 w-3/4 mt-2" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
