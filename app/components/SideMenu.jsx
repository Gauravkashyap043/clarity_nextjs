"use client";
import React, { useEffect, useState } from "react";
import "./sideMenu.css";
import { FaUserCircle,FaGift,FaAssistiveListeningSystems, } from "react-icons/fa";
import { MdNoAccounts,MdLogout,MdLanguage,MdReportProblem,MdOutlineSettings } from "react-icons/md";
const SideMenu = ({ isOpen, onClose }) => {
  const [number, setNumber] = useState("");
  useEffect(() => {
    const mobileNumber = localStorage.getItem("number");
    setNumber(mobileNumber);
  }, []);
  return (
    <div className={`sidemenu ${isOpen ? "open" : ""}`}>
      <button className="sidemenu__close" onClick={onClose}>
        X
      </button>
      <div className="pl-3">
        {/* <div className="border-2 border-white h-[50px] w-[50px] rounded-full mt-8"></div> */}
        <div className="mt-8 ">
          <FaUserCircle size={50} />
          <div className="mt-3 mb-5">
          <p >Anonymous</p>
          <p>+91 {number}</p>
          </div>
         
        </div>
        <div className="flex gap-5 m-4 cursor-pointer items-center">
          <FaUserCircle size={25} />
          <p>My profile</p>
        </div>
        <p className="text-gray-400 my-7">Only for you</p>
        <div className="flex gap-5 m-4 cursor-pointer items-center">
          <FaGift size={25} />
          <p>Refer and Earn</p>
        </div>
        <div className="flex gap-5 m-4 cursor-pointer items-center">
          <FaAssistiveListeningSystems size={25} />
          <p>Be a Listener</p>
        </div>
        <div className="flex gap-5 m-4 cursor-pointer items-center">
          <MdLanguage size={25} />
          <p>Change Language</p>
        </div>
        <p className="text-gray-400 my-7">Comumnicate</p>
        <div className="flex gap-5 m-4 cursor-pointer items-center">
          <MdReportProblem size={25} />
          <p>Report a Problem</p>
        </div>
        <div className="flex gap-5 m-4 cursor-pointer items-center">
        <MdOutlineSettings size={25} />
        <p>App Settings</p>
        </div>
        <div className="flex gap-5 m-4 cursor-pointer items-center">
        <MdLogout size={25} />
        <p>Logout</p>
        </div>
        <div className="flex gap-5 m-4 cursor-pointer items-center">
        <MdNoAccounts size={25} />
        <p>Delete Account</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
