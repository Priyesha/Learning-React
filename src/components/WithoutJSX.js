import React from "react";

const Hello = () => {
  return React.createElement(
    "div",
    { id: "hello", className: "helloClass" },
    "Text in parent tag without JSX",
    React.createElement("h2", null, "Text in children tag without JSX")
  );
};

export default Hello;
