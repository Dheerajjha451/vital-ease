import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Img1 from '../public/assests/doctor.webp';
import Img2 from '../public/assests/people.webp';
import bloom from "@/public/assests/bloom.png"
import CuttingEdge from "@/components/Cuttingedge"
import Personalized from "@/components/personalized"
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-14 place-items-center min-h-screen relative bg-LG">
        <div className='bg-pattern bg-contain bg-center flex py-16 flex-col gap-4 place-items-center h-screen'>
          <div className="text-6xl text-center w-8/12">
            <span className="text-green-600 font-semibold">Elevating </span>
            <span className="text-indigo-800 font-semibold">Elderly Care: VitalEase Simplifies Medication, Streamlines Communication, Enables Monitoring.</span>
          </div>
          <p className="text-xl font-medium px-96 text-center mb-8">VitalEase revolutionizes elderly care, offering simplified medication management, streamlined communication, and remote monitoring for an enhanced quality of life</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <button className="border border-green-500 text-green-500 hover:bg-green-50 hover:border-green-600 hover:text-green-600 font-bold py-2 px-4 rounded-full">
              Why VitalEase?
            </button>
            <Link href="/users/login">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
                Get Started
              </button>
            </Link>
          </div>
          <div className='bg-DB px-5 py-32 rounded-full grid place-items-center'>
            <img src={Img1.src} alt="Hero" className="w-10/12" />
          </div>
        </div>

        <div className=''>
        <About id="about" />
        <CuttingEdge id="service" />
        <Personalized/>
        </div>
        <div className='grid gap-10 bg-pattern bg-cover bg-center place-items-center py-24'>
          <h1 className='text-4xl font-semibold'>Ready to start your Journey?</h1>
          <Link href="/users/login">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full">
              Get Started
            </button>
          </Link>
          <img src={bloom.src} alt="Description of the image" className="mt-4 w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
