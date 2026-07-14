import { useState } from "react";

export default function HotelModal({ hotel, onClose }) {
  const [booked, setBooked] = useState(false);

  if (!hotel) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-cream shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="h-full w-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 font-body text-cream hover:bg-ink"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-display text-2xl font-medium text-ink">
                {hotel.name}
              </h3>
              <p className="font-body text-sm text-ink/55">
                {hotel.city}, {hotel.country}
              </p>
            </div>
            <div className="rounded-full bg-ink px-3 py-1 font-mono text-xs text-cream">
              ★ {hotel.rating} · {hotel.reviews}
            </div>
          </div>

          <p className="mt-4 font-body text-sm leading-relaxed text-ink/70">
            {hotel.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {hotel.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-sage/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-sage"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-dashed border-ink/15 pt-4">
            <div>
              <span className="font-display text-2xl font-semibold text-ink">
                ${hotel.price}
              </span>
              <span className="font-body text-xs text-ink/50"> / night</span>
            </div>

            {booked ? (
              <span className="rounded-full bg-sage/20 px-4 py-2 font-body text-sm font-medium text-sage">
                ✓ Reserved — check your email
              </span>
            ) : (
              <button
                onClick={() => setBooked(true)}
                className="rounded-full bg-gold px-6 py-2.5 font-body text-sm font-semibold text-ink transition hover:bg-gold-light"
              >
                Reserve this room
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
