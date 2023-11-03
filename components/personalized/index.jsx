import React from 'react';
import Img1 from '../../public/assests/hos.png';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-center bg-contain grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center p-8 md:px-16 lg:px-32">
      <div className="mb-8 md:mb-0">
        <img src={Img1.src} alt="Vitalease Solutions" className="w-full h-auto md:w-full mb-8" />
      </div>

      <div className="text-left">
        <div className="mb-8 text-5xl">
          <span className="text-indigo-800 font-bold">Personalized Care </span>
          <span className="text-green-600 font-normal"> Plans</span>
        </div>
        <div className="text-3xl">
          <span className="text-indigo-800 font-semibold"> The personalised </span>
          <span className="text-green-600 font-normal">
         care and support plan is developed following an initial holistic assessment about the person’s health and well-being needs. The person, or their family, work hand-in-hand with their health and social care professionals to complete this assessment which then leads to producing an agreed personalised care plan . 

          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
