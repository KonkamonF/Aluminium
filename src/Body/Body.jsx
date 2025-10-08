import React from "react";
import side from "../assets/Sidebody.png";
import { LuWarehouse } from "react-icons/lu";
import { MdOutlineEngineering } from "react-icons/md";
import { BiVolumeMute } from "react-icons/bi";
import { FaAward } from "react-icons/fa";

export default function Body() {
  return (
    <>
      {/* Section 1 */}
      <div className="py-12 px-4 md:px-20">
        <div className="text-[#0d4927] flex flex-col md:flex-row items-center gap-6">
          {/* Image */}
          <img src={side} alt="" className="w-full md:w-[50%] rounded-3xl shadow-2xl" />
          {/* Text Content */}
          <div className="md:pl-10">
            <p className="text-2xl font-bold text-center md:text-left">
              บริการติดตั้งกระจกอลูมิเนียม
              เพิ่มความทันสมัยให้กับบ้านและอาคารของคุณ
            </p>
            <p className="text-start leading-relaxed pt-4">
              กระจกอลูมิเนียมเป็นวัสดุที่ได้รับความนิยมอย่างมากในงานก่อสร้างและตกแต่ง
              เนื่องจากมีคุณสมบัติที่โดดเด่น ทั้งในด้านความแข็งแรง ความทนทาน
              และการออกแบบที่ทันสมัย ซึ่งช่วยเสริมภาพลักษณ์ของบ้าน อาคารสำนักงาน
              หรือร้านค้าให้ดูโปร่งโล่ง หรูหรา และทันสมัยขึ้น
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="py-12 px-4 md:px-20">
        <div className="text-[#0d4927] text-lg flex flex-col-reverse md:flex-row items-center gap-6">
          {/* Text Content */}
          <div className="md:pr-10 w-full md:w-1/2">
            <p className="text-2xl font-bold pb-4 text-center md:text-left">
              ทำไมต้องเลือกเรา?
            </p>
            <div className="text-start leading-relaxed">
              ✨เชื่อถือได้ มีผลงานการติดตั้งมากมาย พร้อมรีวิวจากลูกค้าจริง{" "}
              <br />
              ✨ทีมช่างมืออาชีพ มีประสบการณ์และความชำนาญในการติดตั้งทุกประเภท{" "}
              <br />
              ✨มาตรฐานสูง ใช้วัสดุคุณภาพ รับรองความแข็งแรงและความปลอดภัย <br />
              ✨บริการหลังการขายที่ยอดเยี่ยม พร้อมให้คำปรึกษาตลอดอายุการใช้งาน
            </div>
          </div>
          {/* Image */}
          <img src={side} alt="" className="w-full md:w-[50%] rounded-3xl shadow-2xl" />
        </div>
      </div>

      {/* Section 3 - Feature Icons */}
      <div className="bg-[#0d4927] h-full flex items-center justify-center px-4 py-12 md:h-screen">
        <div className="text-white leading-relaxed grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col justify-center items-center text-center">
            <LuWarehouse size={60} />
            <span className="font-bold py-4 text-2xl">แข็งแรงและทนทาน</span>
            อลูมิเนียมเป็นวัสดุที่ไม่เป็นสนิมและสามารถทนต่อสภาพอากาศได้ดี
            เหมาะสำหรับการใช้งานทั้งภายในและภายนอก
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <MdOutlineEngineering size={60} />
            <span className="font-bold py-4 text-2xl">ดีไซน์ทันสมัย</span>
            กระจกอลูมิเนียมช่วยให้บ้านหรืออาคารของคุณดูโปร่งแสงและโมเดิร์น
            เพิ่มความสวยงามและสไตล์ที่เป็นเอกลักษณ์
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <BiVolumeMute size={60} />
            <span className="font-bold py-4 text-2xl">ลดเสียงรบกวน</span>
            กระจกอลูมิเนียมคุณภาพสูงสามารถช่วยลดเสียงรบกวนจากภายนอก
            ทำให้บรรยากาศภายในเงียบสงบมากขึ้น
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <FaAward size={60} />
            <span className="font-bold py-4 text-2xl">ดูแลรักษาง่าย</span>
            วัสดุอลูมิเนียมและกระจกสามารถทำความสะอาดได้ง่าย
            ไม่ต้องกังวลเรื่องเชื้อรา หรือการผุพังเหมือนไม้
          </div>
        </div>
      </div>
    </>
  );
}
