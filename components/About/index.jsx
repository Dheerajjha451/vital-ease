import React from 'react';
import Img1 from '../../public/assests/medicine.webp';

const AboutPage = () => {
  return (
    <div className="h-screen bg-center bg-contain grid grid-cols-2 gap-5 place-items-center px-96">
      <div className="">
        <img src={Img1.src} alt="Description of the image" className="w-full h-auto mb-8" />
      </div>

      <div className="grid grid-cols-1 place-items-start p-8">
        <div className="AboutCompany mb-8 text-5xl text-left">
          <span className="text-indigo-800 font-bold break-words">ABOUT</span>
          <span className="text-green-600 font-regular break-words"> COMPANY</span>
        </div>
        <div className="VitaleaseSolutions text-3xl text-left">
          <span className="text-indigo-800  font-semibold break-words">VitalEase</span>
          <span className="text-green-600 font-normal break-words"> solutions is a pioneering start-up dedicated to revolutionizing the healthcare industry. Its </span>
          <span className="text-green-600  font-normal underline break-words">innovative service</span>
          <span className="text-green-600  font-normal break-words"> offers a comprehensive platform with cutting-edge technology, telemedicine, and personalized care plans. It empowers individuals to manage their health proactively.</span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
