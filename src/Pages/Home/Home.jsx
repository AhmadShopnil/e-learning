import React from "react";
import Banner from "./Banner/Banner.jsx";
import WhyUs from "./WhyUs/WhyUs.jsx";
import Courses from "./Courses/Courses.jsx";
import OurProcess from "./OurProcess/OurProcess.jsx";
import Testimonial from "./Testimonial/Testimonial.jsx";
import Navbar from "../../Shared/Navbar/Navbar.jsx";
import Footer from "../../Shared/Footer/Footer.jsx";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-4 ">
      <Banner></Banner>
      <Courses></Courses>
      <WhyUs></WhyUs>
      <OurProcess></OurProcess>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
