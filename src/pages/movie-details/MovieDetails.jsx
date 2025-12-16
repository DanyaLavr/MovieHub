import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../../api/fetch-movies";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await getMovieById(movieId);
        setMovie(res);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [movieId]);
  return movie ? (
    <main className="bg-gray-900 min-h-screen text-white py-10">
      <div className="container mx-auto px-4">
        <button className="mb-6 px-4 py-2 rounded-2xl bg-stone-950 text-amber-50 hover:bg-stone-800 transition">
          <Link to={location?.state?.from || "/"}>← Go Back</Link>
        </button>
      </div>

      <section>
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.original_title}
            className="w-full md:w-1/3 rounded-lg shadow-lg object-cover"
          />
          <div className="md:w-2/3 flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              {movie.original_title}
            </h1>
            <p className="text-gray-300">{movie.overview}</p>
            <p className="font-semibold">
              Release Date:
              <span className="text-gray-400">{movie.release_date}</span>
            </p>
            <p className="font-semibold">
              Rating:
              <span className="text-yellow-400">{movie.vote_average}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">Additional Info</h3>
          <ul className="flex gap-4">
            <li>
              <Link
                className="px-4 py-2 rounded-lg bg-amber-500 text-black font-medium hover:bg-amber-600 transition"
                to="cast"
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                className="px-4 py-2 rounded-lg bg-amber-500 text-black font-medium hover:bg-amber-600 transition"
                to="reviews"
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <Outlet />
    </main>
  ) : (
    <Loader />
  );
}
