import React from 'react';
import newStyle from './new.module.css';

function About(){
    const name = 'migrant solutions'
    return(
        <div>
            <h2 className={newStyle.main}>do you know this project on YouTube ? {name}</h2>
            <p className={newStyle.fill}>this is a tag</p>
        </div>
    )
}

export default About;  