import React from "react";
import { FaDownload } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";

function OrderCard({ item }) {
  // Function to change the status background color based on the status
  const getStatusClass = (status) => {
    switch (status) {
      case "Ready":
        return "bg-[#89ffaa]";
      case "Partial Report":
        return "bg-[#e7f880]";
      case "Lab Dropped":
        return "bg-[#f2a38a]";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="bg-white mx-5 text-[14px] border-zinfog-black border-b-2">
      <div className="flex flex-row justify-between px-5 items-center poppins-regular">
        <div className="header-item">
          <h1>{item?.order_no}</h1>
        </div>
        <div className="header-item">
          <h1>{item?.start_date}</h1>
        </div>
        <div className="header-item">
          <h1>{item?.patient_name}</h1>
        </div>
        <div className="header-item">
          <h1>{item?.hospital_id}</h1>
        </div>
        <div className="header-item">
          <h1>{item?.test_name}</h1>
        </div>
        <div className="header-item">
          <h1>{item?.doctor_name}</h1>
        </div>
        <div className="header-item">
          <h1>{item?.end_date}</h1>
        </div>
        <div id="status" className="header-item">
          <h1
            className={`flex items-center justify-center px-3 py-1 w-32 rounded-[50px] poppins-regular text-zinfog-black ${getStatusClass(
              item?.status
            )}`}
            id="status"
          >
            {item?.status}
          </h1>
        </div>
        <div className="header-item flex flex-row text-[20px] text-zinfog-primary gap-5 cursor-pointer">
          <FaDownload />
          <IoChatbox />
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
