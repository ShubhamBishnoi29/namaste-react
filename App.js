import React from "react";
import ReactDOM from "react-dom/client";

// React element
const jsxHeading = (
    <h1 id="heading" tabIndex="5">Namste react using JSX</h1>
);

const Title = () => (
    <h1 id="title" tabIndex="4">Namste react TITLE</h1>
);

// React Component
const HeadingComponent = () => {
    return (
        <div id="container">
            {jsxHeading}
            {/* We can call the function inside curly braces */}
            {Title()}  
            <h2 className="heading">Namste React Functional Component</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />)





// ======================= 1 and 2 epsiode =======================
// // Browser can not have imports and exports so above imports will give error
// // it can be sovled when you are importing it as module
// // form "<script src="./App.js"></script>" to "<script type="module" src="./App.js"></script>"

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     // React.createElement("h1", { id: "heading" }, "I am the h1 tag")
//     [
//         React.createElement("h1", { id: "heading" }, "I am the h1 tag"),
//         React.createElement("h2", { id: "heading-two" }, "I am the h2 tag")
//     ]
//   )
// );

// // const heading = React.createElement("h1", { id: "heading" }, "Hello world from react!!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



// JSX is not HTML in JS
// JSX ->  JSX is HTML-like or XML-like syntax

// JSX is transpiled before it reaches to JS - PARCEL - Babel(it is javascript complier)

// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTML(render)

// If you have to give attributes to JSX than you have to use "camelCase".

// React Component:-
// Class Based Component - OLD
// Functional Component - NEW

// React Functional Component -> It a normal JS function that return a JSX element
// JSX is a React element

// Component Composition -> One component into another component is component Composition


// inside {} in JSX you can write any JS expression


//Putting React element inside React component



// JSX helps you to prevent cross site scripting attack, suppose there is an api call and you
// are running it into the JSX, so JSX will sanatize the code and only than you can use it.