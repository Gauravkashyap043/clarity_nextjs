"use client";

import React, { useEffect, useRef, useState } from "react";
import SideMenu from "./SideMenu";
import "./userComponent.css";
import { FaUserAlt, FaWallet } from "react-icons/fa";
const UserComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  // const handleClickOutsideMenu = (event) => {
  //   if (menuRef.current && !menuRef.current.contains(event.target)) {
  //     setIsMenuOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutsideMenu);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutsideMenu);
  //   };
  // }, []);

  return (
    <div>
      <div className="px-3 flex justify-between items-center w-full py-3 bg-zinc-900 rounded-lg">
        <div className="cursor-pointer">
          <FaUserAlt onClick={handleMenuClick} size={25} color="gray" />
        </div>
        <div className="w-[70px] cursor-pointer border border-emerald-500 text-teal-600 rounded-lg ring-2 ring-gray-500 flex items-center gap-2 py-1 px-1">
          <FaWallet color="gray" />
          <span>₹ 10</span>
        </div>
      </div>
      <SideMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
      <div className="py-3 bg-zinc-900 rounded-lg w-[90%] m-auto mt-8 text-center text-sky-500">
        <p> <span className="text-green-500"> 50% OFF</span> on all sessions (2 days left)</p>
      </div>
      
    </div>
  );
};

export default UserComponent;
