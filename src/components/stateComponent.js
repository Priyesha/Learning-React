import React, { Component } from 'react';

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counterValue: 1
        }
    }

    changeState() {
        this.setState({
            counterValue: this.state.counterValue + 1
        })
    }

    render() {
    return (
    <div>
    <h1>My counter is {this.state.counterValue}</h1>
    <button onClick={ () => this.changeState() }>Increment</button>
    </div>
    )}
} 

export default Counter
