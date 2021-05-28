import React from 'react';
import RemoveBtn from '../RemoveBtn/Remove';

import './todoItem.css';


const TodoItem =(props) =>{

   
    return(
        <li className="list">
            <span>{props.text}</span>
            <RemoveBtn/>
        </li>
    );
};


export default TodoItem;