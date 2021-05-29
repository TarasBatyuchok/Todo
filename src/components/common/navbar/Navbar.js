import React from 'react';
import { useHistory } from 'react-router';
import Button from '../button/Button';
import classes from "./Navbar.module.css"
import Routes from "../Routes" 

const Navbar = () =>{

    const history = useHistory()


    return(
        <div className={classes.navbarContainer}>
           <Button 
            buttonText="Todo List" 
            className="buttonList" 
            onClick={()=> history.push(Routes.TODOLIST)} 
            />
           <Button 
            buttonText="Users" 
            className="buttonUsers" 
            onClick ={()=> history.push(Routes.USERS)}
            />
        </div>
    )
}


export default Navbar;