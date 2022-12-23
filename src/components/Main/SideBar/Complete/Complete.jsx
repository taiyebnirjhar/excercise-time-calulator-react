import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Complete({ toast }) {
  return (
    <div className=" w-max my-10 mx-auto">
      <div
        onClick={toast}
        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-800  cursor-pointer  "
      >
        Activity Complete
      </div>
      <ToastContainer />
    </div>
  );
}

export default Complete;
