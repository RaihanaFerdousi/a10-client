import React, { useEffect, useState } from "react";
import { IoArrowRedoSharp } from "react-icons/io5";

import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://a10-server.onrender.com/movies")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((movies) => {
        console.log("Fetched Movies:", movies);
        if (!Array.isArray(movies)) {
          throw new Error("Invalid data format: Expected an array");
        }
        const sortedMovies = movies
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 6);
        setData(sortedMovies);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1  lg:md:grid-cols-2 gap-4 w-full mx-auto rounded-2xl bg-gray-100 p-5 sm:p-10 justify-center mt-20 mb-16">
        {data.map((card) => (
          <div
            key={card._id}
            className="flex flex-col sm:flex-row items-center p-4 shadow-xl rounded-xl gap-4 text-left"
          >
            <div>
              <img
                className="w-[170px] h-[220px] sm:w-[170px] sm:h-[220px] rounded-l-2xl rounded-tr-2xl object-cover"
                src={card.poster}
                alt="Movie Poster"
              />
            </div>
            <div className="h-auto sm:h-[100px]">
              <h2 className="text-xl mb-3 font-bold">{card.title}</h2>
              <p className="w-full sm:w-80">{card.summary}</p>
              <Link
                to={`/movies/${card._id}`} // ✅ Ensure this uses _id
                className="flex text-gray-700 font-semibold mt-2 items-center gap-2"
              >
                View Details <IoArrowRedoSharp />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
