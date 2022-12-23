import React, { useEffect, useState } from "react";
import Aside from "../Aside/Aside";
import Navbar from "../NavBar/Navbar";

function Header({ time, breakTime, breakTimeCallBack, toast }) {
  const [sidebar, setSideBar] = useState({ width: "0px" });

  useEffect(() => {}, [sidebar]);

  const openSideMenu = () => {
    setSideBar({ width: "20rem" });
  };
  const closeSideMenu = () => {
    setSideBar({ width: "0px" });
  };

  return (
    <div>
      <Navbar openSideMenu={openSideMenu} />
      <Aside
        closeSideMenu={closeSideMenu}
        width={sidebar}
        time={time}
        breakTime={breakTime}
        breakTimeCallBack={breakTimeCallBack}
        toast={toast}
      />
    </div>
  );
}

export default Header;
