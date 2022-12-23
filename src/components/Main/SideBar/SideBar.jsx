import React from "react";

import SideBarBody from "./SideBarBody/SideBarBody";
function SideBar({ time, breakTime, breakTimeCallBack, toast }) {
  return (
    <div className="w-1/5 mt-10 mx-10 " id="sidebar">
      <div className="w-max  rounded-lg border border-gray-200 shadow-md bg-white ">
        <SideBarBody
          time={time}
          breakTime={breakTime}
          breakTimeCallBack={breakTimeCallBack}
          toast={toast}
        />
      </div>
    </div>
  );
}

export default SideBar;
