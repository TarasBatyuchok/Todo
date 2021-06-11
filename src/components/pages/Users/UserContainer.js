import React, {useEffect, useState} from 'react'
import UserItem from './UserItem/UserItem'
import UserInfo from './UserInfo/UserInfo'
import classes from "./UserContainer.module.css"

// redux
// import {UserAPI} from "../../API/userAPI";
import { useDispatch, useSelector } from 'react-redux';

import fetchUsers from "../../../redux/userReducer/userAction";

 


const UserContainer = ()=>{
    const stateUsers = useSelector(store => store.userReducer.users)
    console.log(stateUsers)

    const dispatch = useDispatch()

    const [users, setUsers] = useState(stateUsers)
    const [showInfo, setShowInfo] = useState(false)
    const [infoIndex, setInfoIndex] = useState(null)

    const getUsers = ()=> dispatch(fetchUsers())
    

    useEffect(()=>{
        getUsers();
    },[])

    const handleDelete = (userIndex)=>{
        const newUsers = users.filter((item, index) => index!==userIndex)
        setUsers(newUsers)

        if (userIndex === infoIndex || infoIndex > userIndex) {
            setShowInfo(false)
            setInfoIndex(null)
        }
        // setUsers(users.filter((item, index) => index!==userIndex))
    }

    const showUserInfo = (index) => {
        setShowInfo(true)
        setInfoIndex(index)
    }


    return(
   
        <div className={classes.container}>
            <ul className={classes.UsersWraper}>
            {users && users.map((user, index) =>
                <UserItem
                    key={index}
                    index={index}
                    name={user.name}
                    handleDelete={handleDelete}
                    showUserInfo={showUserInfo}
                />)}
            </ul>

          
            { showInfo && <UserInfo user={users[infoIndex]}/>}
        </div>

        
    )
}

export default UserContainer