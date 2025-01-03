import React, { useState } from "react";
import SearchBar from "./SearchBar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const fetchMovies = (query) => {
    if (!query.trim()) {
      setError("Please enter a movie name.");
      setMovies([]);
      return;
    }
  
    fetch(`https://www.omdbapi.com/?apikey=99eb9fd1&s=${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
          setError("");
        } else {
          setError("Invalid movie name. Please try again.");
          setMovies([]);
        }
      })
      .catch(() => {
        setError("Something went wrong. Please try again later.");
        setMovies([]);
      });
  };  

  return (
    <div className="movie-search">
      <h1>Movie Search</h1>
      <SearchBar onSearch={fetchMovies} />
      {error && <p className="error">{error}</p>}
      <ul className="results">
        {movies.map((movie) => (
          <li key={movie.imdbID} className="movie-card">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
              alt={movie.Title}
            />
            <div className="movie-info">
              <h3>{movie.Title}</h3>
              <p>Year: {movie.Year}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
