import { useContext, useEffect } from "react";
import Movie from "../../components/movie/Movie";
import { MoviesContext } from "../../context/MoviesContext";
import { getPopularMovies } from "../../api/fetch-movies";

export default function Home() {
  const { movies, changeMovies } = useContext(MoviesContext);
  useEffect(() => {
    if (!movies.length) {
      const fetchData = async () => {
        const data = await getPopularMovies();
        changeMovies(data);
      };
      fetchData();
    }
  }, []);
  return (
    <main className="bg-gray-900 min-h-screen text-white">
      <section className="mx-auto py-10 px-4">
        <ul
          className="grid gap-6 justify-items-center 
               grid-cols-1 
               sm:grid-cols-2 
               md:grid-cols-3 
               lg:grid-cols-4"
        >
          {movies.map(({ id, poster_path, title }) => (
            <Movie key={id} id={id} poster_path={poster_path} title={title} />
          ))}
        </ul>
      </section>
    </main>
  );
}
