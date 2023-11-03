'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleAddTask = () => {
    if (newTask && selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      const newTasks = [...tasks, { date: formattedDate, task: newTask }];

      setTasks(newTasks);
      setNewTask('');
      setSelectedDate(null);
    }
  };

  return (
    <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="lg:col-span-1">
        <h3 className="text-lg font-semibold mb-2">To-Do Calendar</h3>
        <div className="mb-2">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Select Date"
            className="border rounded p-2"
          />
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="New Task"
            className="border rounded p-2 mr-2"
          />
          <button type="button" onClick={handleAddTask} className="bg-blue-500 text-white px-2 py-1 rounded">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Task
          </button>
        </div>
      </div>
      <div className="lg:col-span-1">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{task.date}</span>: {task.task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
