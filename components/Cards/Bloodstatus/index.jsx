'use client';
import React from 'react';
import { FaTachometerAlt, FaHeartbeat, FaFlask, FaVial } from 'react-icons/fa';

const getBloodCountStatus = (value) => {
  if (value < 80) {
    return { text: "Low", emoji: "😟", color: "text-red-500" };
  } else if (value >= 80 && value <= 100) {
    return { text: "Normal", emoji: "😐", color: "text-red-500" };
  } else {
    return { text: "Good", emoji: "😊", color: "text-red-500" };
  }
};

const DataBox = ({ icon, text, value }) => {
  const { text: countStatusText, emoji: countStatusEmoji, color: countStatusColor } = getBloodCountStatus(value);

  return (
    <div className={`relative flex items-center mb-4 p-4 rounded-lg shadow-md bg-white border border-red-500 hover:shadow-lg hover:-translate-z-4 hover:rotate-2 transition-transform`}>
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

const BloodStatus = () => (
  <div>
    <div className="mb-4 p-4">
      <DataBox icon={<FaTachometerAlt />} text="Blood Pressure: 120/80" value={80} />
      <DataBox icon={<FaHeartbeat />} text="Heart Rate: 75 bpm" value={75} />
      <DataBox icon={<FaFlask />} text="Glucose Level: 90 mg/dL" value={90} />
      <DataBox icon={<FaVial />} text="Blood Count: 100" value={100} />
    </div>
  </div>
);

export default BloodStatus;
