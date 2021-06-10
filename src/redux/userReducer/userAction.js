import {UserAPI} from "../../components/API/userAPI";

const usersAction = {
    updateUser:(users)=>({
        type: "UPDATE_USERS",
        payload: users
    })

}


const fetchUsers = () => async(dispatch) =>{
    await  UserAPI.getUsers()
    .then(res => dispatch(usersAction.updateUser(res.data)))
    .catch(err => console.log(err))
}

export default fetchUsers
