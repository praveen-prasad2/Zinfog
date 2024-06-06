import React from "react";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";


function Filter() {
  return (
    <div>
      <div className="flex flex-row justify-evenly bg-[white] py-10 mt-5 border-2 mx-5">
        {/* Input Column 1  */}
        <div className="flex flex-col poppins-regular space-y-2">
          <div className="flex items-center gap-2">
            <label htmlFor="from-date" className="w-32">
              From Date
            </label>
            <input
              type="date"
              id="from-date"
              className="w-[300px] h-[35px] border-2 border-[#505050] rounded-[5px] pl-3 "
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="patient-name" className="w-32">
              Patient Name
            </label>
            <input
              type="text"
              id="patient-name"
              className="w-[300px] h-[35px] border-2 border-[#505050] rounded-[5px] pl-3"
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="bill-no" className="w-32">
              Bill No
            </label>
            <input
              type="text"
              id="bill-no"
              className="w-[300px] h-[35px] border-2 border-[#505050] rounded-[5px] pl-3"
            />
          </div>
        </div>

        {/* Input Column 2  */}
        <div className="flex flex-col poppins-regular space-y-2">
          <div className="flex items-center gap-2">
            <label htmlFor="to-date" className="w-32">
              To Date
            </label>
            <input
              type="date"
              id="to-date"
              className="w-[300px] h-[35px] border-2 border-[#505050] rounded-[5px] pl-3 "
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="hospital-id" className="w-32">
              Hospital ID
            </label>
            <input
              type="text"
              id="hospital-id"
              className="w-[300px] h-[35px] border-2 border-[#505050] rounded-[5px] pl-3 "
            />
          </div>
        </div>

        {/* Input Column 3  */}
        <div className="flex flex-col poppins-regular space-y-2">
          <div className="flex items-center gap-2">
            <label htmlFor="refer-by" className="w-32">
              Refer by
            </label>
            <select
              name="doctors"
              id="refer-by"
              className="w-[300px] h-[35px] border-2 border-[#505050] rounded-[5px] pl-3 "
            >
              <option value="doctor1">Doctor 1</option>
              <option value="doctor2">Doctor 2</option>
              <option value="doctor3">Doctor 3</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="status" className="w-32">
              Status
            </label>
            <select
              name="status"
              id="status"
              className="w-[300px] h-[35px] border-2 border-[#505050] rounded-[5px] pl-3 "
            >
              <option value="ready">Ready</option>
              <option value="progress">In Progress</option>
              <option value="notready">Not Ready</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mx-5 px-2 border-2 h-[70px]"> 
        <div>
          <p>Please provide search criteria and hit search button.</p>
        </div>
        <div className="flex flex-row gap-5">
            <button className="flex items-center bg-[#]"><FiSearch className="text-[20px]"/>Search</button>
            <button className="flex items-center"><RxCross2 className="text-[20px]"/>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
