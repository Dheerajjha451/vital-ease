import React from 'react';
import DashNav from '../../../components/DashNav';
import DiagnosisItem from '../../../components/Cards/Diagnos';
import YourStatusItem from '../../../components/Cards/Yourstatus';

function Page(props) {
  const { userName } = props;

  return (
    <div className="flex h-screen">
      <div>
        <DashNav />
      </div>

      <div className="flex-grow p-4 overflow-y-auto ml-14"> 
        <div className="text-right">
          <p className="text-xl font-semibold">{userName}</p>
          <h2 className="text-2xl font-bold mb-4">Today</h2>
        </div>

        <div className="mt-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Diagnosis History</h2>
            <DiagnosisItem content="Diagnosis" />
          </div>

          <div>
            <h2 className="text-2xl font-bold ">Your Status</h2>
            <div className="grid grid-cols-4 gap-6">
              <YourStatusItem content="Your" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
