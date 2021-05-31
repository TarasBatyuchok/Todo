import React from "react";


import classes from './UserInfo.module.css'

const UserInfo = ({user}) =>{
    console.log(user)
 return(
     <ul className={classes.UserInfo}>
       <p>Name: {user.name}</p>
       <p>Username: {user.username}</p>
       <p>Email: {user.email}</p>
       <p>Company:</p>
       <p>Company name: {user.company.name}</p>
     </ul>
 )
}

export default UserInfo