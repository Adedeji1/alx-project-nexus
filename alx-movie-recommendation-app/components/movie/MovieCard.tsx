import Link from "next/link";
import { Movie } from "@/interface";
import Image from "next/image";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="transform hover:scale-105 transition cursor-pointer">
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg"
        />
        <h3 className="mt-2 text-sm font-semibold text-white">
          {movie.title}
        </h3>
        <p className="text-xs text-gray-400">
          ⭐ {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </Link>
  );
}
