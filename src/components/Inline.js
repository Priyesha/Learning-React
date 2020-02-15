import React from "react";

const heading = {
  fontSize: "56px",
  color: "orange",
};

function Inline(props) {
  return (
    <div>
      <h2 className="success">Success from parent component</h2>
      <h2 style={heading}>Inline</h2>

      <h3 className={props.styles.error}>Error</h3>

    </div>
  );
}

export default Inline;