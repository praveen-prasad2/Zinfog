import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  // Hide Footer  in the Login Page

  if (location.pathname === "/login") {
    return null;
  }

  return (
    <>
      <div className="h-[100px] bg-[#e4fbfb] flex flex-row justify-around items-center fixed w-screen bottom-0 left-0 ">
        <div>
          <p className="text-[#505050] poppins-regular text-[14px]">
            Copyright © 2023 Access Home Lab Solutions
          </p>
        </div>
        <div className="flex justify-center items-center text-[#1f6acb] text-[20px]">
          <IoCallOutline className="text-[25px]" />
          <h1 className="poppins-bold">(+91)9288008801</h1>
        </div>
        <div>
          <p className="text-[#505050] poppins-regular text-[14px]">
            All Rights Reserved | <span className="text-[#1f6acb] cursor-pointer">Terms and Conditions</span> |{" "}
            <span className="text-[#1f6acb] cursor-pointer">Privacy Policy</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
