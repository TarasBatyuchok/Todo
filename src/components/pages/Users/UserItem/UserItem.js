import React from "react";
import classes from "./UserItem.module.css";

const UserItem = ({name, index, handleDelete, showUserInfo}) => {



  return (
   
      <li className={classes.User} key={index}>
          {name}
        <span>
          <button
              className={classes.BtnInfo}
              onClick={()=> showUserInfo(index)}
          >
              Info
          </button>
          <button
              className={classes.BtnDelete}
              onClick={()=> handleDelete(index)}
          >
              Delete
          </button>
        </span>
      </li>
    
  );
};

export default UserItem;