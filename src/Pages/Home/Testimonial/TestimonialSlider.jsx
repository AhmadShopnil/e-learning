import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../../assets/Images/5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./TestimonialSlider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const sliderAllData = [
  {
    id: 1,
    name: "Shopnil",
    text: "Very Good Course",
    img: "https://ekcfbmsotzc.exactdn.com/en/blog/wp-content/uploads/2022/09/epl-cristiano-ronaldo-manchester-united-betmgm.jpg?strip=all&lossy=1&ssl=1",
  },
  {
    id: 1,
    name: "Ahmad",
    text: "Very Good Course",
    img: "https://ekcfbmsotzc.exactdn.com/en/blog/wp-content/uploads/2022/09/epl-cristiano-ronaldo-manchester-united-betmgm.jpg?strip=all&lossy=1&ssl=1",
  },
  {
    id: 1,
    name: "Mehedi Hasan",
    text: "Very Good Course",
    img: "https://ekcfbmsotzc.exactdn.com/en/blog/wp-content/uploads/2022/09/epl-cristiano-ronaldo-manchester-united-betmgm.jpg?strip=all&lossy=1&ssl=1",
  },
];

const TestimonialSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderAllData?.map((data) => (
          <SwiperSlide
            key={data?.id}
            className=" grid grid-cols-1 md:grid-cols-2  bg-[#1C4547] text-white rounded-lg "
          >
            <div className="m-auto py-3">
              <p className="text-md font-semibold">{data.name}</p>
              <p className="text-xs">{data.text}</p>
            </div>
            <div className=" ">
              <img className="rounded-lg h-full w-full" src={img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
