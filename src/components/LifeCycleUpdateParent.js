import React, { Component } from "react";
import LifeCycleChild from "./LifeCycleChild";

class LifeCycleUpdateParent extends Component {
  constructor(props) {
    super(props);
    console.log("LifeCycle parent update constructor called");
    this.state = {
      message: "Hello",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle parent update  static method called");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycle parent update  component did mount called");
  }

  changeHandle = () => {
      this.setState({
         message: 'How are you'
      });
  }
  render() {
    console.log("LifeCycle parent update  render method called");
    return (
    <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.changeHandle}>Click Me!</button>
        </div>
    )
  }

  componentDidUpdate() {
      console.log('lifecylce parent update Component did update called');
      
  }
}

export default LifeCycleUpdateParent;
