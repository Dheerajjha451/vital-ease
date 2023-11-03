import React from 'react';
import BusStop from "@/public/assests/Bus-Stop-bro.webp"
import { Icon } from '@iconify/react';
const vitaminsData = [
  { name: 'Vitamin A', bg: 'bg-red-300',icon:"twemoji:tomato"},
//   { name: 'Vitamin B', bg: 'bg-orange-200',icon:"noto:orange-circle"},
{ name: 'Vitamin D', bg: 'bg-yellow-200',icon:"noto:orange-circle"},
  { name: 'Vitamin C', bg: 'bg-blue-200',icon:"noto-v1:lemon" },
  { name: 'Vitamin E', bg: 'bg-sky-200',icon:"mingcute:fish-fill"},
  // Add more vitamins as needed
];

const YourBodyStatus = () => {
  return (
    <div className="w-screen py-3">
      <div className="flex justify-start items-center">
        <div className="">
          <h2 className="text-2xl font-bold mb-4">Your Body Status</h2>
          <img src={BusStop.src} alt="Your Body" className="max-w-full w-7/12" />
        </div>
        <div className=" md:w-1/2 py-10">
          <div className="overflow-x-auto ">
            <div className="flex space-x-4">
              {vitaminsData.map((vitamin, index) => (
                <div key={index} className=" flex gap-4">
                  <div className={`rounded-lg shadow-md p-4 ${vitamin.bg}`}>
                    <div className='bg-gray-700 p-2 px-8 flex gap-4 items-center rounded-3xl '>
                    <p className="text-white">{vitamin.name}</p>
                    <p className='bg-DG text-white p-2 px-6 rounded-2xl'>Normal</p>
                    </div>
                    <p className='text-2xl font-semibold'>{vitamin.name}</p>
                    <div className='grid place-items-end'>
                    <Icon className='text-8xl ' icon={vitamin.icon}/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourBodyStatus;
