import { Movie } from "@/interface";

const KEY = "favorites";

export function getWatchlist(): Movie[] {
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}

export function addToWatchlist(movie: Movie) {
  const current = getWatchlist();
  const exists = current.find((m) => m.id === movie.id);

  if (!exists) {
    localStorage.setItem(KEY, JSON.stringify([...current, movie]));
  }
}

export function removeFromWatchlist(id: number) {
  const updated = getWatchlist().filter((m) => m.id !== id);
  localStorage.setItem(KEY, JSON.stringify(updated));
}
