'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPills } from '@fortawesome/free-solid-svg-icons';

const Medication = ({ name, quantity, timing, hoverEffect, shadowEffect }) => (
  <div
    className={`mb-2 p-2 rounded bg-white ${hoverEffect ? 'hover:bg-blue-500 hover:text-white' : 'bg-white text-black'} ${
      shadowEffect ? 'shadow-md' : ''
    }`}
  >
    <div className="flex items-center mb-1">
      <FontAwesomeIcon icon={faPills} className="text-blue-500 mr-1" />
      <div>
        <p className={`font-semibold text-sm ${hoverEffect ? 'text-black' : ''}`}>{name}</p>
        <p className={`text-sm ${hoverEffect ? 'text-black' : ''}`}>{`Quantity: ${quantity}`}</p>
        <p className={`text-sm ${hoverEffect ? 'text-black' : ''}`}>{`Timing: ${timing}`}</p>
      </div>
    </div>
  </div>
);

export default Medication;
