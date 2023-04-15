import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="rounded-t-[30px] footer p-10 bg-[#1C4547] text-white mt-10">
        <div>
          {/* <img src={logo} alt="logo" className="w-40" /> */}
          <p className="text-2xl font-bold text-pink-400">E-Learning</p>
          <p className="font-semibold text-md">
            Best online learning platform.
          </p>
        </div>
        <div>
          <span className="footer-title text-[#5966FF] opacity-100">
            Services
          </span>
          <a className="link link-hover">Live Class</a>
          <a className="link link-hover">Support</a>
          <a className="link link-hover">Enroll</a>
        </div>
        <div>
          <span className="footer-title text-[#5966FF] opacity-100">Pages</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <Link to={"/blog"} className="link link-hover">
            Blog
          </Link>
        </div>
        <div>
          <span className="footer-title text-[#5966FF] opacity-100">Legal</span>
          <Link to="/terms" className="link link-hover">
            Terms of use
          </Link>
          <Link to={"/cookie"} className="link link-hover">
            Cookie Policy
          </Link>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-[#1C4547] text-base-content">
        <div>
          <p className="text-[#FFF] font-light">
            Copyright © 2023 - All right reserved by E-Learning team.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
