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
# This Repo is for ALX nexus Project
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



















# Movie Recommendation App

## Project Overview

This project is a **Movie Recommendation Web Application** built with **Next.js** that allows users to browse popular movies, view detailed information about each movie, and add movies to a personal watchlist, This Project is done as a Graduation requirement for the AlX Frontend-ProDev criteria.

The application consumes real movie data from **The Movie Database (TMDB) API** and is designed with a **Netflix-style desktop layout**, scaled from a mobile-first design concept.

This project was developed as part of the **ALX Nexus Project** to demonstrate frontend development skills, API integration, and clean project structure.

---

## Features

- View popular movies fetched from TMDB
- Netflix-style responsive movie grid
- View detailed information for each movie
- Add movies to a watchlist
- Persist watchlist using browser localStorage
- Loading and error handling states
- Optimized images using Next.js Image component

---

## Tech Stack

- **Next.js (Pages Router)**
- **TypeScript**
- **Tailwind CSS**
- **TMDB API**
- **LocalStorage** (for watchlist persistence)

## Folder Structure

alx-movie-recommendation-app/
│
├── components/
│   ├── common/
│   │   ├── Loader.tsx
│   │   └── ErrorState.tsx
│   ├── movie/
│   │   ├── MovieCard.tsx
│   │   └── MovieDetail.tsx
│
├── pages/
│   ├── index.tsx
│   ├── favorites.tsx
│   └── movie/
│       └── [id].tsx
│
├── services/
│   └── movieApi.ts
│
├── types/
│   └── movie.ts
│
├── styles/
│   └── globals.css
│
├── .env.local
├── next.config.js
├── README.md
