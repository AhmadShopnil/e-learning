import React from "react";
import Content from "./Content/Content.jsx";
import ModulesList from "./ModuleList/ModulesList.jsx";

const MyCourse = () => {
  return (
    <section className="pt-20 pb-6 bg-[#ffff] text-black">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <Content></Content>
          <ModulesList></ModulesList>
        </div>
      </div>
    </section>
  );
};

export default MyCourse;
