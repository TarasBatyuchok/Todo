import React from 'react'

import Headre from './HeaderTodo/HeaderTodoList'
import ListItem from './ListItem/ListItem'
import FormForAddList from "./FormForAddList/FormForAddLIst";



import classes from "./TodoList.module.css"




const TodoListContainer = ()=>{


    return(
        <div className={classes.container}>
            <Headre/>
            <ListItem/>
            <FormForAddList/>   
        </div>
    )
}

export default TodoListContainer