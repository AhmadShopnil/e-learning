import React from "react";
import WhyUsCard from "./WhyUsCard";

const WhyUs = () => {
  const allData = [
    {
      id: 1,
      title: "24/7 Support",
      text: "We have strong support team. we provide 3 times in a day support system.",
      color: "text-red-400",
    },
    {
      id: 2,
      title: "Live Class",
      text: "We take 3 live class in a week. Our student can ask directly question to us.",
      color: "text-green-400",
    },
    {
      id: 3,
      title: "Job Placement Support",
      text: "After finishing the course. we help our student to get job.",
      color: "text-blue-400",
    },
  ];

  return (
    <div className="text-black mt-10 md:mt-20 md:mb-20   ">
      <h2 className="text-center text-3xl font-bold mb-8">
        Reasons To Chose Us
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-8 px-8 md:px-20">
        {allData?.map((data) => (
          <WhyUsCard key={data?.id} data={data}></WhyUsCard>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
