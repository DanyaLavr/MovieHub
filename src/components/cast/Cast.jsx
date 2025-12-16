import { useEffect, useState } from "react";
import { getCast } from "../../api/fetch-movies";
import { useParams } from "react-router-dom";
import CastItem from "./CastItem";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCast(movieId);
        setCast(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [movieId]);
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-white mb-4">Cast</h2>
      <ul className="grid gap-4 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cast.map(({ id, profile_path, name, character }) => (
          <CastItem
            key={id}
            profile_path={profile_path}
            name={name}
            character={character}
          />
        ))}
      </ul>
    </div>
  );
}
