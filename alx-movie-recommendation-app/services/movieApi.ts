import { Movie } from "@/interface";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

async function fetchFromTMDB(endpoint: string) {
  const res = await fetch(
    `${BASE_URL}${endpoint}?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getPopularMovies(): Promise<Movie[]> {
  const data = await fetchFromTMDB("/movie/popular");
  return data.results;
}

export async function getMovieById(id: string): Promise<Movie> {
  return fetchFromTMDB(`/movie/${id}`);
}
