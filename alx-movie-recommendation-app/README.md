This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.



# Movie Recommendation App 🎬

This is a **Movie Recommendation Web Application** built with **Next.js** that allows users to discover popular movies, search for movies, view detailed movie information, and manage a personal watchlist.

The application uses real data from **The Movie Database (TMDB) API** and follows a **Netflix-style desktop layout**, scaled from an initial mobile app design.

This project was developed as part of the **ALX Nexus Project** to demonstrate frontend development skills, API integration, and proper project structuring.

## Features

- Display popular movies from TMDB
- Netflix-style responsive movie grid
- Search movies by title
- View detailed movie information
- Add movies to a watchlist
- Persist watchlist using browser localStorage
- Global Header and Footer
- Loading and error states
- Optimized images using Next.js Image component


## Tech Stack

- **Next.js (Pages Router)**
- **TypeScript**
- **Tailwind CSS**
- **TMDB API**
- **LocalStorage** (for watchlist persistence)

---

## Project Structure

```text
alx-movie-recommendation-app/
│
├── components/
│   ├── common/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── Loader.tsx
│   │   └── ErrorState.tsx
│   ├── movie/
│   │   ├── MovieCard.tsx
│   │   └── MovieDetail.tsx
│
├── pages/
│   ├── _app.tsx
│   ├── index.tsx
│   ├── favorites.tsx
│   └── movie/
│       └── [id].tsx
│
├── services/
│   ├── movieApi.ts
│   └── watchlist.ts
│
├── types/
│   └── movie.ts
│
├── styles/
│   └── globals.css
│
├── .env.local
├── next.config.js
└── README.md
