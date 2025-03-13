import React from "react";
import side from "../assets/Sidebody.png";

export default function Body() {
  return (
    <>
      <div className="py-18">
        <div className="text-center text-[#004d21] flex items-center mx-60 pb-4">
          <img src={side} alt="" className="w-[50%] rounded-4xl" />
          <div className="pl-10">
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
        <div className="text-center text-[#004d21] text-lg leading-relaxed flex items-center mx-60">
          <div className="pr-10">
            <p className="text-2xl font-bold pb-4">
              ทำไมต้องเลือกกระจกอลูมิเนียม?
            </p>
            <p className="text-start">
              <span className="font-bold">แข็งแรงและทนทาน - </span>
              อลูมิเนียมเป็นวัสดุที่ไม่เป็นสนิมและสามารถทนต่อสภาพอากาศได้ดี
              เหมาะสำหรับการใช้งานทั้งภายในและภายนอก
            </p>
            <p className="text-start">
              <span className="font-bold">ดีไซน์ทันสมัย - </span>
              กระจกอลูมิเนียมช่วยให้บ้านหรืออาคารของคุณดูโปร่งแสงและโมเดิร์น
              เพิ่มความสวยงามและสไตล์ที่เป็นเอกลักษณ์
            </p>
            <p className="text-start">
              <span className="font-bold">ลดเสียงรบกวน - </span>
              กระจกอลูมิเนียมคุณภาพสูงสามารถช่วยลดเสียงรบกวนจากภายนอก
              ทำให้บรรยากาศภายในเงียบสงบมากขึ้น
            </p>
            <p className="text-start">
              <span className="font-bold">ดูแลรักษาง่าย - </span>
              วัสดุอลูมิเนียมและกระจกสามารถทำความสะอาดได้ง่าย
              ไม่ต้องกังวลเรื่องเชื้อรา หรือการผุพังเหมือนไม้
            </p>
          </div>
          <img src={side} alt="" className="w-[50%] rounded-4xl" />
        </div>
      </div>
    </>
  );
}
