import React, {Component} from 'react';
import TestComponent from './testComponent';

class RemovingComponent extends Component {

    constructor() {
        super();
        this.state = {
            hide: true
        }
    }

    hideComponent = () => {
        this.setState({
            hide: false
        });
    }

    render() {
        return (
            <div>
              {this.state.hide && <TestComponent/>}  
             <button onClick={this.hideComponent}>Remove Component</button>
            </div>
        )
    }
}

export default RemovingComponent;