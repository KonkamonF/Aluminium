import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-center p-2 font-medium bg-[#004d21] text-amber-600">
        <div className="border-2 rounded-full flex flex-row border-amber-600">
          <div
            dir="ltr"
            className="hover:cursor-pointer hover:bg-amber-600 rounded-s-full px-20 py-2 hover:text-white hover:font-bold"
          >
            Home
          </div>
          <div className="hover:cursor-pointer hover:bg-amber-600 px-20 py-2 hover:text-white hover:font-bold">
            Service
          </div>

          <div
            dir="rtl"
            className="hover:cursor-pointer hover:bg-amber-600 rounded-s-full px-20 py-2 hover:text-white hover:font-bold"
          >
            Contact
          </div>
        </div>
      </div>
    </>
  );
}
