"use client";

import "./mobileVerify.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/navigation";

const style = {
  position: "absolute",
  top: "50%",
  left: "49.5%",
  transform: "translate(-50%, -50%)",
  width: 380,
  bgcolor: "#000",
  border: "2px solid white",
  boxShadow: 24,
  p: 3,
};
const verifyMobile = () => {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp,setOtp] = useState("");
  const [mobileNumberError,setMobileNumberError] = useState("");
  const [otpError,setOtpError] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if(mobileNumber.length >= 10) {
      localStorage.setItem("number",mobileNumber)
      setOpen(true)
    } else {
      setMobileNumberError("Enter minimun 10 digit")
    }
    // setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleOtp = () => {
    if(otp === "0000") {
      router.push("/home")
    } else {
      setOtpError(true)
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-lg text-bold">Clarity</h1>
      <div>
        <p className="mt-10 text-lg">Welcome to Clarity!</p>
        <p className="mt-6">Let's start with your number</p>
      </div>
      <div className="mt-10">
        <input
          type="text"
          className="border border-sky-500 bg-transparent w-[80px] p-3 rounded"
          value={"+ 91"}
        />
        <input
          type="number"
          className={`border ${mobileNumberError ? "border-red-500" : "border-sky-500"}  bg-transparent p-3 rounded ml-8`}
          placeholder="Mobile Number"
          onChange={(e) => {
            setMobileNumber(e.target.value) || setMobileNumberError();
          }}
        />
        {mobileNumberError && <p className="text-red-500 text-sm ml-28 mt-2">{mobileNumberError}</p>}
      </div>
      <div className="mt-[40%] text-center">
        <button
          className="border border-sky-500 px-10 py-3 rounded-lg text-sky-500"
          onClick={handleOpen}
        >
          Proceed Securely
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="text-lg">Verify it's You!</h1>
          <div>
            <p className="mt-5 text-sm">
              Enter the 6-digit code we have sent to
            </p>
            <p className="text-green-600">+91 {mobileNumber}</p>
          </div>
          <div className="mt-8">
            <input
              type="number"
              className={`${otpError ? "border border-red-500" : "border border-sky-500"} bg-transparent p-3 rounded w-full`}
              placeholder="Enter OTP"
              onChange={(e) => {setOtp(e.target.value) || setOtpError()}}
            />
            {otpError && <p className="text-red-600">Enter OTP '0000'</p>}
          </div>
          <div className="flex items-center mt-4 ">
            <p>Did not receive code?</p>
            <span className="text-green-500 cursor-pointer mx-4 ml-2">
              Resend
            </span>
            <span>00:00 sec</span>
          </div>
          <div className="text-center mt-8">
            <button
              className="border border-sky-500 px-10 py-3 rounded-lg text-sky-500"
              onClick={handleOtp}
            >
              Verify and Proceed
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default verifyMobile;
