import React from 'react';

import classes from "./FormForAdd.module.css"


const FormForAddLIst = () => {

    return(
        
        <div className={classes.containerForForm}>
            <input type="text "className={classes.inputForm}></input>
            <button className={classes.addList}>Add</button>
            <button className={classes.removeForm}>Remove</button>
        </div>
    )

}

export default FormForAddLIst;