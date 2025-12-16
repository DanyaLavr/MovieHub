import { createContext, useState } from "react";

export const MoviesContext = createContext();
export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const changeMovies = (arr) => setMovies(arr);
  const handleFindMovies = (arr) => setFoundMovies(arr);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        changeMovies,

        foundMovies,
        handleFindMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
