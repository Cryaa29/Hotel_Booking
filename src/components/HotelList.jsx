import HotelCard from "./HotelCard.jsx";

export default function HotelList({ hotels, sortBy, setSortBy, onSelect }) {
  return (
    <section id="stays" className="mx-auto max-w-6xl px-6 py-14">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-medium text-ink">
            Available stays
          </h2>
          <p className="font-body text-sm text-ink/55">
            {hotels.length} {hotels.length === 1 ? "result" : "results"}
          </p>
        </div>

        <label className="flex items-center gap-2 font-body text-sm text-ink/70">
          Sort by
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-ink focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            <option value="recommended">Recommended</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      {hotels.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-ink/20 bg-white/50 py-20 text-center">
          <p className="font-display text-xl text-ink">No stays match that search</p>
          <p className="mt-2 font-body text-sm text-ink/55">
            Try a different city, or clear the destination field above.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} onSelect={onSelect} />
          ))}
        </div>
      )}
    </section>
  );
}
