import slider1 from "../../assets/images/slider-1.jpg";
import slider2 from "../../assets/images/pexels-donaldtong94-66134.jpg";
import slider3 from "../../assets/images/pexels-kyleloftusstudios-5642755.jpg";

const Banner = () => {
  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden">
      <div className="carousel relative">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={slider1}
            alt="Slide 1"
            className="w-full h-[80vh] object-cover"
          />
          {/* Overlay for Captions */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
            <h2 className="text-white text-5xl font-bold text-center">
              Welcome to Reelify
            </h2>
            <p className="text-lg text-white mt-6 w-full sm:w-[600px] px-4 text-center">
              Your ultimate destination for exploring movies, discovering favorites,
              and immersing yourself in cinematic magic.
            </p>
          </div>
          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-gray-800 hover:bg-gray-700 text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-gray-800 hover:bg-gray-700 text-white"
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={slider2}
            alt="Slide 2"
            className="w-full h-[80vh] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
            <h2 className="text-white text-5xl font-bold text-center">
              Discover Your Favorites
            </h2>
            <p className="text-lg text-white mt-6 w-full sm:w-[600px] px-4 text-center">
              Browse through a curated collection of top-rated movies and add them 
              to your personal watchlist for quick access.
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-gray-800 hover:bg-gray-700 text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-gray-800 hover:bg-gray-700 text-white"
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={slider3}
            alt="Slide 3"
            className="w-full h-[80vh] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
            <h2 className="text-white text-5xl font-bold text-center">
              Join the Movie Journey
            </h2>
            <p className="text-lg text-white mt-6 w-full sm:w-[600px] px-4 text-center">
              Be part of a community of movie lovers and explore an ever-growing
              universe of films and genres.
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-gray-800 hover:bg-gray-700 text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-gray-800 hover:bg-gray-700 text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
