import React from 'react';
import './index.css';

function Item(props){
    return(
        <div>
            <img className='my-image' src={props.image}/>
            <h4>{props.name}</h4>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Item