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
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-[#004d21] flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <img
            src={side}
            alt="กระจกอลูมิเนียมตัวอย่างงานติดตั้ง"
            className="w-full md:w-1/2 rounded-3xl object-cover"
          />
          {/* Text */}
          <div className="md:pl-8 w-full md:w-1/2">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center md:text-left leading-tight">
              บริการติดตั้งกระจกอลูมิเนียม เพิ่มความทันสมัยให้กับบ้านและอาคารของคุณ
            </h2>
            <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-start">
              กระจกอลูมิเนียมเป็นวัสดุที่ได้รับความนิยมอย่างมากในงานก่อสร้างและตกแต่ง
              ด้วยความแข็งแรง ทนทาน และดีไซน์ที่ทันสมัย ช่วยเสริมภาพลักษณ์ของบ้าน
              อาคารสำนักงาน หรือร้านค้าให้โปร่งโล่ง หรูหรา และทันสมัยขึ้น
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto text-[#004d21] flex flex-col lg:flex-row items-center gap-8">
          {/* Image: บนในมือถือ / ขวาในเดสก์ท็อป */}
          <img
            src={side}
            alt="ตัวอย่างงานติดตั้งกระจกอลูมิเนียม"
            className="order-1 lg:order-2 w-full lg:w-1/2 rounded-3xl object-cover"
          />

          {/* Text: ล่างในมือถือ / ซ้ายในเดสก์ท็อป */}
          <div className="order-2 lg:order-1 w-full lg:w-1/2 lg:pr-8">
            <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl pb-4 text-center lg:text-left leading-tight">
              ทำไมต้องเลือกเรา?
            </h3>
            <div className="text-base sm:text-lg lg:text-xl leading-relaxed text-start space-y-2">
              <p>✨ เชื่อถือได้ มีผลงานการติดตั้งมากมาย พร้อมรีวิวจากลูกค้าจริง</p>
              <p>✨ ทีมช่างมืออาชีพ มีประสบการณ์และความชำนาญในการติดตั้งทุกประเภท</p>
              <p>✨ มาตรฐานสูง ใช้วัสดุคุณภาพ รับรองความแข็งแรงและความปลอดภัย</p>
              <p>✨ บริการหลังการขายที่ยอดเยี่ยม พร้อมให้คำปรึกษาตลอดอายุการใช้งาน</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Feature Icons */}
      <section className="bg-[#0d4927] py-12 px-4">
        <div className="max-w-7xl mx-auto text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <LuWarehouse size={60} aria-hidden />
            <span className="font-bold py-4 text-2xl sm:text-3xl lg:text-4xl leading-tight">
              แข็งแรงและทนทาน
            </span>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              อลูมิเนียมไม่เป็นสนิม ทนสภาพอากาศ เหมาะทั้งภายในและภายนอก
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <MdOutlineEngineering size={60} aria-hidden />
            <span className="font-bold py-4 text-2xl sm:text-3xl lg:text-4xl leading-tight">
              ดีไซน์ทันสมัย
            </span>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              ช่วยให้บ้านและอาคารดูโปร่ง โมเดิร์น มีเอกลักษณ์
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <BiVolumeMute size={60} aria-hidden />
            <span className="font-bold py-4 text-2xl sm:text-3xl lg:text-4xl leading-tight">
              ลดเสียงรบกวน
            </span>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              กระจกคุณภาพช่วยลดเสียงจากภายนอก เพิ่มความเงียบสงบ
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaAward size={60} aria-hidden />
            <span className="font-bold py-4 text-2xl sm:text-3xl lg:text-4xl leading-tight">
              ดูแลรักษาง่าย
            </span>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              ทำความสะอาดง่าย ไม่กังวลเชื้อรา หรือการผุพังเหมือนไม้
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
