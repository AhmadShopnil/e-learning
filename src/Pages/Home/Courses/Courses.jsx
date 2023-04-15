import React from "react";
import CourseList from "./CourseList.jsx";
import CoursesMenu from "./CoursesMenu.jsx";
const Courses = () => {
  return (
    <div className="bg-[#1C4547] md:mx-28 rounded-xl py-20 px-6 md:px-20">
      <h2 className="text-center text-white text-2xl font-semibold mb-4">
        All Courses
      </h2>
      <CoursesMenu></CoursesMenu>
      <CourseList></CourseList>
    </div>
  );
};

export default Courses;
