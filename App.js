// React.createElement => ReactELement-JS Object => HTMLElement(render)
import React from "react";
import ReactDOM from "react-dom";

// const heading = React.createElement(
//     "h1",
//     { id: "heading "},
//     "Namaste React"  
// );
// console.log(heading);
//JSX (transpiled before it reaches the JS) -PARCEL-Babel
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render);
//jsx - HTML-like or XML-like syntax
const jsxHeading = <h1 id="heading"> Namaste react using JSX </h1>
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
