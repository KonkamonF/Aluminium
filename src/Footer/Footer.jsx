import React from "react";
import { FaLine, FaSquareFacebook, FaMapPin, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="bg-white text-[#004d21]">
        <div className="flex justify-around items-center">
          <p className="font-extrabold text-4xl">PONGCHAROEN</p>
          <div className="flex gap-4 text-2xl hover:cursor-pointer">
            <FaLine color="green" />
            <FaSquareFacebook color="blue" />
            <FaMapPin color="purple" />
            <FaTiktok />
          </div>
        </div>
        <p>
          198 ร้านพงษ์เจริญกระจกอลูมิเนียม ตำบล สากเหล็ก อำเภอ สากเหล็ก จังหวัด
          พิจิตร รหัสไปรษณี 66160
        </p>
        <div className="text-center text-lg py-4">
          <p>© 2025 PONGCHAROEN. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
