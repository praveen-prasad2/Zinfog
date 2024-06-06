import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

function Filter() {
  // States for the Inputs
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [patientName, setPatientName] = useState("");
  const [billNo, setBillNo] = useState("");
  const [hospitalId, setHospitalId] = useState("");
  const [referBy, setReferBy] = useState("");
  const [status, setStatus] = useState("");

  // Clear values Function
  const clearInputs = () => {
    setFromDate("");
    setToDate("");
    setPatientName("");
    setBillNo("");
    setHospitalId("");
    setReferBy("");
    setStatus("");
  };

  return (
    <div>
      {/* Filter Options */}
      <div className="flex flex-row justify-evenly bg-[white] py-10 mt-5 border-[1px] border-zinfog-black mx-5">
        {/* Input Column 1 */}
        <div className="flex flex-col poppins-regular space-y-2">
          <div className="flex items-center gap-2">
            <label htmlFor="from-date" className="w-32">
              From Date
            </label>
            <input
              type="date"
              id="from-date"
              value={fromDate}
              //  clear the value in the input  using Onchange
              onChange={(e) => setFromDate(e.target.value)}
              className="w-[300px] h-[35px] border-2 border-zinfog-black rounded-[5px] pl-3"
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="patient-name" className="w-32">
              Patient Name
            </label>
            <input
              type="text"
              id="patient-name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-[300px] h-[35px] border-2 border-zinfog-black rounded-[5px] pl-3"
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="bill-no" className="w-32">
              Bill No
            </label>
            <input
              type="text"
              id="bill-no"
              value={billNo}
              onChange={(e) => setBillNo(e.target.value)}
              className="w-[300px] h-[35px] border-2 border-zinfog-black rounded-[5px] pl-3"
            />
          </div>
        </div>

        {/* Input Column 2 */}
        <div className="flex flex-col poppins-regular space-y-2">
          <div className="flex items-center gap-2">
            <label htmlFor="to-date" className="w-32">
              To Date
            </label>
            <input
              type="date"
              id="to-date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="w-[300px] h-[35px] border-2 border-zinfog-black rounded-[5px] pl-3"
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="hospital-id" className="w-32">
              Hospital ID
            </label>
            <input
              type="text"
              id="hospital-id"
              value={hospitalId}
              onChange={(e) => setHospitalId(e.target.value)}
              className="w-[300px] h-[35px] border-2 border-zinfog-black rounded-[5px] pl-3"
            />
          </div>
        </div>

        {/* Input Column 3 */}
        <div className="flex flex-col poppins-regular space-y-2">
          <div className="flex items-center gap-2">
            <label htmlFor="refer-by" className="w-32">
              Refer by
            </label>
            <select
              name="doctors"
              id="refer-by"
              value={referBy}
              onChange={(e) => setReferBy(e.target.value)}
              className="w-[300px] h-[35px] border-2 border-zinfog-black rounded-[5px] pl-3"
            >
              <option value="">Select Doctor</option>
              <option value="doctor1">Dr. Arun K Thambi</option>
              <option value="doctor2">Dr. Abdul Siddique</option>
              <option value="doctor3">Dr. Raveendran</option>
              <option value="doctor3">Dr. Vignesh Muraleedharan</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="status" className="w-32">
              Status
            </label>
            <select
              name="status"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-[300px] h-[35px] border-2 border-zinfog-black rounded-[5px] pl-3"
            >
              <option value="">Select Status</option>
              <option value="ready">Ready</option>
              <option value="progress">Partial Report</option>
              <option value="notready">Lab Dropped</option>
            </select>
          </div>
        </div>
      </div>
      {/* Filter Buttons */}
      <div className="flex flex-row justify-between items-center mx-5 px-2 border-[1px] border-zinfog-black h-[70px]">
        <div>
          <p className="poppins-regular text-zinfog-black text-[16px]">
            Please provide search criteria and hit search button.
          </p>
        </div>
        <div className="flex flex-row gap-5">
          <button className="flex items-center bg-zinfog-primary text-white p-2 w-[100px] rounded-[5px]">
            <FiSearch className="text-[20px]" />
            Search
          </button>
          <button
            className="flex items-center bg-[#f46c09] text-white p-2 w-[100px] rounded-[5px]"
            onClick={clearInputs}
          >
            <RxCross2 className="text-[20px]" />
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;

