import React from "react";
import { Link } from "react-router-dom";

const ProcessList = () => {
  const processList = [
    { id: 1, name: "Live Classes", link: "live" },
    { id: 2, name: "Recorded Video", link: "record" },
    { id: 3, name: "Live Support", link: "support" },
    { id: 4, name: "Quiz", link: "quiz" },
    { id: 5, name: "Leaderboard", link: "leaderboard" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 bg-white p-6 border-2 rounded-b-3xl md:rounded-lg">
      {processList?.map((process) => {
        return (
          <Link key={process?.id} to={`/process/${process?.link}`}>
            <div className="shadow-sm rounded-lg h-12 hover:shadow-lg hover:border-t-indigo-500 hover:border-2  cursor-pointer  transition-all duration-400 ">
              <p className="text-center font-semibold pt-2">{process?.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProcessList;
