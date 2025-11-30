import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./styles.css";
import F from "../../src/assets/F.png";
import G from "../../src/assets/G.png";
import H from "../../src/assets/H.png";
import I from "../../src/assets/I.png";
import J from "../../src/assets/J.png";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function ImgSlide() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={F} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={G} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={H} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={I} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={J} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
