'use client';
import React from 'react';
import { FaTachometerAlt, FaHeartbeat, FaFlask, FaVial, FaCandyCane, FaLungs } from 'react-icons/fa'; // Imported new icons
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';


const Status = (value) => {
  if (value < 80) {
    return { text: "Low", emoji: "😟", color: "text-red-500" };
  } else if (value >= 80 && value <= 100) {
    return { text: "Normal", emoji: "😐", color: "text-red-500" };
  } else {
    return { text: "Good", emoji: "😊", color: "text-red-500" };
  }
};

const DataBox = ({ icon, text, value }) => {
  const { text: countStatusText, emoji: countStatusEmoji, color: countStatusColor } = Status(value);

  return (
    <div className={`relative flex items-center p-4 rounded-lg shadow-md bg-white border border-red-500 hover:shadow-lg hover:-translate-z-4 hover:rotate-2 transition-transform flex-1`}>
      <div className={`mr-4 text-4xl ${countStatusColor}`}>{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-black">{text}</h3>
        <span className={`text-sm ${countStatusColor}`}>
          {countStatusText} <span role="img" aria-label={countStatusText.toLowerCase()}>{countStatusEmoji}</span>
        </span>
        <span className={`text-sm mt-1 ${countStatusColor}`}>{value}</span>
      </div>
    </div>
  );
};

const YouthStatus = () => {
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [{
      label: 'Heartbeat',
      data: [75, 80, 78, 85, 82, 79, 88],
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      pointRadius: 4,
      pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      fill: false,
    }],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        min: 70,
        max: 90,
      },
    },
  };

  return (
    <div className="flex gap-8">
      <div className="mb-4 p-4 flex-1">
        <DataBox icon={<FaTachometerAlt />} text="Blood Pressure: 120/80" value={80} />
        <DataBox icon={<FaHeartbeat />} text="Heart Rate: 75 bpm" value={75} />
      </div>
      <div className="mb-4 p-4 flex-1">
        <DataBox icon={<FaFlask />} text="Glucose Level: 90 mg/dL" value={90} />
        <DataBox icon={<FaVial />} text="Blood Count: 100" value={100} />
      </div>
      <div className=" p-4 flex-1">
        <DataBox icon={<FaCandyCane />} text="Sugar Level: 120 mg/dL" value={120} />
        <DataBox icon={<FaLungs />} text="Respiration Rate: 18 breaths/min" value={18} />
      </div>
      <div className="flex-1 p-4">
        <div className="text-xl font-semibold mb-3 text-black">Health Status Chart</div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default YouthStatus;
