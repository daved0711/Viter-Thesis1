import { AlignVerticalDistributeCenter, BetweenVerticalEnd, LayoutDashboard } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-64  bg-dark p-5 ">
      <Link to="/" className="text-white block mb-4 hover:text-gray-300">
        <div className="flex gap-2">
        <LayoutDashboard/>Dashboard
        </div>
       
      </Link>
      <Link
        to="/Animalbite"
        className="text-white block mb-4 hover:text-gray-300"
      >
        <div className="flex gap-2">
        <AlignVerticalDistributeCenter/>
        Animalbite
        </div>
      
      </Link>
      <Link
        to="/Analytics"
        className="text-white block mb-4 hover:text-gray-300"
      >
        <div className="flex gap-2">

        <BetweenVerticalEnd/>
        Analytics
        </div>
      </Link>
    </div>
  );
};

export default SideNav;
