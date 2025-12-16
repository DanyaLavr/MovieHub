import PropTypes from "prop-types";

import { Link, useLocation } from "react-router-dom";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Movie({ id, poster_path, title }) {
  const location = useLocation();

  return (
    <li className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-200 hover:scale-105 hover:shadow-2xl w-full">
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        className="flex flex-col items-center text-center"
      >
        <div className="w-full aspect-[2/3]">
          <img
            src={`${IMAGE_BASE_URL}${poster_path}`}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h2 className="p-3 text-lg font-semibold text-white">{title}</h2>
      </Link>
    </li>
  );
}
Movie.propTypes = {
  id: PropTypes.string,
  poster_path: PropTypes.string,
  title: PropTypes.string,
};
