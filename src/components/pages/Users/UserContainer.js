import React from 'react'

import UserItem from './UserItem/UserItem'


import classes from "./UserContainer.module.css"

 


const UserContainer = ()=>{


    return(
        
        <div className={classes.container}>
            <h2 className={classes.container_titel}>Users</h2>
            <UserItem/>
        </div>
        
    )
}

export default UserContainer