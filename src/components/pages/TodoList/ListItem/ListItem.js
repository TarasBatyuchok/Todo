import React from 'react';

import classes from "./ListItem.module.css"


const ListItem = ({title, index, status, markTaskDone, deleteTask, markTaskTodo}) => {
    return (
        // <ul className={classes.listContainer}>
        <li className={status ? classes.ListItemDone : classes.ListItem} key={index}>
            <span className={classes.text}>{title}</span>

            <div className={classes.ContainerForBtn}>
                <button
                    className={classes.BtnRemove}
                    onClick={() =>  deleteTask(index) }
                >
                    Delete
                </button>

                <button
                    className={classes.BtnDone}
                    onClick={() => markTaskDone(index)}
                >
                    Done
                </button>

                <button
                    className={classes.BtnAdd}
                    onClick={() => markTaskTodo(index)}
                >
                    Stop
                </button>
            </div>
        </li>
        // </ul>
    )
}


export default ListItem 