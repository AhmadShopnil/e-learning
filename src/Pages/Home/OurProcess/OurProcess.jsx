import React from "react";
import ProcessList from "./ProcessList";
import { Outlet } from "react-router-dom";

const OurProcess = () => {
  return (
    <div className="my-10  py-14 bg-[#1C4547] ">
      <h2 className="text-3xl font-bold text-center text-white">
        Our Learning process
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 ">
        <div className=" md:w-2/12  ">
          <ProcessList></ProcessList>
        </div>
        <div className=" md:w-7/12 bg-white shadow-lg rounded-lg ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
