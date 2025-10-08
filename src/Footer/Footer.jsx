import React from "react";
import { FaLine, FaSquareFacebook, FaMapPin, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white text-[#0d4927] pt-28 pb-4 border-t border-gray-300 relative h-auto flex flex-col justify-between">
      {/* แถวโลโก้และไอคอนโซเชียล */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="relative h-auto">
          <p className="font-extrabold text-3xl md:text-5xl tracking-wide z-0 text-center md:text-left">
            PONGCHAROEN
          </p>
        </div>

        {/* ไอคอนโซเชียลมีเดีย */}
        <div className="flex gap-6 text-2xl items-center justify-center md:justify-end">
          <a href="https://line.me/ti/p/tMKGzcijma">
            <FaLine className="hover:text-green-600 cursor-pointer" />
          </a>
          <a href="https://www.facebook.com/pongcharoen89">
            <FaSquareFacebook className="hover:text-blue-600 cursor-pointer" />
          </a>
          <a href="https://maps.app.goo.gl/WSUTQXxmYHs12rSG6">
            <FaMapPin className="hover:text-red-600 cursor-pointer" />
          </a>
          <a href="https://www.tiktok.com/@pongcharoen11?_t=ZS-8zH8UvJEFJB&_r=1">
            <FaTiktok className="hover:text-black cursor-pointer" />
          </a>
        </div>
      </div>

      {/* ที่อยู่และลิขสิทธิ์ */}
      <div className="mt-4 text-center text-sm text-gray-700 px-4">
        <p>
          198 ร้านพงษ์เจริญกระจกอลูมิเนียม ตำบลสากเหล็ก อำเภอสากเหล็ก
          จังหวัดพิจิตร รหัสไปรษณีย์ 66160
        </p>

        <p className="text-gray-500 mt-2">
          © 2025 PONGCHAROEN. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
