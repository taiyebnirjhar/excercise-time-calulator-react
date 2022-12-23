import React from "react";
import Container from "./Container/Container";

function MainContainer(props) {
  return (
    <div className="w-3/5 mt-10 " id="maincontainer">
      <Container callBack={props.callBack} />
    </div>
  );
}

export default MainContainer;
