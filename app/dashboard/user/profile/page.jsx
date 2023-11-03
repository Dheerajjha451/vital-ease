'use client';
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEdit, faSave, faHeart, faPrescription, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faPhone, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ElderPatientProfile = () => {
  const defaultCover =
    "https://source.unsplash.com/1600x400/?elderly"; 
  const defaultAvatar =
    "https://img.icons8.com/ios/452/grandmother.png"; 
  const [selectedCover, setSelectedCover] = useState(defaultCover);
  const [selectedAvatar, setSelectedAvatar] = useState(defaultAvatar);
  const [healthRecords, setHealthRecords] = useState([
    { date: "2023-01-10", condition: "Arthritis", treatment: "Medication and physical therapy prescribed." },
    { date: "2022-11-05", condition: "High Blood Pressure", treatment: "Prescription for blood pressure management." },
    { date: "2022-09-15", condition: "Diabetes", treatment: "Insulin therapy and dietary guidance." },
    { date: "2022-07-20", condition: "Osteoporosis", treatment: "Calcium supplements and exercise regimen." },
    // Add more health records as needed
  ]);

  const handleCoverChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedCover(URL.createObjectURL(file));
    }
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedAvatar(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div
        className="bg-cover bg-center h-64 md:h-96"
        style={{ backgroundImage: `url(${selectedCover})` }}
      >
        <label htmlFor="cover-upload" className="cursor-pointer absolute bottom-4 right-4">
          <div className="bg-blue-500 text-white text-center p-2 rounded-md">
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Change Cover
          </div>
        </label>
        <input
          className="hidden"
          type="file"
          id="cover-upload"
          accept="image"
          onChange={handleCoverChange}
        />
      </div>

      <div className="mx-auto max-w-3xl bg-white rounded-md overflow-hidden shadow-lg -mt-16 md:-mt-32">
        <div className="p-8 md:flex items-center justify-between">
          <div className="md:w-1/3">
            <div className="flex justify-center items-center">
              <label htmlFor="avatar-upload">
                <div className="cursor-pointer">
                  <img
                    src={selectedAvatar}
                    alt="Patient Avatar"
                    className="w-40 h-40 md:w-64 md:h-64 object-cover rounded-full border-4 border-blue-500"
                  />
                  <div className="bg-blue-500 text-white text-center p-2 rounded-md mt-2">
                    <FontAwesomeIcon icon={faEdit} className="mr-2" />
                    Change Avatar
                  </div>
                </div>
              </label>
              <input
                className="hidden"
                type="file"
                id="avatar-upload"
                accept="image"
                onChange={handleAvatarChange}
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h1 className="text-3xl font-semibold mb-2">Elderly Patient</h1>
            <p className="text-gray-600 mb-4">Age: 75</p>

            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-2" />
              <p className="text-sm text-gray-600">Medical History: Hypertension, Diabetes</p>
            </div>

            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-500 mr-2" />
              <p className="text-sm text-gray-600">Last Checkup: January 10, 2023</p>
            </div>

            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faPhone} className="text-blue-500 mr-2" />
              <p className="text-sm text-gray-600">Emergency Contact: +1 (123) 456-7890</p>
            </div>

            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-2" />
              <p className="text-sm text-gray-600">Email: elderpatient@example.com</p>
            </div>

            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 mr-2" />
              <p className="text-sm text-gray-600">
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/elderpatient"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Elder Patient
                </a>
              </p>
            </div>

            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faTwitter} className="text-blue-500 mr-2" />
              <p className="text-sm text-gray-600">
                Twitter:{" "}
                <a
                  href="https://twitter.com/elderpatient"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  @elderpatient
                </a>
              </p>
            </div>

            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faInstagram} className="text-blue-500 mr-2" />
              <p className="text-sm text-gray-600">
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/elderpatient"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  @elderpatient
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="px-8 py-4">
          <h2 className="text-xl font-semibold mb-4">Health Records</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {healthRecords.map((record, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-md">
                <FontAwesomeIcon icon={faPrescription} className="text-blue-500 mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Date:</strong> {record.date}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Condition:</strong> {record.condition}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Treatment:</strong> {record.treatment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElderPatientProfile;
