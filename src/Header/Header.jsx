import React from "react";
import Logo from "../assets/PG.png";
import Banner from "../assets/Banner.png";

export default function Header() {
  return (
    <div className="font-bold m-6 mx-auto rounded-t-2xl text-center p-2 text-white bg-[#004d21]">
      <img src={Banner} alt="" className="rounded-t-2xl w-[100%]" />
      <p className="text-4xl pt-4">ร้านพงษ์เจริญ กระจกอลูมิเนียม สากเหล็ก พิจิตร</p>
      <p className="text-3xl pt-4">
        รับติดตั้ง กั้นห้อง ซ่อมแซ่ม กระจกอลูมิเนียม
      </p>
      <p className="text-4xl pt-3">โทร 081-973-3078</p>
    </div>
  );
}
