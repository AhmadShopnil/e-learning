import React from "react";
import Statistics from "../Banner/Statistics";
import TestimonialSlider from "./TestimonialSlider";
import TestimonialGrid from "./TestimonialGrid.jsx";

const Testimonial = () => {
  return (
    <div className="h-[400px] shadow-xl md:mx-28 rounded-xl py-10 px-6 md:px-20 relative mb-40 ">
      <div>
        <h2 className="text-center text-3xl font-bold">Our Success Stories</h2>
      </div>
      <div className="absolute w-full  right-0 top-[250px]   ">
        <div className=" mx-auto w-2/3 ">
          <TestimonialSlider></TestimonialSlider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
