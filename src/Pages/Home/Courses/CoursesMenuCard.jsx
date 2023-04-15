import React from "react";

const CoursesMenuCard = ({ menu }) => {
  const { name, courses } = menu || {};
  return (
    <div className="bg-white px-4 py-4 rounded-md text-gray-400 hover:border-teal-400 hover:border-2 h-20 transition-all hover:bg-gray-200 cursor-pointer ">
      <h4 className="text-gray-700 font-semibold">{name}</h4>
      <p className="text-xs font-semibold">Courses- {courses}</p>
    </div>
  );
};

export default CoursesMenuCard;
