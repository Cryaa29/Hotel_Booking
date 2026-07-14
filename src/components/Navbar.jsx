export default function Navbar({ page = "home", setPage = () => {} }) {
  return (
    <header className="sticky top-0 z-30 bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => setPage("home")}
          className="flex items-baseline gap-2"
        >
          <span className="font-display text-2xl font-semibold tracking-tight">
            The Royal
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-gold sm:inline">
             cambo royal
          </span>
        </button>
        <nav className="hidden items-center gap-8 font-body text-sm md:flex">
          <button
            onClick={() => setPage("home")}
            className={`transition hover:text-gold ${page === "home" ? "text-gold" : ""}`}
          >
            Home
          </button>
          <button
            onClick={() => setPage("about")}
            className={`transition hover:text-gold ${page === "about" ? "text-gold" : ""}`}
          >
            About
          </button>
          <button
            onClick={() => setPage("contact")}
            className={`transition hover:text-gold ${page === "contact" ? "text-gold" : ""}`}
          >
            Contact
          </button>
        </nav>
        
        
      </div>
    </header>
  );
}
