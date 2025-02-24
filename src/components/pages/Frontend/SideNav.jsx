import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="max-w-[500px] max-h-full bg-gray-800 p-5 ">
      <Link to="/" className="text-white block mb-4 hover:text-gray-300">
        Dashboard
      </Link>
      <Link
        to="/Animalbite"
        className="text-white block mb-4 hover:text-gray-300"
      >
        Animalbite
      </Link>
      <Link
        to="/Analytics"
        className="text-white block mb-4 hover:text-gray-300"
      >
        Analytics
      </Link>
    </div>
  );
};

export default SideNav;
