import React from "react";
import { useDispatch } from "react-redux";
import { setActiveVideo } from "../../../../features/videos/videosSlice";

const Module = ({ moduleInfo }) => {
  const { id, title, views, duration } = moduleInfo || {};
  const dispatch = useDispatch();

  const handlePlayVideo = () => {
    dispatch(setActiveVideo(id));
  };

  return (
    <div
      onClick={handlePlayVideo}
      className="w-full flex flex-row gap-2 cursor-pointer hover:bg-[#1C4547] p-2 text-black hover:text-white"
    >
      {/* <!-- Thumbnail --> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
        />
      </svg>
      {/* <!-- Description --> */}
      <div clas="flex flex-col w-full">
        <p className=" text-sm font-medium">{title}</p>
        <div>
          <span className=" text-xs mt-1">{duration} Mins</span>
          <span className=" text-xs mt-1"> | </span>
          <span className=" text-xs mt-1">{views} views</span>
        </div>
      </div>
    </div>
  );
};

export default Module;
