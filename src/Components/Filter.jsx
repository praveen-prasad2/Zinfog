import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import orderItems from "../utils/orderItems";

function Filter({ setOrders, setShowFilter }) {
  // States for the Inputs

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [patientName, setPatientName] = useState("");
  const [billNo, setBillNo] = useState("");
  const [hospitalId, setHospitalId] = useState("");
  const [referBy, setReferBy] = useState("");
  const [status, setStatus] = useState("");

  // State for storing data from JSON
  const [data, setData] = useState(orderItems);

  // Log orderItems and data to check if they have data
  useEffect(() => {
    console.log("Order Items: ", orderItems);
    console.log("Data loaded: ", data);
  }, [data]);

  // Clear values Function
  const clearInputs =  () => {
    setFromDate("");
    setToDate("");
    setPatientName("");
    setBillNo("");
    setHospitalId("");
    setReferBy("");
    setStatus("");
    filterData();
  };

  const filterData = () => {
    if (!data.length) {
      console.log("Data is not loaded yet.");
      return;
    }

    console.log("Filtering with:", {
      fromDate,
      toDate,
      patientName,
      billNo,
      hospitalId,
      referBy,
      status,
    });

    const filteredData = data.filter((item) => {
      console.log("Filtering item:", item);
      return (
        (!fromDate || new Date(item.start_date) >= new Date(fromDate)) &&
        (!toDate || new Date(item.end_date) <= new Date(toDate)) &&
        (!patientName ||
          item.patient_name
            ?.toLowerCase()
            .includes(patientName.toLowerCase())) &&
        (!billNo || item.bill_number?.includes(billNo)) &&
        (!hospitalId || item.hospital_id?.includes(hospitalId)) &&
        (!referBy || item.doctor_name === referBy) && // Corrected to referBy
        (!status || item.status === status)
      );
    });

    setShowFilter(false);

    setOrders(filteredData);
    console.log("Filtered Data: ", filteredData);
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
              <option value="Dr. Arun K Thambi">Dr. Arun K Thambi</option>
              <option value="Dr. Abdul Siddique">Dr. Abdul Siddique</option>
              <option value="Dr. Raveendran">Dr. Raveendran</option>
              <option value="Dr. Vignesh Muraleedharan">
                Dr. Vignesh Muraleedharan
              </option>
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
              <option value="Ready">Ready</option>
              <option value="Partial Report">Partial Report</option>
              <option value="Lab Dropped">Lab Dropped</option>
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
          <button
            className="flex items-center bg-zinfog-primary text-white p-2 w-[100px] rounded-[5px]"
            onClick={filterData}
          >
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