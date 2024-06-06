import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoCallOutline } from "react-icons/io5";
import axios from "axios";

function Login() {
  const [response, setResponse] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

// Login Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new URLSearchParams();
    data.append("client_id", "ei0gvH1bk8wNVj0xqKgtGVzxa3yWXa");
    data.append("client_secret", "Yjq2KXplGi6Niarcp1gn6PP7OrMDlP");
    data.append("user_name", "daya");
    data.append("password", "123");
    data.append("grant_type", "client_credentials");

    try {

// API Calling  
      const res = await axios.post(
        "https://accesslabbeta.stagingserverhub.com/api/b2b/login",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setResponse(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-screen h-auto loginBg flex flex-col justify-center items-center py-10">
      <div className="w-[500px] h-[650px] bg-white rounded-[50px]">
        {/* Vector */}
        <img src="/Images/plus-vector.svg" alt="" className="pt-10 pl-10" />

        {/* Form Content */}
        <div className="flex flex-col justify-center items-center">
          <img
            src="/Images/logo.png"
            alt=""
            className="flex justify-center items-center"
          />
          {/* <img src="/Images/Vector3.svg" alt="" className="" /> */}

          <h1 className="poppins-extrabold text-[#1f6acb] py-5 text-[20px]">
            Report Download Portal
          </h1>
          {/* Inner Container */}
          <div className="bg-[#00d3eb] w-[400px] h-[300px] rounded-[20px] flex flex-col items-center">
            <h1 className="poppins-regular text-[20px] text-[#2b5388] pt-5">
              Login
            </h1>
            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label
                htmlFor="username"
                className="poppins-regular text-[#2b5388] text-[15px]"
              >
                Username
              </label>
              <input
                className="w-[300px] h-[40px] rounded-[5px] px-2"
                type="text"
                name="username"
                placeholder="Enter email Id"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label
                htmlFor="password"
                className="poppins-regular text-[#2b5388] text-[15px]"
              >
                Password
              </label>
              <input
                className="w-[300px] h-[40px] rounded-[5px] px-2"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="w-[300px] h-[50px] flex flex-col items-center pt-5">
                <button
                  type="submit"
                  className="w-[120px] h-[50px] bg-[#1f6cab] text-white poppins-regular rounded-[5px]"
                >
                  SUBMIT
                </button>
              </div>
            </form>
            <h1 className="poppins-semibold text-[14px] text-[#505050] underline pt-5">
              Reset Password
            </h1>
          </div>
          {/* Mobile number & privacy Policy */}
          <div className="flex justify-center items-center text-[#1f6acb] py-5 text-[20px]">
            <IoCallOutline className="text-[25px]" />
            <h1 className="poppins-bold">(+91)9288008801</h1>
          </div>
          <p className="poppins-semibold text-[12px] text-[#505050]">
            I hereby agree and accept the{" "}
            <span className="text-[#1f6acb] cursor-pointer">
              Terms of service
            </span>{" "}
            and{" "}
            <span className="text-[#1f6acb] cursor-pointer">
              Privacy policy
            </span>
          </p>
        </div>
      </div>

      {/* Copyright & Privacy Policy */}
      <div className="w-screen text-white flex flex-row justify-around pt-5 poppins-semibold text-[12px]">
        <h1>Copyright © 2024 Access Home Lab Solutions</h1>
        <h1>
          All Rights Reserved |{" "}
          <span className="text-[#1f6acb] cursor-pointer">
            Terms and Conditions
          </span>{" "}
          |{" "}
          <span className="text-[#1f6acb] cursor-pointer">Privacy Policy</span>
        </h1>
      </div>
    </div>
  );
}

export default Login;
