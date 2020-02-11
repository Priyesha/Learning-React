import React from "react";
import "./styles.css";

function Stylesheets(props) {
  const className = props.isPrimary ? "primary" : "";
  return (
    <div>
       {/* with one class variable  */}
      <h2 className={className}>Priyesha</h2>

      {/* with multiple classnames */}
      <h6 className={`${className} font-xl`}>Ketan</h6>
    </div>
  );
}

export default Stylesheets;
