import React, {Component} from 'react';
import Child from './childComponent';

class Parent extends Component {

    // function greetMe() {
    //     return 'Parents Greeted';
    // };
    constructor() {
      super();
      this.state = {
          parentName: 'Parent'
      }
      
    //   this.greetParent = this.greetParent.bind(this);
    }

    greetParent = (childName) => {
        console.log(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
             <Child greetParent={this.greetParent}></Child>
            </div>
        )
    }
}

export default Parent;