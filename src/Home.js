import React, { useEffect, useState } from "react";



function Home({ movie }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://hoblist.com/api/movieList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      }),
    })
      .then((response) => response.json())
      .then((data) => setMovies(data.result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
    <h2>Movies List</h2>
    <div className="movie-list">
      
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <p>{movie.voting} votes</p>
          </li>
        ))}
      </ul>
    </div>
    
    </>
  );
}

export default Home;
