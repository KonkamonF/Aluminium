import React from "react";
import { FaLine, FaSquareFacebook, FaMapPin, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="bg-white">
        footer
        <div className="flex justify-around">
          <p className="font-extrabold text-4xl">PONGCHAROEN</p>
          <div className="flex gap-4 text-2xl hover:cursor-pointer">
            <FaLine color="green" />
            <FaSquareFacebook color="blue" />
            <FaMapPin color="purple" />
            <FaTiktok />
          </div>
        </div>
      </div>
    </>
  );
}
