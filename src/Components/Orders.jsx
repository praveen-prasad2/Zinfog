import React from "react";
import OrderCard from "./OrderCard";
import orderItems from "../utils/orderItems";

function Orders() {
  return (
    <>
    
    <div className="bg-white mx-5 mt-5 border-2 border-b-black">
      {/* Order Categories Header  */}
      <div className="flex flex-row justify-between px-5 items-center poppins-semibold">
          <div className="header-item">
            <h1>Order Number</h1>
          </div>
          <div className="w-[100px] header-item">
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
        {
            orderItems.map((item)=>(
                <div key={item.id}>
                    
                    <OrderCard item={item}/>
                </div>
            ))
        }
    </div>
    </>
    
  );
}

export default Orders;
