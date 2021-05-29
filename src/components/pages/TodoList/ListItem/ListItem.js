import React from 'react';

import classes from "./ListItem.module.css"


const ListItem = ({title, index, status, markTaskDone, deleteTask, markTaskTodo}) => {
    return (
        // <ul className={classes.listContainer}>
        <li className={status ? classes.ListItemDone : classes.ListItem} key={index}>
            <span className={classes.text}>{title}</span>

            <div className={classes.ContainerForBtn}>
                <button
                    className={classes.BtnRemoveList}
                    onClick={() =>  deleteTask(index) }
                >
                    remove
                </button>

                <button
                    className={classes.BtnAddList}
                    onClick={() => markTaskDone(index)}
                >
                    done
                </button>

                <button
                    className={classes.BtnAddList}
                    onClick={() => markTaskTodo(index)}
                >
                    todo
                </button>
            </div>
        </li>
        // </ul>
    )
}


export default ListItem 