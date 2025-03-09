import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../Firebase/AuthContext";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  console.log(user)


  useEffect(() => {
    if (!id) return; 

    fetch(`https://a10-server.onrender.com/movies/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Movie not found");
        }
        return res.json();
      })
      .then((data) => setMovie(data))
      .catch((err) => {
        console.error("Error fetching movie details:", err);
        setError(err.message);
      });
  }, [id]);

  const deleteMovie = () => {
    fetch(`https://a10-server.onrender.com/movies/${id}`, { method: "DELETE" })
      .then(() => navigate("/allMovies"))
      .catch((err) => console.error("Error deleting movie:", err));
  };

  const addToFavorites = () => {
    if (!user || !user.email) {
      alert("You must be logged in to add favorites.");
      return;
    }
  
    if (!movie) {
      alert("Movie data is not available.");
      return;
    }
  
    const favoriteData = { movie, userEmail: user.email };
  
    console.log("Sending favorite data:", favoriteData);
  
    fetch("https://a10-server.onrender.com/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(favoriteData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from server:", data);
        if (data.error) {
          alert(data.error);
        } else {
          alert("Movie added to favorites!");
        }
      })
      .catch((err) => {
        console.error("Error adding to favorites:", err);
        alert("Something went wrong, please try again.");
      });
  };
  

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  if (!movie) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center mt-16 px-5">
      <div className="bg-gray-50 shadow-md rounded-lg w-full md:w-[800px] p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex flex-col text-left w-full md:w-1/2">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">{movie.title}</h1>
            <p className="text-gray-600 mb-4">{movie.summary || "No summary available."}</p>
            <div className="text-gray-700 mb-2"><strong>Genre:</strong> {movie.genre.join(", ")}</div>
            <div className="text-gray-700 mb-2"><strong>Duration:</strong> {movie.duration} minutes</div>
            <div className="text-gray-700 mb-2"><strong>Release Year:</strong> {movie.releaseYear}</div>
            <div className="text-gray-700 mb-6"><strong>Rating:</strong> {movie.rating}</div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src={movie.poster} alt={movie.title} className="rounded-lg shadow-lg w-full max-h-[400px] object-cover" />
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button onClick={deleteMovie} className="bg-red-500 text-white py-2 px-4 rounded-lg shadow transition hover:bg-red-600">
            Delete Movie
          </button>
          <button onClick={addToFavorites} className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow transition hover:bg-blue-600">
            Add to Favorite
          </button>
          <Link to='/allMovies' className="bg-black font-semibold text-white py-2 px-4 rounded-lg shadow transition">
            All Movies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;