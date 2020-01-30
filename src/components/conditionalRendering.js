import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // if-else logic
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome user</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // element variable way
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = "Welcome user";
    // } else {
    //   message = "Welcome guest";
    // }

    // return <div>{message}</div>;

    //ternary operator
    // return this.state.isLoggedIn ? 
    // <div>Welcome user</div> :
    // <div>Welcome guest</div>

    //shorthand circuit operator
    return this.state.isLoggedIn && <div>Welcome user</div>
  }
}
export default ConditionalRendering;
