import React from 'react';
import Img1 from '../../public/assests/medicine.webp';

const AboutPage = () => {
  return (
    <div className="grid grid-cols-2 gap-10 items-center">
      <div className="col-span-1">
        <img src={Img1.src} alt="Description of the image" className="w-full h-auto mb-8" />
      </div>

      <div className="col-span-1 flex-grow p-8">
        <div className="AboutCompany mb-8 text-center">
          <span style={{ color: '#002864', fontSize: '48px', fontFamily: 'Aleo', fontWeight: 700, wordWrap: 'break-word' }}>ABOUT</span>
          <span style={{ color: '#098666', fontSize: '48px', fontFamily: 'Aleo', fontWeight: 700, wordWrap: 'break-word' }}> COMPANY</span>
        </div>

        <div className="VitaleaseSolutions text-center">
          <span style={{ color: '#002864', fontSize: '32px', fontFamily: 'Aleo', fontWeight: 700, wordWrap: 'break-word' }}>VitalEase</span>
          <span style={{ color: '#098666', fontSize: '32px', fontFamily: 'Aleo', fontWeight: 400, wordWrap: 'break-word' }}> solutions is a pioneering start-up dedicated to revolutionizing the healthcare industry. Its </span>
          <span style={{ color: '#098666', fontSize: '32px', fontFamily: 'Aleo', fontWeight: 400, textDecoration: 'underline', wordWrap: 'break-word' }}>innovative service</span>
          <span style={{ color: '#098666', fontSize: '32px', fontFamily: 'Aleo', fontWeight: 400, wordWrap: 'break-word' }}> offers a comprehensive platform with cutting edge technology, telemedicine, and personalized care plans. It empowers individuals to manage their health proactively.</span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
