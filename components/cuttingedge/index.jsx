import React from 'react';
import Img1 from '@/public/assests/personal.webp';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-center bg-contain grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center p-8 md:px-16 lg:px-32">
      <div className="mb-8 md:mb-0">
        <img src={Img1.src} alt="Vitalease Solutions" className="w-full h-auto md:w-full mb-8" />
      </div>

      <div className="text-left">
        <div className="mb-8 text-5xl">
          <span className="text-indigo-800 font-bold">CUTTING EDGE</span>
          <span className="text-green-600 font-normal"> TECHNOLOGIES</span>
        </div>
        <div className="text-3xl">
          <span className="text-green-600 font-semibold"> With the use of </span>
          <span className="text-indigo-800 font-normal"> high-end technologies
          </span>
          <span className="text-green-600 font-semibold"> VitalEase provides different features to make patients healthcare process more efficient and effective. Some of these features include; remote monitoring features, chatbot designed for 24x7 assistance to any query and providing immediate help.

</span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
