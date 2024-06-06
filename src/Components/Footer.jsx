import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

function Footer() {
    const location = useLocation();

    // Check if the current path is '/login'
    if (location.pathname === "/login") {
        return null;
    }

    return (
        <div className="bg-[#e4fbfb] flex flex-row justify-around">
            <div>
                <p>Copyright © 2023 Access Home Lab Solutions</p>
            </div>
            <div className="flex justify-center items-center text-[#1f6acb] text-[20px]">
                <IoCallOutline className="text-[25px]" />
                <h1 className="poppins-bold">(+91)9288008801</h1>
            </div>
            <div>
                <p>All Rights Reserved | <span>Terms and Conditions</span> | <span>Privacy Policy</span></p>
            </div>
        </div>
    );
}

export default Footer;
