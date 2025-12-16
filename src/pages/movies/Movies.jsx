import { Suspense, useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Movie from "../../components/movie/Movie";
import Finder from "../../components/finder/Finder";
import Loader from "../../components/loader/Loader";
import { useLocation } from "react-router-dom";

export default function Movies() {
  const { foundMovies } = useContext(MoviesContext);
  const location = useLocation();

  return (
    <main className="bg-gray-900 min-h-screen text-white py-10">
      <section className="mx-auto px-4">
        <Finder />
        <Suspense fallback={<Loader />}>
          {foundMovies?.length ? (
            <ul
              className=" mt-5 grid gap-6 justify-items-center 
               grid-cols-1 
               sm:grid-cols-2 
               md:grid-cols-3 
               lg:grid-cols-4"
            >
              {foundMovies.map(({ id, poster_path, title }) => (
                <Movie
                  key={id}
                  id={id}
                  poster_path={poster_path}
                  title={title}
                  location={location}
                />
              ))}
            </ul>
          ) : (
            <h3 className="mt-8 text-center text-xl text-gray-400">
              No movies found
            </h3>
          )}
        </Suspense>
      </section>
    </main>
  );
}
