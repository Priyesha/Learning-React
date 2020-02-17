import React, { Component } from "react";
import LifeCycleChild from "./LifeCycleChild";

class LifeCycleParent extends Component {
  constructor(props) {
    super(props);
    console.log("constructor called");
    this.state = {
      message: "Hello",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("static method called");
    return null;
  }

  componentDidMount() {
    console.log("component did mount called");
  }

  render() {
    console.log("render method called");
    return (
    <div>
        <h2>{this.state.message}</h2>
        <LifeCycleChild/>
        </div>
    )
  }
}

export default LifeCycleParent;
