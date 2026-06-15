# 🎬 MovieHub

> Everything you need to know about a movie — in one place.

Not sure what to watch tonight? Or already picked a film and want to know who's in it and what people think? **MovieHub** is a clean, focused app for discovering and exploring movies, built on top of The Movie Database API.

## Features

- 🔥 **Home page** — what's popular right now
- 🔍 **Search** — find any movie by title
- 🎭 **Movie page** — poster, overview, rating
- 👥 **Cast** — who plays who
- 💬 **Reviews** — what audiences are saying

## Tech stack

- **React** — SPA with lazy-loaded pages (`React.lazy + Suspense`)
- **React Router** — nested routes for movie details
- **Axios** — requests to the [TMDB API](https://www.themoviedb.org/)
- **Styled Components + Tailwind CSS** — styling
- **Vite** — build tool

## Getting started

```bash
npm install
npm run dev
```

The app uses a public TMDB API key — no extra setup needed.

## Project structure

```
src/
├── api/
│   └── fetch-movies.js   # all TMDB requests in one place
├── components/
│   ├── cast/             # actor list
│   ├── finder/           # search bar
│   ├── header/           # navigation
│   ├── loader/           # loading spinner
│   ├── movie/            # movie card
│   └── reviews/          # user reviews
└── pages/
    ├── home/             # trending movies
    ├── movies/           # search results
    └── movie-details/    # single movie page
```

## Routes

| Path | Page |
|------|------|
| `/` | Home — popular movies |
| `/movies` | Search results |
| `/movies/:id` | Movie details |
| `/movies/:id/cast` | Cast |
| `/movies/:id/reviews` | Reviews |
