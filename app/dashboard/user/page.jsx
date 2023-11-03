import React from 'react';
import DashNav from '../../../components/DashNav';

function Page(props) {
  const { userName } = props;

  return (
    <div>
      <DashNav />
      <div className="text-right">
        <p>{userName}</p>
        <h2>Today</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Medication Reminder */}
          <div className="bg-gray-200 p-4 rounded">
            <h3>Medication Reminder</h3>
            {/* Add specific content for Medication Reminder */}
          </div>

          {/* Today's Routine */}
          <div className="bg-gray-200 p-4 rounded">
            <h3>Today's Routine</h3>
            {/* Add specific content for Today's Routine */}
          </div>

          {/* Health Stats */}
          <div className="bg-gray-200 p-4 rounded">
            <h3>Health Stats</h3>
            {/* Add specific content for Health Stats */}
          </div>
        </div>

        {/* Your Body Status */}
        <div className="grid grid-cols-5 gap-4 mt-4">
          {/* Add images or content for each grid item */}
          <div className="bg-gray-200 p-4 rounded">
            {/* Add content for the first grid item */}
          </div>
          {/* Add more grid items as needed */}
        </div>
      </div>
    </div>
  );
}

export default Page;
