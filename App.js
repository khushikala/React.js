import React from "react";
import ReactDOM from "react-dom/client";

// Hello world using react.js (PLAIN REACT)
// const plainHeading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from react!"
// );
// console.log(plainHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(plainHeading);

//JSX
// const heading = (
//   <h1 id="heading" className="head" tabIndex="1">
//     Hello world from jsx
//   </h1>
// );

// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/*
NESTED STRUCTURE IN REACT
<div id="parent">
    <div id="child">
        <h1>I'm H1 tag</h1>
        <h2>I'm H2 tag</h2>
    </div>
</div>

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm H1 tag"),
    React.createElement("h2", {}, "I'm H2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
*/

/*
<div id="parent">
    <div id="child1">
        <h1>I'm H1 tag</h1>
        <h2>I'm H2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm H1 tag</h1>
        <h2>I'm H2 tag</h2>
    </div>
</div>

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "H1 tag"),
    React.createElement("h2", {}, "I'm H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm H1 tag"),
    React.createElement("h2", {}, "I'm H2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

// React Functional Component
const HeadingComponent = () => {
  return <h1 className="heading">This is functional component 1</h1>;
};

const Title = () => (
  <h1 className="head" tabIndex="1">
    Hello there!
  </h1>
);

const elem = <span>This is react element!!!</span>;

const title = (
  <h1 className="title" tabIndex="1">
    {elem}
    Hey this is title react element
  </h1>
);

const number = 100000;
//Component Composition
const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}

    <h2>{number}</h2>
    {10 + 20}
    {title}

    <h1 className="heading">This is functional component 2</h1>
  </div>
);

// root.render(<HeadingComponent2 />);

// Nested structure ASSIGNMENT
const header1 = React.createElement("div", { id: "tittle" }, [
  React.createElement("h1", {}, [
    React.createElement("h2", {}, [React.createElement("h3", {}, "Hellooo")]),
  ]),
]);

const jsxHeader1 = (
  <div id="title">
    <h1>
      <h2>
        <h3>"HEYYYYYY"</h3>
      </h2>
    </h1>
  </div>
);

const HeaderComponent = () => {
  return (
    <div id="title">
      <h1>
        <h2>
          <h3>With header component</h3>
        </h2>
      </h1>
    </div>
  );
};
root.render(<HeaderComponent />);
// root.render(jsxHeader1);
