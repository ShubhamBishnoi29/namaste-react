import React from "react";
import ReactDOM from "react-dom/client";

// Browser can not have imports and exports so above imports will give error
// it can be sovled when you are importing it as module
// form "<script src="./App.js"></script>" to "<script type="module" src="./App.js"></script>"

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    // React.createElement("h1", { id: "heading" }, "I am the h1 tag")
    [
        React.createElement("h1", { id: "heading" }, "I am the h1 tag"),
        React.createElement("h2", { id: "heading-two" }, "I am the h2 tag")
    ]
  )
);

// const heading = React.createElement("h1", { id: "heading" }, "Hello world from react!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
