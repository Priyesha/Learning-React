import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
    <div>
      <h4>Welcome!! This is first class component</h4>
      <h5>
        {this.props.greetMessage} {this.props.name}
      </h5>
      {this.props.children}
    </div>
    )};
}

export default Welcome;
