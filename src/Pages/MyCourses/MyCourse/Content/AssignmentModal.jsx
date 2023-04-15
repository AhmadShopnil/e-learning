import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useSubmitAssignmentMutation } from "../../../../features/assignment/assignmentApi";

const AssignmentModal = ({ assignment }) => {
  const auth = useSelector((state) => state?.auth);
  const { user } = auth || {};
  const [repoLink, setRepoLink] = useState("Enter Your Repo Link");
  const [submitAssignment, { isLoading, isSuccess }] =
    useSubmitAssignmentMutation();

  const data = {
    student_id: user?.id,
    student_name: user?.name,
    assignment_id: assignment?.id,
    title: assignment?.title,
    createdAt: new Date().toISOString(),
    totalMark: 100,
    mark: 0,
    repo_link: repoLink,
    status: "pending",
  };

  const handleSubmitAssignment = (e) => {
    e.preventDefault();
    submitAssignment(data);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            onSubmit={handleSubmitAssignment}
            className="grid grid-cols-1 gap-4 my-4"
          >
            <span className="label-text">Enter Your Repo Link</span>
            <input
              value={repoLink}
              onChange={(e) => setRepoLink(e.target.value)}
              name="address"
              type="text"
              className="input input-bordered input-primary w-full text-black"
            />

            <input
              className="btn btn-primary bg-primary w-full  mt-8 "
              type="submit"
              value="Submit Assignment"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignmentModal;
