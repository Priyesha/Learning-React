import React from 'react';

function ListRendering() {
    const array = [2,4,6,8];
    return (
        <div>
            {
                array.map(item => <h2>{item}</h2>)
            }
        </div>
    )
}

export default ListRendering;