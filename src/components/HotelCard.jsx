export default function HotelCard({ hotel, onSelect }) {
  return (
    <article
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-lg"
      onClick={() => onSelect(hotel)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 font-mono text-xs text-cream backdrop-blur">
          ★ {hotel.rating}
        </div>
      </div>

      {/* perforated ticket divider */}
      <div className="relative h-0">
        <div className="absolute -left-2 -top-2 h-4 w-4 rounded-full bg-cream" />
        <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-cream" />
        <div className="mx-4 h-px border-t border-dashed border-ink/15" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-lg font-medium text-ink">
            {hotel.name}
          </h3>
          <p className="font-body text-sm text-ink/55">
            {hotel.city}, {hotel.country}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {hotel.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-sage/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-sage"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between border-t border-dashed border-ink/10 pt-3">
          <div>
            <span className="font-display text-xl font-semibold text-ink">
              ${hotel.price}
            </span>
            <span className="font-body text-xs text-ink/50"> / night</span>
          </div>
          <span className="font-body text-xs text-ink/45">
            {hotel.reviews} reviews
          </span>
        </div>
      </div>
    </article>
  );
}
