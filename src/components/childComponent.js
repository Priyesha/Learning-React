import React from 'react';

function Child(props) {
    return  <button onClick={() => props.greetParent('child')}>Greet Parent</button>
}

export default Child;