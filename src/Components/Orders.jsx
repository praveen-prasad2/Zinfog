import React from "react";
import OrderCard from "./OrderCard";

function Orders() {
  return (
    <>
    
    <div className="bg-white mx-5 mt-5 border-2 border-b-black">
      {/* Order Categories Header  */}
      <div className="flex flex-row justify-between px-5 h-[50px] items-center poppins-semibold">
          <div className="header-item">
            <h1>Order Number</h1>
          </div>
          <div className="header-item">
            <h1>Date</h1>
          </div>
          <div className="header-item">
            <h1>Patient Name</h1>
          </div>
          <div className="header-item">
            <h1>Hospital ID</h1>
          </div>
          <div className="header-item">
            <h1>Test Name</h1>
          </div>
          <div className="header-item">
            <h1>Doctor Name</h1>
          </div>
          <div className="header-item">
            <h1>ETA</h1>
          </div>
          <div className="header-item">
            <h1>Status</h1>
          </div>
          <div className="header-item">
            <h1>Action</h1>
          </div>
        </div>
    </div>
    {/* order Cards  */}
    <div>
        <OrderCard/>
    </div>
    </>
    
  );
}

export default Orders;
