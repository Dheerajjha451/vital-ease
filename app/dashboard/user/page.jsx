"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faBell } from '@fortawesome/free-solid-svg-icons';
import Card from '../../../components/Cards/card';
import Medication from '../../../components/Cards/Medication';
import BusStop from "@/public/assests/Bus-Stop-bro.webp"
import BloodStatus from '../../../components/Cards/Bloodstatus';
import ToDoCalendar from '../../../components/Cards/Todo';
import SidebarU from '@/components/DashNav/SidebarU/sidebar';
import ChatIcon from '@/components/Chaticon';
import Chatbot from '@/app/users/chatbot/page';
import { useState } from 'react';
import YourBodyStatus from '@/components/VitaminData';
import Profile from "@/components/Profile"


const Page = (props) => {
  const { userName } = props;
    const [isChatOpen, setIsChatOpen] = useState(false);
  
    const handleChatToggle = () => {
      setIsChatOpen(!isChatOpen);
    };

  return (
    <div className="overflow-x-hidden flex bg-white">
      <SidebarU/>
      <Profile/>
      {/* Right side with content */}
      <div className=" h-screen flex-1 p-12 mx-24 w-9/11">
        <p>{userName}</p>
        <div className='flex flex-row items-center gap-2'>
        <h2 className="text-4xl font-bold mb-4">For Today,</h2>
        <h3 className='text-gray-300 text-xl font-semibold'>Good Morning </h3>
        </div>
        

        <div className="grid grid-cols-4 gap-10">
          <Card title="Medication Reminder" hoverEffect shadowEffect>
            {[...Array(5)].map((_, index) => (
              <Medication
                key={index}
                name={`Medicine ${index + 1}`}
                quantity="1 pill"
                timing="Morning"
                hoverEffect
                shadowEffect
              />
            ))}
          </Card>

          {/* Today's Routine */}
          <div title="Today's Routine" hoverEffect shadowEffect>

            <ToDoCalendar />
          </div>

          {/* Health Stats */}
          <Card title="Health Stats" hoverEffect shadowEffect>
            <BloodStatus />
          </Card>
        </div>

          <YourBodyStatus/>
      </div>
      {isChatOpen&&<div className='fixed right-5 bottom-24'>
      <Chatbot isOpen={isChatOpen} onToggle={handleChatToggle} />
      </div>
}
      <div className='fixed right-5 bottom-5 bg-yellow-500 p-5 rounded-full'>
      <ChatIcon onToggle={handleChatToggle} />

      </div>
      
    </div>
  );
};

export default Page;
