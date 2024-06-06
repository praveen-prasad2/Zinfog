import React from "react";
import { FiLogOut } from "react-icons/fi";

function Header() {
  return (
    <div className="flex flex-row items-center justify-between px-20 py-5 border-b-2">
      <div>
        <img src="/Images/logo.png" alt="" className="cursor-pointer"/>
      </div>
      <div className="flex flex-row  items-center justify-center gap-5">
        <h1 className="poppins-semibold text-[14px] text-[#505050]">
          Username
        </h1>
        <img
          src="/Images/user.svg"
          alt=""
          className="w-[40px] rounded-[50px] cursor-pointer"
        />
        <button className="bg-[#1f6cab] p-2 border-2 border-[#787777]  rounded-[5px]">
          <FiLogOut />
        </button>
      </div>
    </div>
  );
}

export default Header;
