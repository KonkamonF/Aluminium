import React from "react";
import { FaLine, FaSquareFacebook, FaMapPin, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white text-[#004d21] pt-6 pb-4 border-t border-gray-300 relative h-[300px] flex flex-col justify-between">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-96">
        <div className="relative h-[60px] md:h-[70px]">
          <p className="font-extrabold text-4xl md:text-5xl tracking-wide z-0 relative">
            PONGCHAROEN
          </p>
        </div>

        <div className="flex gap-6 text-2xl items-center">
          <FaLine className="hover:text-green-600 cursor-pointer" />
          <FaSquareFacebook className="hover:text-blue-600 cursor-pointer" />
          <FaMapPin className="hover:text-purple-600 cursor-pointer" />
          <FaTiktok className="hover:text-black cursor-pointer" />
        </div>
      </div>

      <div>
        <div className="mt-4 text-center text-sm text-gray-700 px-4">
          <p>
            198 ร้านพงษ์เจริญกระจกอลูมิเนียม ตำบลสากเหล็ก อำเภอสากเหล็ก
            จังหวัดพิจิตร รหัสไปรษณีย์ 66160
          </p>
        </div>

        <div className="text-center text-sm text-gray-500 mt-2">
          <p>© 2025 PONGCHAROEN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
