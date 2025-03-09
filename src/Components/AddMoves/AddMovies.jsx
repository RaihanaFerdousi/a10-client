import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AddMovies = () => {
  const [formData, setFormData] = useState({
    poster: "",
    title: "",
    genre: [],
    duration: "",
    releaseYear: "",
    rating: 0,
    summary: "",
    userEmail: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.poster.startsWith("http"))
      newErrors.poster = "Poster must be a valid URL.";
    if (!formData.title || formData.title.length < 2)
      newErrors.title = "Title must be at least 2 characters.";
    if (!formData.duration || formData.duration < 60)
      newErrors.duration = "Duration must be at least 60 minutes.";
    if (!formData.releaseYear)
      newErrors.releaseYear = "Release year is required.";
    if (formData.rating === 0) newErrors.rating = "Please provide a rating.";
    if (!formData.summary || formData.summary.length < 10)
      newErrors.summary = "Summary must be at least 10 characters.";
    if (!formData.userEmail) newErrors.userEmail = "User email is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRating = (rate) => {
    setFormData({ ...formData, rating: rate });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("https://a10-server.onrender.com/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response from server:", data);
      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Movie added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({
          poster: "",
          title: "",
          genre: [],
          duration: "",
          releaseYear: "",
          rating: 0,
          summary: "",
          userEmail: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.message || "Failed to add movie",
        });
      }
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white text-gray-800 shadow-lg rounded-lg mt-10 border border-gray-300">
      <h2 className="text-3xl font-bold mb-6 text-center">Add a Movie</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="poster"
          placeholder="Poster URL"
          value={formData.poster}
          onChange={handleChange}
          className="w-full border border-gray-400 bg-gray-100 text-gray-800 p-2 rounded"
        />
        {errors.poster && (
          <p className="text-red-500 text-sm">{errors.poster}</p>
        )}

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-400 bg-gray-100 text-gray-800 p-2 rounded"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

        <select
          name="genre"
          multiple
          value={formData.genre}
          onChange={(e) => {
            const selectedGenres = [...e.target.selectedOptions].map(
              (option) => option.value
            );
            setFormData({ ...formData, genre: selectedGenres });
          }}
          className="w-full border border-gray-400 bg-gray-100 text-gray-800 p-2 rounded"
        >
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
        </select>

        <input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          value={formData.duration}
          onChange={handleChange}
          className="w-full border border-gray-400 bg-gray-100 text-gray-800 p-2 rounded"
        />
        {errors.duration && (
          <p className="text-red-500 text-sm">{errors.duration}</p>
        )}

        <select
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
          className="w-full border border-gray-400 bg-gray-100 text-gray-800 p-2 rounded"
        >
          <option value="">Select Year</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
        {errors.releaseYear && (
          <p className="text-red-500 text-sm">{errors.releaseYear}</p>
        )}

        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Rating:</span>
          <Rating onClick={handleRating} ratingValue={formData.rating} />
        </div>
        {errors.rating && (
          <p className="text-red-500 text-sm">{errors.rating}</p>
        )}

        <textarea
          name="summary"
          placeholder="Summary"
          value={formData.summary}
          onChange={handleChange}
          className="w-full border border-gray-400 bg-gray-100 text-gray-800 p-2 rounded"
        ></textarea>
        {errors.summary && (
          <p className="text-red-500 text-sm">{errors.summary}</p>
        )}

        <input
          type="email"
          name="userEmail"
          placeholder="Your Email"
          value={formData.userEmail}
          onChange={handleChange}
          className="w-full border border-gray-400 bg-gray-100 text-gray-800 p-2 rounded"
        />
        {errors.userEmail && (
          <p className="text-red-500 text-sm">{errors.userEmail}</p>
        )}

        <button
          type="submit"
          className="w-full bg-black hover:bg-gray-500 text-white p-3 rounded transition"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovies;
