import React from "react";
import SideBarBody from "../../Main/SideBar/SideBarBody/SideBarBody";

function Aside({
  width,
  closeSideMenu,
  time,
  breakTime,
  breakTimeCallBack,
  toast,
}) {
  return (
    <div
      style={width}
      className="duration-500 z-10 fixed top-0 left-0 overflow-hidden bg-cyan-600"
      aria-label="Sidebar"
      id="aside"
    >
      <div className="overflow-y-auto py-4 px-3 bg-gray-50  h-screen">
        <div className=" flex justify-end" onClick={closeSideMenu}>
          <i
            className="fa-solid fa-xmark p-1 text-black cursor-pointer"
            id="sidebar-cross"
          ></i>
        </div>

        <ul className="space-y-2 mt-5">
          <li className="mx-4">
            <SideBarBody
              time={time}
              breakTime={breakTime}
              breakTimeCallBack={breakTimeCallBack}
              toast={toast}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aside;
