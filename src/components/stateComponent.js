import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counterValue: 1,
    };
  }

  changeState() {
    // setState method is asynchronous

    // this.setState(
    //   {
    //     counterValue: this.state.counterValue + 1,
    //   },
    //   () =>
    //     console.log("value from callback method is", this.state.counterValue)
    // );

    // will give previous value of counter since setState is asynchronous
    // console.log("value after setState", this.state.counterValue);

    this.setState(prevState => ({
      counterValue: prevState.counterValue + 1
    }));
  }

  incrementTwice() {
      this.changeState();
      this.changeState();
  }

  render() {
    return (
      <div>
        <h1>My counter is {this.state.counterValue}</h1>
        <button onClick={() => this.incrementTwice()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
