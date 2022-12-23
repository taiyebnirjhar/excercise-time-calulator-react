import React, { useEffect, useState } from "react";
import Card from "./Card/Card";

function Container({ callBack }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="w-10/12 my-0 mx-auto" id="container">
      <div className="my-8 mx-12 " id="logo">
        <h2 className="text-3xl font-bold text-indigo-500 tracking-tight opacity-90 ">
          <i className="fa-solid fa-dumbbell"></i> MAA-ER DUA GYM
        </h2>

        <p className="opacity-80 my-4 text-lg text-gray-500">
          Select today's exercise
        </p>
      </div>

      <div className="card-container ">
        <div className="cards flex flex-wrap justify-center gap-10 xl:gap-8 lg:gap-6">
          {data.map((item) => (
            <Card
              img={item.img}
              title={item.title}
              para={item.paragraph}
              time={item.time}
              callBack={callBack}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Container;
