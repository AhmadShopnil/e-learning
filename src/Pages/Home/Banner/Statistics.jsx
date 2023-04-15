import React from "react";

const Statistics = ({ number, text, color }) => {
  return (
    <div className={`text-center font-semibold text-2xl py-6 ${color}`}>
      <h4>{number}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Statistics;
