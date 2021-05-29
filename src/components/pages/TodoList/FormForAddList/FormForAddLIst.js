import React from 'react';

import classes from "./FormForAdd.module.css"
import ListItem from "../ListItem/ListItem";


const AddItem = ({setAddItem, handleInputChange,inputValue, handleTaskAdd, handleRemoveAddItem} ) => { //AddItem

    return(
        
        <div className={classes.containerForForm}>
            <input
                type="text"
                className={classes.inputForm}
                value={inputValue}
                onChange={(e)=> handleInputChange(e.target.value)}

            />
            <button
                className={classes.addList}
                onClick={handleTaskAdd}
            >
                Add
            </button>
            <button
                className={classes.removeForm}
                onClick={handleRemoveAddItem}
            >
                Remove
            </button>
        </div>
    )

}

export default AddItem;