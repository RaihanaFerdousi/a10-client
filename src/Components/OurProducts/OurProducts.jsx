import React from 'react';
import directors from '../../assets/images/directors.png'
import TvShows from '../../assets/images/TvShows.png'
import FlimFestivals from '../../assets/images/FlimFestivals.png'
import FlimAwards from '../../assets/images/FlimAwards.png'

const OurProducts = () => {
    return (
      <div className="py-16">
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-gray-600 uppercase tracking-wide">Projects</h3>
          <h1 className="text-4xl font-bold text-gray-800">Our Productions</h1>
        </div>
  
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"> 
          <div className="flex flex-col items-center text-center">
            <img src={directors} alt="Directors" className="w-32 h-32 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Visionary Directors</h3>
            <p className="text-gray-500">
              Meet the masterminds behind some of the most groundbreaking productions. Their creative vision shapes the stories that captivate audiences worldwide.
            </p>
          </div>
  
          <div className="flex flex-col items-center text-center">
            <img src={TvShows} alt="TV Shows" className="w-32 h-32 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Captivating TV Shows</h3>
            <p className="text-gray-500">
              From thrilling dramas to heartfelt comedies, our TV shows bring a mix of entertainment and storytelling to keep you engaged episode after episode.
            </p>
          </div>
   
          <div className="flex flex-col items-center text-center">
            <img src={FlimFestivals} alt="Film Festivals" className="w-32 h-32 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Prestigious Film Festivals</h3>
            <p className="text-gray-500">
              Celebrating cinematic excellence, our festivals bring together filmmakers, critics, and audiences to honor the art of storytelling on the big screen.
            </p>
          </div>
  
   
          <div className="flex flex-col items-center text-center">
            <img src={FlimAwards} alt="Film Awards" className="w-32 h-32 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Renowned Film Awards</h3>
            <p className="text-gray-500">
              Recognizing the finest in filmmaking, our awards highlight exceptional talent and bring well-deserved accolades to industry trailblazers.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default OurProducts;