import React from "react";

const Stats = () => {
  return (
    <div className="flex justify-center bg-gray-50 ">
      <div className="stats bg-gray-50 rounded-none border-none">
        <div className="stat">
          <div className="stat-title">Downloads</div>
          <div className="stat-value text-gray-600">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Users</div>
          <div className="stat-value  text-gray-600">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title ">New Registers</div>
          <div className="stat-value  text-gray-600">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
