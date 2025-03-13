import React from "react";
import side from "../assets/Sidebody.png";

export default function Body() {
  return (
    <>
      <div className="text-center text-[#004d21] flex">
        <img src={side} alt="" className="w-[500px]" />
        <div className="flex ">
          <p className="text-2xl font-bold">
            บริการติดตั้งกระจกอลูมิเนียม
            เพิ่มความหรูหราและทันสมัยให้กับบ้านและอาคารของคุณ
          </p>
          <p className="text-lg text-start leading-relaxed pt-4">
            กระจกอลูมิเนียมเป็นวัสดุที่ได้รับความนิยมอย่างมากในงานก่อสร้างและตกแต่ง
            เนื่องจากมีคุณสมบัติที่โดดเด่น ทั้งในด้านความแข็งแรง ความทนทาน
            และการออกแบบที่ทันสมัย ซึ่งช่วยเสริมภาพลักษณ์ของบ้าน อาคารสำนักงาน
            หรือร้านค้าให้ดูโปร่งโล่ง หรูหรา และทันสมัยขึ้น
          </p>
        </div>
      </div>
    </>
  );
}
