import React from 'react';
import List from './List';

function ListRendering() {
    const array = [2,4,6,8];
    const arrayList = array.map((item, index) => <List key={index} index={index} item={item}/>);
    return (
        <div>
            {
                arrayList
            }
        </div>
    )
}

export default ListRendering;