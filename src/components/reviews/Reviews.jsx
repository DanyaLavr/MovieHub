import { useEffect, useState } from "react";
import { getReviews } from "../../api/fetch-movies";
import { useParams } from "react-router-dom";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getReviews(movieId);
        setReviews(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-white mb-4">Reviews</h2>

      {reviews && reviews.length > 0 ? (
        <ul className="flex flex-col gap-6">
          {reviews.map((elem) => (
            <li key={elem.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-amber-400">
                {elem.author}
              </h3>
              {elem.author_details?.rating && (
                <span className="text-sm text-gray-300">
                  Rating: {elem.author_details.rating}
                </span>
              )}
              <p className="mt-2 text-gray-200">{elem.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 mt-4">There are no reviews</p>
      )}
    </div>
  );
}
