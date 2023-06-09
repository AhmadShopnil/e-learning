import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const menuItems = (
    <>
      <li className="font-semibold mr-5">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold mr-5">
        <Link to="/myCourses">MyCourses</Link>
      </li>
      <li className="font-semibold mr-5">
        <Link to="/leaderBoard">Leaderboard</Link>
      </li>
      <li>
        <Link to="/blog" className="font-semibold mr-5">
          Blog
        </Link>
      </li>
    </>
  );

  return (
    <div id="navbar" className="navbar bg-[#181818] text-[#fff] fixed z-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-[#181818] bg-white"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="">
          <img src="" alt="" className="w-36 bg-transparent border-0" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
