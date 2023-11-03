'use client';
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faEdit, faSave, faNotesMedical, faEnvelope, faPhone, faGraduationCap, faHospitalUser, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ElderDoctorProfile = () => {
  const defaultCover =
    "https://source.unsplash.com/1600x400/?hospital"; // Replace with the URL for the cover image
  const defaultAvatar =
    "https://img.icons8.com/ios/452/doctor-male.png"; // Placeholder avatar image URL
  const [selectedCover, setSelectedCover] = useState(defaultCover);
  const [selectedAvatar, setSelectedAvatar] = useState(defaultAvatar);
  const [appointmentHistory, setAppointmentHistory] = useState([
    { date: "2023-01-05", patient: "John Doe", diagnosis: "Routine checkup, all good." },
    { date: "2022-11-15", patient: "Jane Smith", diagnosis: "Prescription refill and general health discussion." },
    { date: "2022-09-20", patient: "Robert Johnson", diagnosis: "Flu symptoms, prescribed medication." },
    { date: "2022-07-10", patient: "Emily Davis", diagnosis: "Follow-up on chronic condition management." },
    // Add more appointment history as needed
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
                    alt="Doctor Avatar"
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
            <h1 className="text-3xl font-semibold mb-2">Dr. John Doe</h1>
            <p className="text-gray-600 mb-4">Specializing in Internal Medicine</p>

            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faHospitalUser} className="text-blue-500 mr-2" />
              <p className="text-sm text-gray-600">Senior Consultant at City Hospital</p>
            </div>

            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faCalendarCheck} className="text-blue-500 mr-2" />
              <p className="text-sm text-gray-600">Available for appointments on weekdays</p>
            </div>

            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faPhone} className="text-blue-500 mr-2" />
              <p className="text-sm text-gray-600">Contact: +1 (123) 456-7890</p>
            </div>

            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-2" />
              <p className="text-sm text-gray-600">Email: drjohndoe@example.com</p>
            </div>

            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 mr-2" />
              <p className="text-sm text-gray-600">
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/drjohndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Dr. John Doe
                </a>
              </p>
            </div>

            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faTwitter} className="text-blue-500 mr-2" />
              <p className="text-sm text-gray-600">
                Twitter:{" "}
                <a
                  href="https://twitter.com/drjohndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  @drjohndoe
                </a>
              </p>
            </div>

            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faInstagram} className="text-blue-500 mr-2" />
              <p className="text-sm text-gray-600">
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/drjohndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  @drjohndoe
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="px-8 py-4">
          <h2 className="text-xl font-semibold mb-4">Appointment History</h2>
          <ul>
            {appointmentHistory.map((appointment, index) => (
              <li key={index} className="mb-4">
                <div className="bg-white p-4 rounded-md shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faCalendarCheck} className="text-blue-500 mr-2" />
                      <p className="text-sm text-gray-600">{appointment.date}</p>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faUserMd} className="text-blue-500 mr-2" />
                      <p className="text-sm text-blue-500">{appointment.patient}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{appointment.diagnosis}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ElderDoctorProfile;
