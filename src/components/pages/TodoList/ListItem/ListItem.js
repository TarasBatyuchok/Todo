import React from 'react';

import classes from "./ListItem.module.css"

const ListItem = () =>{
  return(
    <ul className={classes.listContainer}>

        <li className={classes.ListItem}>
          <span className={classes.text}>LIst</span>

        <div className={classes.ContainerForBtn}>
          <button className={classes.BtnRemoveList}>-</button>
          <button className={classes.BtnAddList}>+</button>
        </div>


        </li>



    </ul>
  )
}


export default ListItem 