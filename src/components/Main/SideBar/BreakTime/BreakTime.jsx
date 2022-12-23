import React from "react";

function BreakTime({ callBack }) {
  return (
    <div
      id="breakTime"
      className="flex flex-row flex-wrap justify-center px-6 rounded-md py-2  gap-10 bg-indigo-50 mb-8 text-gray-500"
    >
      <div
        onClick={callBack}
        className="cursor-pointer rounded-full bg-indigo-100"
      >
        <p className="text-xs  p-2.5">20s</p>
      </div>

      <div
        onClick={callBack}
        className=" cursor-pointer rounded-full  bg-indigo-100"
      >
        <p className="text-xs  p-2.5">30s</p>
      </div>

      <div
        onClick={callBack}
        className="cursor-pointer rounded-full  bg-indigo-100"
      >
        <p className="text-xs  p-2.5">40s</p>
      </div>

      <div
        onClick={callBack}
        className="cursor-pointer rounded-full  bg-indigo-100"
      >
        <p className="text-xs  p-2.5">60s</p>
      </div>
    </div>
  );
}

export default BreakTime;
