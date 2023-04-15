import React from "react";

const CourseCard = ({ data }) => {
  const { img, title } = data || {};
  return (
    <div className="rounded-lg shadow-md bg-white h-52 cursor-pointer hover:origin-center hover:rotate-[12deg] transition duration-500 ">
      <div className="h-2/3 rounded-lg">
        <img className="w-full h-full rounded-t-lg" src={img} alt="" />
      </div>
      <div className="mb-6 ">
        <p className="text-center font-semibold mb-2">{title}</p>
        <p className="text-center text-xs font-semibold text-blue-400">
          Details
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
