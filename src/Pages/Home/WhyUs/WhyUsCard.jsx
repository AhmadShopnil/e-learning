import React from "react";

const WhyUsCard = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-4 rounded-2xl   shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ">
      <div className="">
        <p className={`font-bold text-3xl ${data.color}  mt-16 ml-8`}>iCon</p>
      </div>
      <div></div>
      <div className="border-t-4 border-r-4 rounded-tr-2xl border-[#1C4547] h-20 "></div>
      {/* content div */}
      <div className="col-span-3 px-4 h-20  ml-3 ">
        <p className="font-semibold text-lg">{data.title}</p>
        <p className=" text-sm mt-2">{data.text}</p>
      </div>
      {/* content div end */}

      <div className="border-b-4 border-l-4 rounded-bl-2xl border-[#1C4547] h-20 "></div>
      <div className=""></div>
    </div>
  );
};

export default WhyUsCard;
