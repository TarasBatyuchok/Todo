import React from 'react';

import classes from "./HeaderTodo.module.css"

const HeaderTodoList= ({setAddItem}) =>{

    // const handleCLick =()=>{
    //     setAddItem(true)
    // }

    return(
    <div className={classes.headerConteiner}>
        <h1 className={classes.titleHeader}>Todo List</h1>
        <button className={classes.btnHeader} onClick={()=>setAddItem(true)}>+</button>
        <button className={classes.btnHeader} onClick={()=>setAddItem(false)}>-</button>
        {/*<button className={classes.btnHeader} onClick={handleCLick}>+</button>*/}
    </div>
  )
}


export default HeaderTodoList