import React from "react";
import image1 from "../../assets/images/drector.png";
import image2 from "../../assets/images/icons.png";
import flimmer1 from "../../assets/images/flimmer3.png";
import flimmer2 from "../../assets/images/flimmer1.png";
import flimmer3 from "../../assets/images/flimmer2.png";

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-10 items-center mt-20">
        <div className="lg:w-1/2 w-full">
          <img src={image1} className="rounded-lg w-full" alt="Director" />
        </div>
        <div className="text-left lg:w-1/2 w-full px-5 lg:px-0">
          <h4 className="text-gray-400 mb-3">Drama</h4>
          <h2 className="text-3xl lg:text-4xl font-semibold">
            Film By Alejandro Duris
          </h2>
          <p className="mt-4 text-stone-500">
            Life is a journey filled with endless opportunities and challenges
            that shape who we are. Every step we take, whether forward or
            backward, adds to our story and teaches us valuable lessons.
            Embracing both success and failure allows us to grow,
          </p>
          <img src={image2} alt="Icons" className="mt-4" />
        </div>
      </div>
      <div className="mt-16 mb-16 px-5 lg:px-0">
        <div className="mb-10 text-center lg:text-left">
          <h3 className="text-stone-500">Filmmakers</h3>
          <h2 className="text-2xl lg:text-3xl font-semibold">Creative Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="text-center lg:text-left">
            <div>
              <img className="mb-5 mx-auto lg:mx-0" src={flimmer1} alt="Steven Grant" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Steven Grant</h2>
              <h3 className="text-md mt-1">Producer</h3>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div>
              <img className="mb-5 mx-auto lg:mx-0" src={flimmer2} alt="Kathy Kim" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Kathy Kim</h2>
              <h3 className="text-md mt-1">Movie Director</h3>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div>
              <img className="mb-5 mx-auto lg:mx-0" src={flimmer3} alt="Richard West" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Richard West</h2>
              <h3 className="text-md mt-1">Cameraman</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
