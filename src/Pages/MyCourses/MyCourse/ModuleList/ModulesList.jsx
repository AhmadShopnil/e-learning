import React from "react";
import Module from "./Module.jsx";
import { useGetVideosQuery } from "../../../../features/videos/videosApi.jsx";
import { Link } from "react-router-dom";

const ModulesList = () => {
  const { data: modules, isSuccess, isError, isLoading } = useGetVideosQuery();

  let content = null;
  if (isLoading) {
    content = <p>Loading</p>;
  }
  if (isError) {
    content = <p>Something Wrong</p>;
  }
  if (isSuccess && modules?.length) {
    content = modules?.map((module) => (
      <Module key={module?.id} moduleInfo={module}></Module>
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-[#ffff] p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30 text-black ">
      <div className="w-full flex flex-row gap-2 cursor-pointer hover:bg-[#1C4547] p-2 py-3 hover:text-white">
        {/* <!-- Thumbnail --> */}
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 "
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
        <div class="flex flex-col w-full ">
          <Link>
            <p className=" text-sm font-medium">
              Things I wish I knew as a Junior Web Developer - Jhankar Mahbub-
              BASIS 2023
            </p>
          </Link>
          <div>
            <span className=" text-xs mt-1">17.5 Mins</span>
            <span className="text-xs mt-1"> | </span>
            <span className=" text-xs mt-1">50K views</span>
          </div>
        </div>
      </div>
      {content}
    </div>
  );
};

export default ModulesList;
