import React, {useEffect, useState} from 'react'
import UserItem from './UserItem/UserItem'
import UserInfo from './UserInfo/UserInfo'
import classes from "./UserContainer.module.css"
import {UserAPI} from "../../API/userAPI";

 


const UserContainer = ()=>{
    const [users, setUsers] = useState([])
    const [showInfo, setShowInfo] = useState(false)
    const [infoIndex, setInfoIndex] = useState(null)

    useEffect(()=>{
        UserAPI.getUsers()
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
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

            {/*<UserItem />*/}
            { showInfo && <UserInfo user={users[infoIndex]}/>}
        </div>

        
    )
}

export default UserContainer