import React from 'react';

import TodoItem from '../todoItem/todoItem'

import '../todoList/todoList.css'




const TodoList = ( {arrItems} ) => {   
    return (
        <ul className="todList">
            {arrItems.map(item => <TodoItem text={item.text} key={item.id} arr={arrItems}/>)}
        </ul>
    )
};
    
export default TodoList;