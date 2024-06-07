import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoCallOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { userData } from "../utils/userData";

function Login() {
  const [response, setResponse] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false); // state to display error

  const navigate = useNavigate();

  // Login Function
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (password && username) {
        if (userData.username === username && userData.password === password) {
          navigate("/home");
          return;
        }
      }

      console.log("Enter valid credentials");
      setError(true);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className=" h-auto loginBg flex flex-col justify-center items-center py-10">
      <div className="w-[500px] h-[650px] bg-white rounded-[50px] relative">
        {/* Vector */}
        <img src="/Images/plus-vector.svg" alt="" className="pt-10 pl-10" />

        {/* Form Content */}
        <div className="flex flex-col justify-center items-center">
          <img
            src="/Images/logo.png"
            alt=""
            className="flex justify-center items-center"
          />
          <img src="/Images/Vector2.svg" alt="" className="absolute right-5 top-20  w-[60px]" />


          <h1 className="poppins-extrabold text-zinfog-primary py-5 text-[20px]">
            Report Download Portal
          </h1>
          {/* Inner Container */}
          <div className="bg-[#00d3eb] w-[400px] h-[300px] rounded-[20px] flex flex-col items-center">
            <h1 className="poppins-regular text-[20px] text-zinfog-darkblue pt-5">
              Login
            </h1>
            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label
                htmlFor="username"
                className="poppins-regular text-zinfog-darkblue text-[15px]"
              >
                Username
              </label>
              <input
                className="w-[300px] h-[40px] rounded-[5px] px-2 poppins-regular"
                type="text"
                name="username"
                placeholder="Enter email Id"
                id="username"
                // value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label
                htmlFor="password"
                className="poppins-regular text-zinfog-darkblue text-[15px]"
              >
                Password
              </label>
              <input
                className="w-[300px] h-[40px] rounded-[5px] px-2 poppins-regular"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="w-[300px] h-[50px] flex flex-col items-center pt-5">
                <button
                  type="submit"
                  className="w-[120px] h-[50px] bg-zinfog-primary text-white poppins-regular rounded-[5px]"
                >
                  SUBMIT
                </button>
              </div>
            </form>
            <h1 className="poppins-semibold text-[14px] text-[#505050] underline pt-5 cursor-pointer">
              Reset Password
            </h1>
          </div>
          {/* Show error message if the credentials is wrong  */}
          {error && (
            <p className="text-[12px] text-red-600 underline poppins-semibold pt-5">
              Wrong Credentials! your email Id or password entered is wrong
            </p>
          )}

          {/* Mobile number & privacy Policy */}
          <div className="flex justify-center items-center text-zinfog-primary py-10 text-[20px]">
          <img src="/Images/Vector2.svg" alt="" className="absolute left-5 bottom-18 w-[80px]" />

            <IoCallOutline className="text-[25px]" />
            <h1 className="poppins-bold">(+91)9288008801</h1>
          </div>
          <p className="poppins-semibold text-[12px] text-[#505050]">
            I hereby agree and accept the{" "}
            <span className="text-zinfog-primary cursor-pointer">
              Terms of service
            </span>{" "}
            and{" "}
            <span className="text-zinfog-primary cursor-pointer">
              Privacy policy
            </span>
          </p>
        </div>
      </div>

      {/* Copyright & Privacy Policy */}
      <div className="w-[100%] text-white flex flex-row justify-around pt-5 poppins-semibold text-[12px]">
        <h1>Copyright © 2024 Access Home Lab Solutions</h1>
        <h1>
          All Rights Reserved |{" "}
          <span className="text-zinfog-primary cursor-pointer">
            Terms and Conditions
          </span>{" "}
          |{" "}
          <span className="text-zinfog-primary cursor-pointer">
            Privacy Policy
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Login;
