import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w[1240px] mx-auto px-8 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Gowok.</h1>
      <ul className="hidden md:flex cursor-pointer">
        <li className="p-4 text-xl">Home</li>
        <li className="p-4 text-xl">Company</li>
        <li className="p-4 text-xl">Resources</li>
        <li className="p-4 text-xl">About</li>
        <li className="p-4 text-xl">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>
      {/* mobile menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 cursor-pointer">Home</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">Company</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">Resources</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">About</li>
          <li className="p-4 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
