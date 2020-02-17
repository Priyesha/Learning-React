import React, { Component } from "react";

class LifeCycleChild extends Component {
  constructor(props) {
    super(props);
    console.log("LifeCycleChild constructor called");
    this.state = {
      message: "Hello",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleChild static method called");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleChild component did mount called");
  }

  render() {
    console.log("LifeCycleChild render method called");
    return <div>{this.state.message}</div>;
  }
}

export default LifeCycleChild;
