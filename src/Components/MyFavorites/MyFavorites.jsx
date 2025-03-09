import React, { useEffect, useState } from "react";
import { useAuth } from "../../Firebase/AuthContext";

const MyFavorites = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    fetch(`https://a10-server.onrender.com/favorites`)
      .then((res) => res.json())
      .then((data) => {
        console.log("User Email:", user.email);
        console.log("Fetched Favorites:", data);

        const userFavorites = data.filter((favorite) => favorite.userEmail === user.email);
        console.log("User's Favorites:", userFavorites);
        setFavorites(userFavorites);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching favorites:", error);
        setLoading(false);
      });
  }, [user]);

  const removeFavorite = async (id) => {
    try {
      const response = await fetch(`https://a10-server.onrender.com/favorites/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Item deleted successfully.");
        setFavorites(favorites.filter(favorite => favorite._id !== id));
      } else {
        console.error("Failed to delete the item.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="mt-10 px-5">
      <h1 className="text-3xl font-semibold text-center mb-6">My Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-600">You have no favorite movies yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((favorite) => {
            const movie = favorite.movie;
            return (
              <div key={favorite._id} className="bg-white shadow-md rounded-lg p-4">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold">{movie.title}</h2>
                <p className="text-gray-700">
                  <strong>Genre:</strong> {movie.genre.join(", ")}
                </p>
                <p className="text-gray-700">
                  <strong>Duration:</strong> {movie.duration} min
                </p>
                <p className="text-gray-700">
                  <strong>Release Year:</strong> {movie.releaseYear}
                </p>
                <p className="text-gray-700">
                  <strong>Rating:</strong> {movie.rating}⭐
                </p>
                <button
                  onClick={() => removeFavorite(favorite._id)}
                  className="mt-3 py-1 font-semibold px-10 rounded-lg border border-gray-900"
                >
                Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyFavorites;
