import React from 'react'

import UserItem from './UserItem/UserItem'
import UserInfo from './UserInfo/UserInfo'


import classes from "./UserContainer.module.css"

 


const UserContainer = ()=>{


    return(
   
        <div className={classes.container}>
            
            <UserItem/>
            <UserInfo/>
        </div>
   
        
    )
}

export default UserContainer