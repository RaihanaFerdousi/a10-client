import React, { useEffect, useState } from "react";
import { IoArrowRedoSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://a10-server.onrender.com/movies")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data);
        setLoading(false); 
      })
      .catch(err => {
        console.error("Error fetching movies:", err);
        setLoading(false);
      });
  }, []);
  

  return (
    <div className="p-5 mt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-3 text-gray-800">
          All Movies
        </h1>
        <p className="text-center text-lg text-gray-600 mb-10 w-full sm:w-[600px] px-4">
          Browse through a collection of amazing movies, discover new favorites,
          and enjoy detailed information about each one.
        </p>
      </div>

      {loading ? (
        <div className="w-full h-64 flex justify-center items-center text-2xl text-gray-500">
          Loading...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="relative">
                <img
                  className="w-full h-72 object-cover"
                  src={movie.poster}
                  alt={movie.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute top-4 right-4 bg-black text-white text-xs px-3 py-1 rounded-lg">
                  {movie.rating} ⭐
                </div>
              </div>
              <div className="p-4 text-left">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {movie.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {movie.summary}
                </p>
                <div className="space-y-1 text-sm text-gray-700">
                <p>
  <strong>Genre:</strong> {Array.isArray(movie.genre) ? movie.genre.join(", ") : movie.genre || "Unknown"}
</p>

                  <p>
                    <strong>Duration:</strong> {movie.duration} mins
                  </p>
                  <p>
                    <strong>Release Year:</strong> {movie.releaseYear}
                  </p>
                  <Link
        to={`/movies/${movie._id}`}
        className="flex text-gray-700 font-semibold mt-2 items-center gap-2"
      >
        View Details <IoArrowRedoSharp />
      </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllMovies;
