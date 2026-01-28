import { Movie } from "@/interface";
import Image from "next/image";

export default function MovieDetail({ movie }: { movie: Movie }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <Image
        src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${movie.poster_path}`}
        className="rounded-xl"
        alt={movie.title}
      />

      <div>
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>

        <p className="text-gray-300 mb-4">{movie.overview}</p>

        <p className="text-sm text-gray-400">
          Release Date: {movie.release_date}
        </p>

        <p className="text-sm text-gray-400">
          Rating: ⭐ {movie.vote_average.toFixed(1)}
        </p>

        <button
          className="mt-6 px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700"
          onClick={() => {
            const saved =
              JSON.parse(localStorage.getItem("favorites") || "[]");
            localStorage.setItem(
              "favorites",
              JSON.stringify([...saved, movie])
            );
          }}
        >
          Add to Watchlist
        </button>
      </div>
    </div>
  );
}
