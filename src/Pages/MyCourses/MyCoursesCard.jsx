import React from "react";
import { Link } from "react-router-dom";

const MyCoursesCard = ({ myCourse }) => {
  const { title, video, duration, img } = myCourse || {};
  return (
    <div className="h-[230px] card card-side bg-base-100 shadow-xl p-4 md:p-8">
      <figure>
        <img className="h-full" src={img} alt="course" />
      </figure>
      <div className="card-body border-r-2 rounded-2xl">
        <h2 className="card-title">{title}</h2>
        <p className="text-xs ">{video} Videos</p>
        <p className="text-xs ">{duration}</p>
        <div className="card-actions justify-end mt-2">
          <Link to="/playCourse" className="btn btn-sm bg-[#1C4547] ">
            Countinue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCoursesCard;
