import React from "react";
import classes from "./UserItem.module.css";

const UserItem = () => {
  return (
    <ul className={classes.UsersWraper}>
      <li className={classes.User}>
        User
        <span>
          <button className={classes.BtnInfo}>Info</button>
          <button className={classes.BtnDelete}>Delete</button>
        </span>
      </li>
    </ul>
  );
};

export default UserItem;