import React from 'react';

import classes from "./HeaderTodo.module.css"

const HeaderTodoList= () =>{
  return(
    <div className={classes.headerConteiner}>
        <h1 className={classes.titleHeader}>Todo List</h1>
        <button className={classes.btnHeader}>+</button>
    </div>
  )
}


export default HeaderTodoList