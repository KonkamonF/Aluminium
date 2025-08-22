import React from "react";
import Banner from "../assets/Banner.png";

export default function Header() {
  return (
    <div className="flex flex-col items-center text-center font-bold p-4 text-white bg-[#004d21]">
      {/* Banner Image */}
      <img
        src={Banner}
        alt="Banner"
        className="rounded-3xl w-full sm:w-[80%] md:w-[60%]"
      />

      {/* Header Text */}
      <div className="flex flex-col items-center pt-6 px-4">
        <p className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl pt-2 leading-tight">
          ร้านพงษ์เจริญ กระจกอลูมิเนียม สากเหล็ก พิจิตร
        </p>
        <p className="text-xl sm:text-xl md:text-3xl lg:text-4xl font-thin pt-4 leading-snug">
          รับติดตั้ง กั้นห้อง ซ่อมแซ่ม กระจกอลูมิเนียม
        </p>
        <p className="text-xl sm:text-xl md:text-3xl lg:text-4xl pt-3 leading-snug">
          โทร 081-973-3078
        </p>
      </div>
    </div>
  );
}
