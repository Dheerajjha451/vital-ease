import { todoList } from '@/public/assests/list/patient_list';
import React, { useState } from 'react';

const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];



const TodoRoutine = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Todo <b className='text-red-400 text-3xl'>Routine</b></h2>
      <h1 className='text-gray-400 font-lg py-2'>Wednesday 3,Nov '23</h1>
      <div className="flex space-x-10">
        {weekDays.map((day) => (
          <div
            key={day}
            className={`cursor-pointer font-semibold font-lg ${
              selectedDay === day ? 'text-blue-600' : 'text-gray-600'
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <div className="max-h-60 overflow-y-auto p-4 rounded">
          {todoList[selectedDay] ? (
            <ul>
              {todoList[selectedDay].map((task, index) => (
                <li key={index} className="mb-2 bg-teal p-4 rounded-2xl">
                  {task}
                </li>
              ))}
            </ul>
          ) : (
            <p>No tasks for {selectedDay}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoRoutine;
