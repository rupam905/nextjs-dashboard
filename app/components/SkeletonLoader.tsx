"use client";

export function SkeletonLoader() {
  return (
    <main className="flex-1 overflow-auto p-4 pb-24 md:pb-4 lg:p-8">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-full h-48 rounded-xl border border-neutral-800 bg-neutral-900 animate-pulse lg:col-span-2" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-36 rounded-xl border border-neutral-800 bg-neutral-900 animate-pulse"
          />
        ))}
        <div className="h-64 rounded-xl border border-neutral-800 bg-neutral-900 animate-pulse" />
      </section>
    </main>
  );
}
