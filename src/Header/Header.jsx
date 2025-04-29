import React from "react";
import Logo from "../assets/PG.png";
import Banner from "../assets/Banner.png";

export default function Header() {
  return (
    <>
      <div className="flex items-center flex-col font-bold text-center p-4 text-white bg-[#004d21] h-screen">
          <img src={Banner} alt="" className="rounded-3xl w-[50%]" />
        <div className="flex flex-col items-center pt-14">
          <p className="text-5xl pt-4">
            ร้านพงษ์เจริญ กระจกอลูมิเนียม สากเหล็ก พิจิตร
          </p>
          <p className="text-5xl font-thin pt-4">
            รับติดตั้ง กั้นห้อง ซ่อมแซ่ม กระจกอลูมิเนียม
          </p>
          <p className="text-5xl pt-3">โทร 081-973-3078</p>
          <p className="text-5xl pt-3">โทร 081-973-3078</p>
        </div>
      </div>
    </>
  );
}
