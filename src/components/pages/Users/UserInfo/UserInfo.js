import React from "react";


import classes from './UserInfo.module.css'

const UserInfo = ({user}) =>{
    console.log(user)
 return(
     <ul className={classes.UserInfo}>
       <li>Name: {user.name}</li>
       <li>Username: {user.username}</li>
       <li>Email: {user.email}</li>  
       <li>Company: {user.company.name}</li>
     </ul>
 )
}

export default UserInfo