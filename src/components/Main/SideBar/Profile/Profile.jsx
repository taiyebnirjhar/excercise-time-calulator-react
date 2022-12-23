import React from "react";
import HeadShot from "./img/HeadShot.jpeg";

function Profile() {
  return (
    <div className="flex flex-row gap-3  my-5 ">
      <img
        className="mb-3 w-10 h-10 rounded-full shadow-lg"
        src={HeadShot}
        alt="Bonnie image"
      />
      <div className="flex flex-col">
        <h5 className="mb-1 text-xl font-bold text-gray-500 ">
          Taiyeb Nirjhor
        </h5>
        <small className="opacity-50">
          <i className="fa-solid fa-location-dot mr-1"></i> Dhaka, Bangladesh
        </small>
      </div>
    </div>
  );
}

export default Profile;
