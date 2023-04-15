import React from "react";
import bannerImg from "../../../assets/Images/banner.jpg";
import Statistics from "./Statistics.jsx";
const Banner = () => {
  return (
    <div className=" grid grid-cols-1 items-center relative mb-40 md:mb-20">
      <div className="mt-6 bg-[#1C4547] h-[500px] w-full grid grid-cols-1 md:grid-cols-2 text-white items-center gap-20 p-4 md:p-16 ">
        <div className="text-justify grid grid-cols-1 gap-6">
          <h1 className="text-4xl font-bold ">Learning is more easy now</h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            aspernatur <br /> voluptate, asperiores ex, voluptas sapiente dicta
            nesciunt.
          </p>
          <div className="flex gap-3 text-sm ">
            <button className="btn bg-pink-400 rounded-lg py-2 px-4 hover:bg-blue-400">
              Continue Learning
            </button>
            <button className="btn  bg-white rounded-lg py-2 px-4 text-black hover:text-pink-600">
              Contact Us
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <div className="animate-bounce  gap-4 w-full h-20 absolute  top-[450px]">
        <div className="w-2/3  bg-white rounded-xl border-2 mx-auto grid grid-cols-2 md:grid-cols-4 items-center">
          <Statistics
            number={"2K"}
            text={"Users"}
            color={"text-red-400"}
          ></Statistics>
          <Statistics
            number={"40+"}
            text={"Videos"}
            color={"text-gray-400"}
          ></Statistics>
          <Statistics
            number={"10+"}
            text={"Courses"}
            color={"text-green-400"}
          ></Statistics>
          <Statistics
            number={"5+"}
            text={"Teachers"}
            color={"text-blue-400"}
          ></Statistics>
        </div>
      </div>
    </div>
  );
};

export default Banner;
