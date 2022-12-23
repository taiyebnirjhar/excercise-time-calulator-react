import React from "react";
import Article from "./Article/Article";

function Blog() {
  return (
    <div className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-indigo-500 ">
            Our Blog
          </h2>
          <p className="font-light text-gray-500 sm:text-xl ">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <Article
            title={"How Does React Works"}
            para={
              'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. "V" denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.'
            }
            link={
              "https://www.geeksforgeeks.org/react-js-introduction-working/"
            }
          />

          <Article
            title={"Difference between props and state in React"}
            para={`Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.`}
            link={
              "https://www.geeksforgeeks.org/what-are-the-differences-between-props-and-state/"
            }
          />
          <Article
            title={"What does useEffect () hook do in React?"}
            para={`The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.`}
            link={"https://www.w3schools.com/react/react_useeffect.asp"}
          />
          <Article
            title={"Our first project with React"}
            para={
              "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers."
            }
            link={"#"}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
