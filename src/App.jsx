import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header/Header";
import Main from "./components/Main/Main/Main";
function App() {
  /*states*/
  const [time, setTime] = useState(0);

  const [breakTime, setBreakTime] = useState(0);

  /*****************************/
  /***Click Handlers****/

  /**excerciseTime**/
  const excerciseTimeClickHandler = (addedtime) => {
    const excerciseTime = parseInt(addedtime.slice(0, addedtime.length - 1));
    setTime((prev) => {
      return prev + excerciseTime;
    });
  };

  /**breakTime**/
  const breakTimeClickHandler = (e) => {
    const breakTime = parseInt(
      e.target.innerText.slice(0, e.target.innerText.length - 1)
    );

    setBreakTime(() => {
      localStorage.setItem("breakTime", breakTime);
      return breakTime;
    });
  };

  /*Toast*/
  const toastify = () => {
    if (time < 1) {
      toast.error("First select some excercise", {
        position: "top-center",
      });
    } else {
      toast.success("Congratulations, Bhoi will proud of you 🚗", {
        position: "top-center",
      });
    }
  };

  /*effect*/
  /*****************************/

  // /*****************************/

  useEffect(() => {
    setBreakTime(parseInt(localStorage.getItem("breakTime")));
  }, [breakTime]);

  return (
    <div>
      <Header
        time={time}
        breakTime={breakTime}
        breakTimeCallBack={breakTimeClickHandler}
        toast={toastify}
      />
      <Main
        time={time}
        breakTime={breakTime}
        callBack={excerciseTimeClickHandler}
        breakTimeCallBack={breakTimeClickHandler}
        toast={toastify}
      />
      <Blog />
    </div>
  );
}

export default App;
