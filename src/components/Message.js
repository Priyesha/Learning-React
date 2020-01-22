import React from "react";

// using arrow function and named export
export const Message = ({greetMessage, name}) => {
 return ( 
  <div> 
 <h3>{greetMessage} {name}</h3>
 </div>
 )};
