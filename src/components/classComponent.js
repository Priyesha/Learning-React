import React, { Component } from "react";

class Welcome extends Component {
  render() {
    //destructuring in class component
    const {greetMessage, name} = this.props;
    return (
    <div>
      <h4>Welcome!! This is first class component</h4>
      <h5>
        {greetMessage} {name}
      </h5>
      {this.props.children}
    </div>
    )};
}

export default Welcome;
