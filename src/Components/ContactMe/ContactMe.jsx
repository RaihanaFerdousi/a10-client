import React from "react";
import image from "../../assets/images/Image.png";

const ContactMe = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-gray-100 justify-between gap-10 p-10 rounded-2xl">
      <div className="w-full lg:w-1/2">
        <img
          src={image}
          alt="form image"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <div>
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="text-left w-full sm:w-1/2">
                <label className="mb-3">Your Phone</label>
                <input
                  type="number"
                  placeholder="Your Phone"
                  className="mt-2 px-10 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>
              <div className="text-left w-full sm:w-1/2">
                <label className="mb-3">Your Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="mt-2 px-10 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>
            </div>

            <div className="text-left">
              <label className="mb-3">Your Address</label>
              <input
                type="text"
                placeholder="Your Address"
                className="w-full sm:w-[535px] mt-2 px-10 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              placeholder="Your Message"
              className="w-full sm:w-[535px] px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            ></textarea>

            <button
              type="submit"
              className="w-full sm:w-[535px] px-6 py-3 bg-black text-white rounded-lg font-medium transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
