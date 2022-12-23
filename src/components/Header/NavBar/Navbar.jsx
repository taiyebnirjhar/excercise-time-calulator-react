import React from "react";

function Navbar({ openSideMenu }) {
  return (
    <nav
      className="py-4 px-5 mx-4 md:px-7 xl:px-12 2xl:px-20 flex flex-wrap justify-between border-b-2 border-grey-800"
      id="navbar"
    >
      <div
        className="text-lg cursor-pointer font-custom md:flex md:flex-wrap mt-1"
        id="menu"
        onClick={openSideMenu}
      >
        <i className="fa-solid fa-bars mt-1"></i>
        <p className="px-5 hidden md:inline">MENU</p>
      </div>

      <div className="search-icon mt-1.5 cursor-pointer">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  );
}

export default Navbar;
