import PropTypes from "prop-types";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

export default function CastItem({ profile_path, name, character }) {
  return (
    <li className="bg-gray-800 rounded-lg overflow-hidden shadow-md w-full max-w-[300px] mx-auto flex flex-col items-center text-center p-2">
      <div className="w-full aspect-[2/3]">
        <img
          src={`${IMAGE_BASE_URL}${profile_path}`}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <h2 className="mt-2 text-white font-semibold text-sm">{name}</h2>
      <h4 className="text-gray-400 text-xs">{character}</h4>
    </li>
  );
}
CastItem.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
