const ImageCard = ({ imageSrc }) => (
  <div className="card bg-teal-200 p-8 rounded shadow-lg hover:shadow-xl transition duration-300">
    <img src={imageSrc} alt="Diagnosis" className="card-image object-cover w-full h-full rounded" />
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
    <div className="card bg-teal-200 p-8 rounded shadow-lg">
      <div className="text-3xl mb-4" role="img" aria-label="Heart">
        ❤️
      </div>
      <div className="text-lg font-bold mb-2">Heartbeat</div>
      <div className="text-2xl font-bold mb-2">{heartbeatValue}</div>
      <div className={`text-lg ${heartRateStatus === 'Good' ? 'text-green-green' : 'text-red-600'}`}>
        {heartRateStatus} Rate
      </div>
    </div>
  );
};

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
    <div className={`card p-8 rounded shadow-lg bg-teal-200`} style={{ backgroundColor: sleepLevelColor }}>
    <div className="text-black font-bold">Sleep Pattern</div>
    <div className="text-lg mb-2">Timing: {sleepPattern.timing}</div>
    <div className="text-lg">Level: {sleepPattern.level}</div>
  </div>
  )  
};

const DiagnosisItem = ({ imagePath, sleepPattern = { timing: '10:00 PM - 6:00 AM', level: 'good' }, heartbeatValue = 75 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <ImageCard imageSrc={imagePath} />
    <HeartbeatIconCard heartbeatValue={heartbeatValue} />
    <SleepPatternCard sleepPattern={sleepPattern} />
  </div>
);

export default DiagnosisItem;
