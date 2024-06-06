import React from "react";
import { FaDownload } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";

function OrderCard({status}) {
    // Function to change the status background color based on the status
  const getStatusClass = (status) => {
    switch (status) {
      case 'Ready':
        return 'bg-[#89ffaa]';
      case 'Partial Report':
        return 'bg-[#e7f880]';
      case 'Lab Dropped':
        return 'bg-[#f2a38a]';
      default:
        return 'bg-gray-400';
    }}
  return (
    <>
    
    <div className="bg-white mx-5 text-[14px]">
         <div  className="flex flex-row justify-between px-5  items-center poppins-regular">
          <div className="header-item">
            <h1>A19023</h1>
          </div>
          <div className="header-item">
            <h1>01/05/2023</h1>
          </div>
          <div className="header-item">
            <h1>Sankaranarayanan</h1>
          </div>
          <div className="header-item">
            <h1>DH2023/0001245</h1>
          </div>
          <div className="header-item">
            <h1>Anti Leukemia 1 Serum </h1>
          </div>
          <div className="header-item">
            <h1>Dr. Arun K Thambi</h1>
          </div>
          <div className="header-item">
            <h1>03/05/2023</h1>
          </div>
          <div className="header-item" id="status"  >
            <h1 className={`${getStatusClass(status)} px-3 py-1 w-32 rounded-[50px] poppins-regular text-zinfog-black`}>{status}</h1>
          </div>
          <div className="header-item flex flex-row text-[20px] text-zinfog-primary gap-5">
          <FaDownload />
          <IoChatbox />
          </div>
        </div>
      
       
      </div>
   
    </>
  );
}

export default OrderCard;
