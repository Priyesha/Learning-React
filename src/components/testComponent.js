import React, {Component} from 'react';

class TestComponent extends Component {
    render() {
        return (
            <div>
               <h2>Hide Me!!</h2> 
            </div>
        )
    }

    componentWillUnmount(){
        console.log('Test Component unMounted');
    }
} 

export default TestComponent;