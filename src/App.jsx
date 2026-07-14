import { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HotelList from "./components/HotelList.jsx";
import HotelModal from "./components/HotelModal.jsx";
import Footer from "./components/Footer.jsx";
import hotels from "./data/hotels.js";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const [filters, setFilters] = useState({
    query: "",
    checkIn: "",
    checkOut: "",
    guests: 2,
  });
  const [sortBy, setSortBy] = useState("recommended");
  const [selectedHotel, setSelectedHotel] = useState(null);

  const filteredHotels = useMemo(() => {
    const term = filters.query.trim().toLowerCase();

    let result = hotels.filter((hotel) => {
      if (!term) return true;
      return (
        hotel.name.toLowerCase().includes(term) ||
        hotel.city.toLowerCase().includes(term) ||
        hotel.country.toLowerCase().includes(term)
      );
    });

    switch (sortBy) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [filters.query, sortBy]);

  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      <Navbar page={page} setPage={setPage} />

      {page === "home" && (
        <>
          <Hero
            filters={filters}
            setFilters={setFilters}
            resultCount={hotels.length}
          />
          <HotelList
            hotels={filteredHotels}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onSelect={setSelectedHotel}
          />
          <HotelModal
            hotel={selectedHotel}
            onClose={() => setSelectedHotel(null)}
          />
        </>
      )}

      {page === "about" && <About />}
      {page === "contact" && <Contact />}

      <Footer />
    </div>
  );
}
