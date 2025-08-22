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
        <div className="text-[#004d21] flex flex-col md:flex-row items-center gap-6">
          {/* Image */}
          <img src={side} alt="" className="w-full md:w-[50%] rounded-3xl" />
          {/* Text Content */}
          <div className="md:pl-10">
            <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center md:text-left">
              บริการติดตั้งกระจกอลูมิเนียม
              เพิ่มความทันสมัยให้กับบ้านและอาคารของคุณ
            </p>
            <p className="leading-relaxed pt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-start">
              กระจกอลูมิเนียมเป็นวัสดุที่ได้รับความนิยมอย่างมากในงานก่อสร้างและตกแต่ง
              เนื่องจากมีคุณสมบัติที่โดดเด่น ทั้งในด้านความแข็งแรง ความทนทาน
              และการออกแบบที่ทันสมัย ซึ่งช่วยเสริมภาพลักษณ์ของบ้าน อาคารสำนักงาน
              หรือร้านค้าให้ดูโปร่งโล่ง หรูหรา และทันสมัยขึ้น
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="py-12 px-4 lg:px-20">
        <div className="text-[#004d21] flex flex-col lg:flex-row items-center gap-6">
          {/* Image - อยู่บน (mobile) และขวา (desktop) */}
          <img src={side} alt="" className="w-full lg:w-[50%] rounded-3xl" />

          {/* Text Content */}
          <div className="lg:pr-10 w-full lg:w-1/2">
            <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-4 text-center lg:text-left">
              ทำไมต้องเลือกเรา?
            </p>
            <div className="leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl text-start">
              ✨เชื่อถือได้ มีผลงานการติดตั้งมากมาย พร้อมรีวิวจากลูกค้าจริง{" "}
              <br />
              ✨ทีมช่างมืออาชีพ มีประสบการณ์และความชำนาญในการติดตั้งทุกประเภท{" "}
              <br />
              ✨มาตรฐานสูง ใช้วัสดุคุณภาพ รับรองความแข็งแรงและความปลอดภัย <br />
              ✨บริการหลังการขายที่ยอดเยี่ยม <br />
              พร้อมให้คำปรึกษาลูกค้าตลอดอายุการใช้งาน
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - Feature Icons */}
      <div className="bg-[#0d4927] py-12 px-4">
        <div className="text-white leading-relaxed grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col justify-center items-center text-center">
            <LuWarehouse size={60} />
            <span className="font-bold py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              แข็งแรงและทนทาน
            </span>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              อลูมิเนียมเป็นวัสดุที่ไม่เป็นสนิมและสามารถทนต่อสภาพอากาศได้ดี
              เหมาะสำหรับการใช้งานทั้งภายในและภายนอก
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <MdOutlineEngineering size={60} />
            <span className="font-bold py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              ดีไซน์ทันสมัย
            </span>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              กระจกอลูมิเนียมช่วยให้บ้านหรืออาคารของคุณดูโปร่งแสงและโมเดิร์น
              เพิ่มความสวยงามและสไตล์ที่เป็นเอกลักษณ์
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <BiVolumeMute size={60} />
            <span className="font-bold py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              ลดเสียงรบกวน
            </span>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              กระจกอลูมิเนียมคุณภาพสูงสามารถช่วยลดเสียงรบกวนจากภายนอก
              ทำให้บรรยากาศภายในเงียบสงบมากขึ้น
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <FaAward size={60} />
            <span className="font-bold py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              ดูแลรักษาง่าย
            </span>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              วัสดุอลูมิเนียมและกระจกสามารถทำความสะอาดได้ง่าย
              ไม่ต้องกังวลเรื่องเชื้อรา หรือการผุพังเหมือนไม้
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
