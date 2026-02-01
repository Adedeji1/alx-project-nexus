import { useEffect, useState } from "react";
import MovieCard from "@/components/movie/MovieCard";
import { Movie } from "@/interface";

export default function Favorites() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setMovies(saved);
  }, []);

  return (
    <main className="px-10 py-6">
      <h1 className="text-2xl font-bold mb-6">Your Watchlist</h1>

      {movies.length === 0 ? (
        <p className="text-gray-400">No movies added yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}
