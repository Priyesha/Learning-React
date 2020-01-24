import React from 'react';

function EventHandlingFunctional() {
    
    function clicked() {
        console.log('Functional Button Clicked');
    }

    return <button onClick={clicked}>Click Functional Button</button>
}

export default EventHandlingFunctional