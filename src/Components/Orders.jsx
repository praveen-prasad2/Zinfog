import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import OrderCard from "./OrderCard";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import orderData from "../utils/orderItems";

function Orders({ orderItems }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // Number of reports on one page

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const orders = orderItems || orderData;

  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(orders?.length / itemsPerPage);

  return (
    <>
      <div className="bg-white mx-5 mt-5 border-2 border-b-black">
        {/* Order Categories Header */}
        <div className="flex flex-row justify-between px-5 items-center poppins-semibold">
          {/* Header items */}
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
      {/* Order Cards */}
      <div>
        {orders?.slice(offset, offset + itemsPerPage)?.map((item) => (
          <div key={item?.order_no}>
            <OrderCard item={item} />
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="bg-white pagination-container flex flex-row justify-center items-center py-5 poppins-semibold mx-5">
        <ReactPaginate
          previousLabel={
            <FaCircleChevronLeft className="text-[30px] text-zinfog-primary" />
          }
          nextLabel={
            <FaCircleChevronRight className="text-[30px] text-zinfog-primary" />
          }
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          activeClassName={"active"}
          previousClassName={"pagination-prev"}
          nextClassName={"pagination-next"}
          pageClassName={"pagination-page"}
          disabledClassName={"pagination-disabled"}
          activeLinkClassName={"pagination-active-link"}
          className="flex flex-row items-center gap-3"
        />
      </div>
    </>
  );
}

export default Orders;
