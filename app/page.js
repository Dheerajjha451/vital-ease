import Head from 'next/head';
import Img1 from '../public/assests/doctor.webp';
import Img2 from '../public/assests/people.webp';
import Navbar from '@/components/Navbar';
import About from '@/components/About';

const Home = () => {
  return (
    <div className="grid mt-14 place-items-center min-h-screen relative" style={{ background: '#CEFFE7' }}>
      <div className="lorem" style={{ width: '80%', height: '100%' }}>
        <span style={{ color: '#098666', fontSize: '48px', fontFamily: 'Aleo', fontWeight: 700 }}>Lorem</span>
        <span style={{ color: 'black', fontSize: '48px', fontFamily: 'Aleo', fontWeight: 700 }}> </span>
        <span style={{ color: '#020077', fontSize: '48px', fontFamily: 'Aleo', fontWeight: 700 }}>ipsum dolor sit amet, consectetur adipiscing elit, sed do.</span>
      </div>
      <p className="text-lg mb-8">Some introductory text goes here.</p>
      <div className="grid grid-flow-col gap-4 mb-4">
        <button className="border border-green-500 text-green-500 hover:bg-green-50 hover:border-green-600 hover:text-green-600 font-bold py-2 px-4 rounded-full">
          Why VitalEase?
        </button>

        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
          Get Started
        </button>
      </div>

      <img
        src={Img1.src}
        alt="Description of the image"
        className="mt-8"
      />

      <div className="HappyMembersContainer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div className="LineStrip" style={{ height: '5px', width: '50%', background: 'black', marginRight: '10px' }}></div>
        <div className="HappyMembers" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#098666', fontSize: '48px', fontFamily: 'Aleo', fontWeight: 700 }}>HAPPY</span>
          <span style={{ color: 'black', fontSize: '48px', fontFamily: 'Aleo', fontWeight: 700 }}> </span>
          <span style={{ color: '#002864', fontSize: '48px', fontFamily: 'Aleo', fontWeight: 700 }}>MEMBERS</span>
        </div>
      </div>

      <img
        src={Img2.src}
        alt="Description of the image"
        className="mt-4"
        style={{ width: '700px', height: '700px' }}
      />
      <About />
    </div>
  );
};

export default Home;
