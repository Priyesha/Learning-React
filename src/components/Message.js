import React from "react";

// using arrow function and named export
export const Message = (props) => {
 return ( 
  <div> 
 <h3>{props.greetMessage} {props.name}</h3>
 {props.children}
 </div>
 )};
