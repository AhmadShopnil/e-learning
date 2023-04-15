import React from "react";
import MyCoursesCard from "./MyCoursesCard";
import img1 from "../../assets/Images/js.png";
import img2 from "../../assets/Images/redux.png";
import img3 from "../../assets/Images/react.png";
import img4 from "../../assets/Images/next.jpg";

const MyCourses = () => {
  const myCourses = [
    { id: 1, title: "JavaScript", video: 15, duration: "20 Hours", img: img1 },
    { id: 2, title: "Redux", video: 8, duration: "10 Hours", img: img2 },
    { id: 3, title: "React Js", video: 20, duration: "25 Hours", img: img3 },
    { id: 4, title: "Next Js", video: 27, duration: "30 Hours", img: img4 },
  ];

  return (
    <div className="pt-20">
      <h2 className="text-center text-[#1C4547] mb-10 text-3xl font-bold">
        My Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4  md:px-16 lg:px-20">
        {myCourses?.map((myCourse) => (
          <MyCoursesCard key={myCourse?.id} myCourse={myCourse}></MyCoursesCard>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
