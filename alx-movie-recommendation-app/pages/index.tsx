import { useEffect, useState } from "react";
import { getPopularMovies } from "@/services/movieApi";
import MovieCard from "@/components/movie/MovieCard";
import Loader from "@/components/common/Loader";
import ErrorState from "@/components/common/ErrorState";
import { Movie } from "@/interface";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getPopularMovies()
      .then(setMovies)
      .catch(() => setError("Failed to load movies"));
  }, []);

  if (error) return <ErrorState message={error} />;
  if (!movies.length) return <Loader />;

  return (
    <main className="px-10 py-6">
      <h1 className="text-2xl font-bold mb-6">
        What do you want to watch?
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}