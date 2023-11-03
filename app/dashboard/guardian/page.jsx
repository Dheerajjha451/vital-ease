import React from 'react';
import DiagnosisItem from '../../../components/Cards/Diagnos';
import YourStatusItem from '../../../components/Cards/Yourstatus';
import SidebarU from '@/components/DashNav/SidebarU/sidebar';
import Pana from "@/public/assests/pana.webp"

function Page(props) {
  const { userName } = props;

  return (
    <div className="flex h-screen">
      <div>
        <SidebarU/>
      </div>

      <div className="ml-20 flex-grow p-4 overflow-y-auto ml-14"> 
        <div className="text-right">
          <p className="text-xl font-semibold">{userName}</p>
          
        </div>

        <div className="mt-8">
          <div className="">
            <h2 className="text-2xl font-bold mb-4">Diagnosis History</h2>
            <DiagnosisItem content="Diagnosis" imagePath={Pana.src} />
          </div>

          <div>
            <h2 className="text-2xl font-bold ">User Status</h2>
            <div className="">
              <YourStatusItem content="Your" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
