import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetVideosQuery } from "../../../../features/videos/videosApi";
import { useGetVideoQuery } from "../../../../features/videos/videosApi";
import { useGetAssignmentQuery } from "../../../../features/assignment/assignmentApi";
import AssignmentModal from "./AssignmentModal.jsx";

const Content = () => {
  // const [modal, setModal] = useState(true)
  // const { user } = useSelector((state) => state?.auth);
  const { activeVideoId } = useSelector((state) => state.videos);

  const { data: video } = useGetVideoQuery(activeVideoId);
  const { title, description, url, createdAt } = video || {};

  const { data: assignment } = useGetAssignmentQuery(activeVideoId);

  // const [assignmentId, setAssignmentId] = useState();

  // useEffect(() => {
  //   assignment?.length > 0 && setAssignmentId(assignment[0]?.id);
  // }, [assignment]);

  // change date formate
  const date = new Date(createdAt);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  // isUser submit assignment
  // const isSubmit = useIsAssignmentSubmit(user?.id, assignmentId);

  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2 text-slate-700">
      <iframe
        width="100%"
        className="aspect-video"
        src={url}
        title="Things I wish I knew as a Junior Web Developer - Sumit Saha - BASIS SoftExpo 2023"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div>
        <h1 className="text-lg font-semibold tracking-tight text-slate-700 ">
          {title}
        </h1>
        <h2 className="text-slate-700 pb-4 text-sm leading-[1.7142857] ">
          Uploaded on {formattedDate}
        </h2>

        <div className="flex gap-4">
          {assignment?.length > 0 ? (
            <label
              htmlFor="my-modal-3"
              className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-black hover:text-white"
            >
              এসাইনমেন্ট
            </label>
          ) : (
            <span className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
              এসাইনমেন্ট নেই
            </span>
          )}
          {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}
          <Link
            to={`/quiz/${activeVideoId}`}
            className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
          >
            কুইজে অংশগ্রহণ করুন
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-700 leading-6">{description}</p>
      </div>

      <AssignmentModal></AssignmentModal>
    </div>
  );
};

export default Content;

{
  /* <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/XU0FYlY9_E0"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>; */
}
