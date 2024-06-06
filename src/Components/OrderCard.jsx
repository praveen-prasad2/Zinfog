import React from "react";
import { FaDownload } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";

function OrderCard() {
  return (
    <div className="bg-white mx-5 text-[14px]">
         <div className="flex flex-row justify-between px-5 h-[50px] items-center poppins-regular">
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
          <div className="header-item">
            <h1>Ready</h1>
          </div>
          <div className="header-item">
            <h1>Action</h1>
          </div>
        </div>
      
        {/* <div className="flex flex-row text-[20px] text-zinfog-primary gap-5">
          <FaDownload />
          <IoChatbox />
        </div> */}
      </div>
  );
}

export default OrderCard;
