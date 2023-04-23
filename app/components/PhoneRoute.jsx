"use client";
import React from "react";  
import { FaMobileAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
const PhoneRoute = () => {
  const router = useRouter();
  return (
    <div className="w-[80%] m-auto  text-sky-300">
      <div
        className="w-full h-[55px] border border-sky-500 px-3 flex justify-between items-center rounded-lg cursor-pointer"
        onClick={() => {
          router.push("/mobile-verify");
        }}
      >
        <div>
          <FaMobileAlt size={25} color="#0ea5e9" />
        </div>
        <div>Continue Via Phone</div>
      </div>
      <div className="text-center mt-3">
        <p className="text-gray-300">
          By clicking, I accept the{" "}
          <span className="text-sky-500 underline cursor-pointer"> T&C</span>{" "}
          and{" "}
          <span className="text-sky-500 underline cursor-pointer">
            Privacy Policy
          </span>
        </p>
      </div>
      <div className="mt-5 flex justify-end">
        <p className="cursor-pointer">Referral Code?</p>
      </div>
    </div>
  );
};

export default PhoneRoute;
