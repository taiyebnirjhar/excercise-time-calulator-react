import React from "react";
import MainContainer from "../MainContainer/MainContainer";
import SideBar from "../SideBar/SideBar";

function Main({ callBack, time, breakTime, breakTimeCallBack, toast }) {
  return (
    <div className="flex flex-row flex-wrap justify-center overflow-x-hidden">
      <MainContainer callBack={callBack} />
      <SideBar
        time={time}
        breakTime={breakTime}
        breakTimeCallBack={breakTimeCallBack}
        toast={toast}
      />
    </div>
  );
}

export default Main;
