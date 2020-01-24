import React, {Component} from 'react';

class EventHandlingClass extends Component {
   mouseHovered() {
       console.log('Mouse hovered over');
   }

   render() {
    return <button onMouseEnter={this.mouseHovered}>Hover from Class Component</button>
   }
}

export default EventHandlingClass