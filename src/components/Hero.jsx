export default function Hero({ filters, setFilters, resultCount }) {
  return (
    <section className="relative overflow-hidd text-neutral-200">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/e5/83/9b/e5839b05f4506b9f6550f86e0b43d53f.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/80 to-ink" />

      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-16 sm:pt-24">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
          {resultCount} stays, hand-checked
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-6xl">
          Welcome To Our Royal Booking.
        </h1>
        <p className="mt-4 max-w-lg font-body text-cream/70">
          សូមស្វាគមន៍មកកាន់គេហទំព័រសេវាកម្មរបស់យើង
        </p>
      </div>

    </section>
  );
}
