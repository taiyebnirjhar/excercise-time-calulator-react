import React from "react";

function Card({ title, para, time, img, callBack }) {
  return (
    <div className="card">
      <div
        className=" w-56 h-max bg-white rounded-lg border border-gray-200 shadow-md 
    "
      >
        <a href="#">
          <img className="rounded-t-lg" src={img} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-base font-bold tracking-tight text-gray-500 ">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-600 text-xs opacity-80">
            {para.length > 180 ? para.slice(0, 150) + "..." : para}
          </p>
          <p className="mb-3 font-semibold text-gray-600 text-xs opacity-80">
            Age: <span className="font-normal"> 18 - 30</span>
          </p>
          <p className="mb-3 font-semibold text-gray-600 text-xs opacity-80">
            Time Requires: <span className="font-normal"> {time}</span>
          </p>
          <div
            onClick={() => {
              callBack(time);
            }}
            className="inline-flex items-center py-2 px-3 text-sm xl:text-xs font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-800 cursor-pointer"
          >
            Add To List
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
