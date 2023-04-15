import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../../assets/Images/5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import CourseCard from "./CourseCard";
import img1 from "../../../assets/Images/1.jpg";
import img2 from "../../../assets/Images/2.jpg";
import img3 from "../../../assets/Images/3.jpg";
import img4 from "../../../assets/Images/4.jpg";

const CourseList = () => {
  const AllCourses = [
    {
      id: 1,
      title: "Redux Advance",
      img: img1,
    },
    {
      id: 2,
      title: "React Crash Course",
      img: img2,
    },
    {
      id: 3,
      title: "JavaScript Zero To Hero",
      img: img3,
    },
    {
      id: 4,
      title: "Next Js",
      img: img4,
    },
    {
      id: 5,
      title: "Node Js",
      img: img2,
    },
  ];

  return (
    <div className="mt-28 md:mt-4">
      <Swiper
        breakpoints={{
          364: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          568: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1264: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {AllCourses?.map((data) => (
          <SwiperSlide key={data?.id}>
            <CourseCard data={data}></CourseCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CourseList;
