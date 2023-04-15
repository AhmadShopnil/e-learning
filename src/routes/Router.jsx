import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import LiveClass from "../Pages/Home/OurProcess/Process/LiveClass.jsx";
import Recorded from "../Pages/Home/OurProcess/Process/Recorded.jsx";
import SupportProcess from "../Pages/Home/OurProcess/Process/SupportProcess.jsx";
import LeaderboardProcess from "../Pages/Home/OurProcess/Process/LeaderboardProcess.jsx";
import QuizProcess from "../Pages/Home/OurProcess/Process/QuizProcess.jsx";
import MyCourses from "../Pages/MyCourses/MyCourses.jsx";
import UserLayout from "../Layout/UserLayout.jsx";
import LeaderBoard from "../Pages/LeaderBoard/LeaderBoard.jsx";
import MyCourse from "../Pages/MyCourses/MyCourse/MyCourse.jsx";
// import Home from "../Pages/Home/Home.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout></UserLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <LiveClass></LiveClass>,
          },
          {
            path: "/process/live",
            element: <LiveClass></LiveClass>,
          },
          {
            path: "/process/record",
            element: <Recorded></Recorded>,
          },
          {
            path: "process/support",
            element: <SupportProcess></SupportProcess>,
          },

          {
            path: "process/leaderboard",
            element: <LeaderboardProcess></LeaderboardProcess>,
          },
          {
            path: "process/quiz",
            element: <QuizProcess></QuizProcess>,
          },
        ],
      },
      {
        path: "/myCourses",
        element: <MyCourses></MyCourses>,
      },
      {
        path: "/playCourse",
        element: <MyCourse></MyCourse>,
      },
      {
        path: "/leaderBoard",
        element: <LeaderBoard></LeaderBoard>,
      },
    ],
  },
]);

children: [
  {
    path: "/",
    element: <LiveClass></LiveClass>,
  },
  {
    path: "/process/live",
    element: <LiveClass></LiveClass>,
  },
  {
    path: "/process/record",
    element: <Recorded></Recorded>,
  },
  {
    path: "process/support",
    element: <SupportProcess></SupportProcess>,
  },

  {
    path: "process/leaderboard",
    element: <LeaderboardProcess></LeaderboardProcess>,
  },
  {
    path: "process/quiz",
    element: <QuizProcess></QuizProcess>,
  },
];
