"use client"
import localImage from '../../../public/assests/pana.png'; 
import heart from "@/public/assests/heart.gif"
const ImageCard = ({ imageSrc }) => (
  <div className='w-11/12 grid place-items-center'>
    <img src={imageSrc} alt="Diagnosis" className=" object-cover rounded" />
  </div>

);

const HeartbeatIconCard = ({ heartbeatValue }) => {
  const getHeartRateStatus = (value) => {
    if (value >= 60 && value <= 100) {
      return 'Good';
    } else if (value < 60) {
      return 'Low';
    } else {
      return 'High';
    }
  };

  const heartRateStatus = getHeartRateStatus(heartbeatValue);

  return (
    <div className='bg-LLG p-8 rounded-2xl'>
    <div className=" p-8 bg-white rounded-xl shadow-lg">
      <div className="text-3xl mb-4" role="img" aria-label="Heart">
        ❤️
      </div>
      <div className="text-2xl font-bold mb-2">Heart Beat</div>
      <div className="text-2xl text-red-600 font-bold mb-2">{heartbeatValue} bmp</div>
      <div className={`text-lg font-semibold ${heartRateStatus === 'Good' ? 'text-green-600' : 'text-red-600'}`}>
        {heartRateStatus} Rate
      </div>
      <img src={heart.src} className=' '/>
    </div>
    </div>
  );
};




import sleep from "@/public/assests/sleep.gif"

const SleepPatternCard = ({ sleepPattern }) => {
  const getColorBasedOnLevel = (level) => {
    switch (level) {
      case 'low':
        return 'red';
      case 'moderate':
        return 'orange';
      case 'good':
        return 'teal-200';  
      default:
        return 'black';
    }
  };

  const sleepLevelColor = getColorBasedOnLevel(sleepPattern.level);

  return (
    <div className='bg-LLG p-8 rounded-2xl'>
      <div className={`p-8 bg-white rounded-2xl shadow-lg bg-teal-200`} style={{ backgroundColor: sleepLevelColor }}>
        <div className="text-black font-bold">Sleep Pattern</div>
        <div className="text-lg text-red-600 mb-2">Timing: {sleepPattern.timing}</div>
        <div className="text-lg font-semibold text-green-600">Level: {sleepPattern.level}</div>
        <img src={sleep.src} />
      </div>
    </div>
  )  
};

const Diagnos= ({ imagePath, sleepPattern = { timing: '10:00 PM - 6:00 AM', level: 'good' }, heartbeatValue = 75 }) => (
  <div className="grid grid-cols-4 gap-10">
    <ImageCard imageSrc={imagePath} />
    <HeartbeatIconCard heartbeatValue={heartbeatValue} />
    <SleepPatternCard sleepPattern={sleepPattern} />
  </div>
);

export default Diagnos;
