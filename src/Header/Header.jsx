import React from "react";
import Logo from "../assets/PG.png";

export default function Header() {
  return (
    <div className="bg-[#004d21] m-5 rounded-t-2xl text-center p-2 text-white">
      <img src={Logo} alt="" className="w-40" />
      <p className="text-4xl">ร้านพงษ์เจริญ กระจกอลูมิเนียม สากเหล็ก พิจิตร</p>
      <p className="text-3xl pt-4">
        รับติดตั้ง กั้นห้อง ซ่อมแซ่ม กระจกอลูมิเนียม
      </p>
      <p className="text-4xl pt-4">โทร 081-973-3078</p>
    </div>
  );
}
