import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  getPopularMovies,
  searchMovies,
} from "@/services/movieApi";
import MovieCard from "@/components/movie/MovieCard";
import Loader from "@/components/common/Loader";
import ErrorState from "@/components/common/ErrorState";
import { Movie } from "@/interface";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const router = useRouter();
  const { search } = router.query;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = search
          ? await searchMovies(search as string)
          : await getPopularMovies();
        setMovies(data);
      } catch {
        setError("Failed to load movies");
      }
    };

    fetchMovies();
  }, [search]);

  if (error) return <ErrorState message={error} />;
  if (!movies.length) return <Loader />;

  return (
    <main className="px-10 py-8">
      <h2 className="text-xl font-semibold mb-6">
        {search ? `Search results for "${search}"` : "Popular Movies"}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
