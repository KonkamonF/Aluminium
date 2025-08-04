import React from "react";
import side from "../assets/Sidebody.png";
import { LuWarehouse } from "react-icons/lu";
import { MdOutlineEngineering } from "react-icons/md";
import { BiVolumeMute } from "react-icons/bi";
import { FaAward } from "react-icons/fa";

export default function Body() {
  return (
    <>
      <div className="py-18">
        <div className="text-center text-[#004d21] flex items-center mx-60 pb-4">
          <img src={side} alt="" className="w-[50%] rounded-4xl" />
          <div className="pl-10">
            <p className="text-2xl font-bold">
              บริการติดตั้งกระจกอลูมิเนียม
              เพิ่มความทันสมัยให้กับบ้านและอาคารของคุณ
            </p>
            <p className="text-start leading-relaxed pt-4 ">
              กระจกอลูมิเนียมเป็นวัสดุที่ได้รับความนิยมอย่างมากในงานก่อสร้างและตกแต่ง
              เนื่องจากมีคุณสมบัติที่โดดเด่น ทั้งในด้านความแข็งแรง ความทนทาน
              และการออกแบบที่ทันสมัย ซึ่งช่วยเสริมภาพลักษณ์ของบ้าน อาคารสำนักงาน
              หรือร้านค้าให้ดูโปร่งโล่ง หรูหรา และทันสมัยขึ้น
            </p>
          </div>
        </div>
        <div className="text-center text-[#004d21] text-lg flex items-center mx-60 justify-between">
          <div className="pr-10">
            <p className="text-2xl font-bold pb-4">ทำไมต้องเลือกเรา?</p>
            <div className="text-start leading-relaxed">
              ✨เชื่อถือได้ มีผลงานการติดตั้งมากมาย พร้อมรีวิวจากลูกค้าจริง{" "}
              <br />
              ✨ทีมช่างมืออาชีพ มีประสบการณ์และความชำนาญในการติดตั้งทุกประเภท{" "}
              <br />
              ✨มาตรฐานสูง ใช้วัสดุคุณภาพ รับรองความแข็งแรงและความปลอดภัย <br />
              ✨บริการหลังการขายที่ยอดเยี่ยม <br />
              พร้อมให้คำปรึกษาลูกค้าตลอดอายุการใช้งาน
            </div>
          </div>
          <img src={side} alt="" className="w-[50%] rounded-4xl" />
        </div>
      </div>
      <div className="bg-[#0d4927] py-18 h-screen flex items-center">
        <div className="text-center text-white text-lg leading-relaxed flex items-center mx-60 pt-4 gap-8">
          <p className="flex flex-col justify-center items-center">
            <LuWarehouse size={60} />
            <span className="font-bold py-4 text-2xl">แข็งแรงและทนทาน</span>
            อลูมิเนียมเป็นวัสดุที่ไม่เป็นสนิมและสามารถทนต่อสภาพอากาศได้ดี
            เหมาะสำหรับการใช้งานทั้งภายในและภายนอก
          </p>
          <p className="flex flex-col justify-center items-center">
            <MdOutlineEngineering size={60} />
            <span className="font-bold py-4 text-2xl">ดีไซน์ทันสมัย</span>
            กระจกอลูมิเนียมช่วยให้บ้านหรืออาคารของคุณดูโปร่งแสงและโมเดิร์น
            เพิ่มความสวยงามและสไตล์ที่เป็นเอกลักษณ์
          </p>
          <p className="flex flex-col justify-center items-center">
            <BiVolumeMute size={60} />
            <span className="font-bold py-4 text-2xl">ลดเสียงรบกวน</span>
            กระจกอลูมิเนียมคุณภาพสูงสามารถช่วยลดเสียงรบกวนจากภายนอก
            ทำให้บรรยากาศภายในเงียบสงบมากขึ้น
          </p>
          <p className="flex flex-col justify-center items-center">
            <FaAward size={60} />
            <span className="font-bold py-4 text-2xl">ดูแลรักษาง่าย</span>
            วัสดุอลูมิเนียมและกระจกสามารถทำความสะอาดได้ง่าย
            ไม่ต้องกังวลเรื่องเชื้อรา หรือการผุพังเหมือนไม้
          </p>
        </div>
      </div>
    </>
  );
}
