import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-center p-2 font-medium">
        <div className="border-2 rounded-full px-20 py-2 flex flex-row gap-12">
          <div
            dir="ltr"
            className="hover:cursor-pointer hover:bg-amber-500 rounded-s-lg"
          >
            Home
          </div>
          <div className="hover:cursor-pointer hover:bg-amber-500">Service</div>

          <div
            dir="rtl"
            className="hover:cursor-pointer hover:bg-amber-500 rounded-s-lg"
          >
            Contact
          </div>
        </div>
      </div>
    </>
  );
}
