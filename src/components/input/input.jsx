import React from 'react';

import './input.css'

const Input = () =>{
    return (
        <form className="form">
            <input className="form_input" type="text"  value="Add task"></input>
            <button className="form_Btn">Add</button>
        </form>
    );
};

export default Input;


// 1. take text from input  and add 
// 2. create task with this text
// 3. add created task to the list