export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse px-4 py-16 md:px-6 md:py-24" aria-busy="true" aria-label="Loading page">
      {/* Hero skeleton */}
      <div className="max-w-2xl space-y-5">
        <div className="h-4 w-40 rounded-full bg-butter/50" />
        <div className="h-12 w-full rounded-2xl bg-charcoal/5" />
        <div className="h-12 w-3/4 rounded-2xl bg-charcoal/5" />
        <div className="h-4 w-full rounded-full bg-charcoal/5" />
        <div className="h-4 w-2/3 rounded-full bg-charcoal/5" />
        <div className="flex gap-3 pt-2">
          <div className="h-12 w-40 rounded-full bg-butter/50" />
          <div className="h-12 w-40 rounded-full bg-charcoal/5" />
        </div>
      </div>

      {/* Cards skeleton */}
      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="space-y-4 rounded-3xl border border-charcoal/5 bg-white p-7">
            <div className="h-12 w-12 rounded-2xl bg-butter/40" />
            <div className="h-5 w-2/3 rounded-full bg-charcoal/5" />
            <div className="h-4 w-full rounded-full bg-charcoal/5" />
            <div className="h-4 w-5/6 rounded-full bg-charcoal/5" />
          </div>
        ))}
      </div>
    </div>
  );
}
