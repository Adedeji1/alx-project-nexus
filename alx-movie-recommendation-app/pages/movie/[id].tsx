import { GetServerSideProps } from "next";
import { getMovieById } from "@/services/movieApi";
import MovieDetail from "@/components/movie/MovieDetail";
import { Movie } from "@/interface";

export default function MoviePage({ movie }: { movie: Movie }) {
  return (
    <main className="px-10 py-10">
      <MovieDetail movie={movie} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const movie = await getMovieById(params?.id as string);

  return {
    props: { movie },
  };
};
