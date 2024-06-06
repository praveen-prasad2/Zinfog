import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoFunnelSharp } from "react-icons/io5";
import Filter from "../Components/Filter";

function Home() {
  return (
    <div className="bg-[#e4fbfb] h-screen">
      {/* Head Section Including Filter and Search  */}
      <div className=" flex flex-row justify-between px-10 pt-5">
        <h1 className="poppins-semibold text-[20px] text-zinfog-primary">
          Patient Reports
        </h1>
        <div className="flex flex-row justify-center items-center gap-5">
          <button className="flex flex-row items-center bg-zinfog-primary p-1 text-[white] poppins-regular gap-2 rounded-[5px]">
            Apply Filter
            <IoFunnelSharp />
          </button>
          <div className="flex flex-row items-center bg-white p-1 rounded-[5px] border-2 border-zinfog-primary">
            <input
              type="text"
              placeholder="Search by Doctor Name/ Patient Name/ Test Name..."
              className="w-[380px] text-[14px] poppins-regular h-[20px] focus:outline-none"
            />
            <FiSearch className="text-[20px]" />
          </div>
        </div>
      </div>
      <Filter />
    </div>
  );
}

export default Home;
