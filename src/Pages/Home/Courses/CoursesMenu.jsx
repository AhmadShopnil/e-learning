import React from "react";
import CoursesMenuCard from "./CoursesMenuCard.jsx";

const CousesMenu = () => {
  const menus = [
    { id: 1, name: "Wev Development", courses: "5" },
    { id: 2, name: "Graphics Design", courses: "8" },
    { id: 3, name: "Wev Development", courses: "10" },
    { id: 4, name: "Digital Marketing", courses: "3" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 h-28">
      {menus?.map((menu) => (
        <CoursesMenuCard key={menu.id} menu={menu}></CoursesMenuCard>
      ))}
    </div>
  );
};

export default CousesMenu;
