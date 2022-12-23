import React from "react";

function AddedTime({ name, time }) {
  return (
    <div className="flex flex-row flex-wrap justify-between px-6 rounded-md py-2  gap-10 bg-indigo-50 mb-8">
      <div>
        <p className="font-medium text-base text-gray-500">{name} time</p>
      </div>
      <div>
        <p className="text-sm  text-gray-500">{time} seconds</p>
      </div>
    </div>
  );
}

export default AddedTime;
