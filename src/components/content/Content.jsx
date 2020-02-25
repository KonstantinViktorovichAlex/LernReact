import React from 'react';

import './content.css'
const Content = (props) => {

    const classes = ['input']
    
    if(!props.title){
        classes.push('input-red')
    }

    return(
        <div>
            <input type="text" name="inp" id="inp" 
            onChange = {props.handleChange} 
            value = {props.title}
            className = {classes.join(' ')}
            />
        </div>
    )
}
export default Content