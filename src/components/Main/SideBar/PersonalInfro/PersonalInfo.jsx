import React from "react";

function PersonalInfo() {
  return (
    <div
      id="personalInfo"
      className="flex flex-row justify-center px-6 rounded-md py-2  gap-10 bg-indigo-50"
    >
      <div className="flex flex-col text-gray-500 ">
        <p className="font-bold text-base ">
          75 <span className="text-xs font-extralight">kg</span>
        </p>
        <p className=" text-sm">Weight</p>
      </div>

      <div className="flex flex-col text-gray-500">
        <p className="font-bold text-base">
          5.10 <span className="text-xs font-extralight">ft</span>
        </p>
        <p className=" text-sm">Height</p>
      </div>

      <div className="flex flex-col text-gray-500">
        <p className="font-bold text-base">
          23 <span className="text-xs font-extralight">yr</span>
        </p>
        <p className=" text-sm">Age</p>
      </div>
    </div>
  );
}

export default PersonalInfo;
