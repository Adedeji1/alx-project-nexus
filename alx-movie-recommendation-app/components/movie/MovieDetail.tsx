import { useState } from "react";
import { Movie } from "@/interface";
import { addToWatchlist } from "@/services/watchList"; 

export default function MovieDetail({ movie }: { movie: Movie }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToWatchlist(movie);
    setAdded(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <img
        src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="rounded-xl"
      />

      <div>
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="text-gray-300 mb-6">{movie.overview}</p>

        <button
          onClick={handleAdd}
          className={`px-6 py-3 rounded-lg ${
            added ? "bg-gray-600" : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {added ? "Added to Watchlist" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
}
