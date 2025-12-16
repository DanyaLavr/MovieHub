import { useCallback, useContext, useEffect, useRef } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { findMovie } from "../../api/fetch-movies";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
const Form = styled.form`
  border-radius: 6px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 0 auto;
  width: 240px;
  input,
  button {
    outline: none;
    border: none;
  }
`;
export default function Finder() {
  const { handleFindMovies } = useContext(MoviesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const inputRef = useRef();
  const checkFinder = async () => {
    const q = searchParams.get("movieName");
    q ? handleFindMovies(await findMovie(q)) : navigate("/movies");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    checkFinder();
    e.target.reset();
  };

  const onChange = () => {
    const searchParamsObj = Object.fromEntries(searchParams);

    setSearchParams({
      ...searchParamsObj,
      movieName: inputRef.current.value.toLowerCase().trim(),
    });
  };
  useEffect(() => {
    const getData = async () => {
      checkFinder();
    };
    getData();
  }, []);
  return (
    <Form
      action=""
      onSubmit={onSubmit}
      className="flex items-center gap-2 mx-auto mb-6 w-60"
    >
      <input
        onChange={onChange}
        ref={inputRef}
        type="text"
        className="flex-1 px-3 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-white outline-none focus:ring-2 focus:ring-amber-500"
      />
      <button className="px-4 py-2 rounded-r-md bg-amber-500 text-black font-semibold hover:bg-amber-600 transition">
        Search
      </button>
    </Form>
  );
}
