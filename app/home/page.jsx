"use client";
import React, { useState } from "react";
import UserComponent from "../components/UserComponent";
import Inbox from "../components/Inbox";
import All from "../components/All";
import "./home.css";
const Home = () => {
  const [activeTab, setActiveTab] = useState("allusers");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className=" m-3">
      <UserComponent />
      <div className="tab text-gray-300 mt-8 ">
        <button
          className={activeTab === "inbox" ? "tablinks active" : "tablinks"}
          onClick={() => handleTabClick("inbox")}
        >
          Inbox
        </button>
        <button
          className={activeTab === "allusers" ? "tablinks active" : "tablinks"}
          onClick={() => handleTabClick("allusers")}
        >
          All
        </button>
      </div>
      <div className="overflow-y-auto">
        {activeTab === "inbox" && <Inbox />}
        {activeTab === "allusers" && <All />}
      </div>
    </div>
  );
};

export default Home;
