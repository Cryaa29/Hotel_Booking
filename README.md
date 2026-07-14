# Stayfarer — Hotel Booking System (Frontend)

A frontend-only hotel search & listing app built with React (Vite), Tailwind CSS,
and plain JavaScript. Hotel data is mocked locally — there's no backend or database.

## Features

- **Home page** with hero section and a destination/date/guest search bar
- **Live search** — filters the hotel list as you type a city, country, or hotel name
- **Sorting** — by price (low/high) or rating
- **Hotel details modal** — click any card to see a larger description and a mock "Reserve" action
- Fully responsive layout, styled entirely with Tailwind CSS

## Project structure

```
hotel-booking-system/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx              # top-level state: filters, sort, selected hotel
    ├── index.css
    ├── data/
    │   └── hotels.js        # mock hotel dataset (edit this to add your own hotels)
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── SearchBar.jsx
        ├── HotelList.jsx
        ├── HotelCard.jsx
        ├── HotelModal.jsx
        └── Footer.jsx
```

## How to run it

You'll need [Node.js](https://nodejs.org) (v18 or newer) installed on your computer.

1. Unzip the project and open a terminal in the `hotel-booking-system` folder
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the URL it prints (usually `http://localhost:5173`) in your browser

To build a production version:
```bash
npm run build
```

## Making it your own

- **Add/edit hotels**: everything is in `src/data/hotels.js` — each hotel is a plain
  object with `name`, `city`, `country`, `price`, `rating`, `reviews`, `tags`, `image`, `description`.
- **Change colors/fonts**: edit the `colors` and `fontFamily` sections in `tailwind.config.js`.
- **Add a new page** (e.g. a dedicated "Hotel Details" route instead of a modal): install
  `react-router-dom` and split `App.jsx` into routes.

## Notes for grading / presentation

- This is intentionally **frontend-only**: search and sort run entirely in the browser
  using JavaScript array methods (`filter`, `sort`) over the mock dataset in `hotels.js`.
- The "Reserve this room" button is a UI demonstration only — no real booking or
  payment happens, since there's no backend.
