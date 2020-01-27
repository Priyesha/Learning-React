import React, {Component} from 'react';
class EventBinding extends Component {

    constructor() {
        super();
        this.state = {
            message: 'Button not clicked'
        }

        // this.clickHandler = this.clickHandler.bind(this);  // using bind in contructor
    }

    clickHandler = () => {
      this.setState({
          message: 'Button Clicked'
      });
    }
    
    render() {
        return (
        <div> 
        <span>{this.state.message}</span>
        <br></br>    
        {/* using bind method in render function*/}
        {/* <button onClick={this.clickHandler.bind(this)}>Event Binding Click</button> */}

        {/* using arrow function        */}
        {/* <button onClick={() => this.clickHandler()}>Event Binding Click</button> */}

        <button onClick={this.clickHandler}>Event Binding Click</button>
        </div>
        )
    }
}

export default EventBinding;