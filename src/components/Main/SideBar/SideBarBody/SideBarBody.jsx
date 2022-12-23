import React from "react";
import AddedTime from "../AddedTime/AddedTime";
import BreakTime from "../BreakTime/BreakTime";
import Complete from "../Complete/Complete";
import PersonalInfo from "../PersonalInfro/PersonalInfo";
import Profile from "../Profile/Profile";

function SideBarBody({ breakTimeCallBack, time, breakTime, toast }) {
  return (
    <>
      <Profile />
      <PersonalInfo />
      <div className="text-lg  my-4 ">
        <p className="p-2 font-bold text-gray-500">Add A Break</p>
      </div>
      {/* -------- */}
      <BreakTime callBack={breakTimeCallBack} />
      <div className="text-lg  my-4 ">
        <p className="p-2 font-bold text-gray-500">Exercise Details</p>
      </div>
      <AddedTime name={"Exercise"} time={time} />
      {/* --------- */}
      <AddedTime name={"Break"} time={breakTime} />
      <Complete toast={toast} />
    </>
  );
}

export default SideBarBody;
