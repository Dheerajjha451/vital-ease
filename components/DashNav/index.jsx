"use client"
import { FaBars, FaUser, FaSignOutAlt, FaChartBar } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { RiUserLine } from 'react-icons/ri';
import Link from 'next/link';
import { useContext } from 'react';
import { GlobalContext } from '@/context';
import { useRouter } from 'next/navigation';
const SidebarD = () => {
    const {isAuthUser,setisAuthUser}=useContext(GlobalContext)
  const currentPath = window.location.pathname; // Get the current route
    const router=useRouter();
  const isDashboardRoute = currentPath.startsWith('/dashboard');
  const isProfileRoute = currentPath.endsWith('/profile');
    function handleLogout(){
        setisAuthUser(false),
        router.push("/users/login")
    }
  return (
    <div className="fixed h-full w-1/11 bg-[#A0CCFB] p-4 flex flex-col justify-between items-center">
      
      <div className="w-full flex flex-col items-center space-y-8 flex-grow">
        <Link href="/dashboard/CareGiver">
        <RxDashboard
          className={`text-3xl p- cursor-pointer ${
            isDashboardRoute ? 'bg-blue-700 text-white' : 'text-DB'
          }`}
        />
        </Link>
        <Link href="/dashboard/CareGiver/profile">
        <RiUserLine
          className={`text-3xl cursor-pointer ${
            isProfileRoute ? 'bg-blue-700 p-4 text-white' : 'text-DB'
          }`}
        />
        </Link>
      </div>
      <div className="w-full text-center mt-6">
        <FaSignOutAlt className="text-red-600 text-3xl cursor-pointer" onClick={handleLogout}/>
      </div>
    </div>
  );
};

export default SidebarD;
