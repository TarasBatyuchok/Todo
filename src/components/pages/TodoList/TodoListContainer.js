import React, {useEffect, useState} from 'react'

import Header from './HeaderTodo/HeaderTodoList'
import ListItem from './ListItem/ListItem'
import classes from "./TodoList.module.css"
import AddItem from "./FormForAddList/FormForAddLIst";
import { useDispatch, useSelector } from 'react-redux';

import {todoActions} from "../../../redux/todoReducer/todoAction"




// const mockData = [
//     {task: "HTML I", done: false},
//     {task: "CSS", done: false},
//     {task: "Responsive design", done: false},
//     {task: "Git", "done": true},
//     {task: "JavaScript I", done: false},
//     {task: "JavaScript II", done: true},
//     {task: "JavaScript III", done: false},
// ];

const TodoListContainer = () => {

    const  tasks = useSelector(store => (store.todoReducer.tasks))
    const dispatch = useDispatch();
    



    const [addItem, setAddItem] = useState(false)
    const [receivedData, setReceivedData] = useState(tasks)
    const [render, setRender] = useState(true)
    const [inputValue, setInputValue] = useState('')


    useEffect(()=>{
        setReceivedData(tasks)
    },[render])

    console.log("tasks" , tasks)

    const deleteTask = (taskIndex) => {
        const newArr = receivedData.filter((item, index) => index!==taskIndex)
        // setReceivedData(newArr)
        setRender(!render)
      
        dispatch(todoActions.setLoading(true));
        dispatch(todoActions.updateTask(newArr));
        dispatch(todoActions.setLoading(false));



        // setRender(!render)
        // receivedData.splice(index, 1)
        // setReceivedData(receivedData)
      

        // setReceivedData(receivedData.filter((item, index) => index!==taskIndex))
    }

    const markTaskDone = (listIndex) => {
       
        const newData = receivedData.map((item, index) => {
                if (listIndex === index) {
                    item.done = true
                    return item
                } else {
                    return item
                }
            }
        )
        setRender(!render)
        dispatch(todoActions.setLoading(true));
        dispatch(todoActions.updateTask(receivedData));
        dispatch(todoActions.setLoading(false));
        // setReceivedData(newData)
    }

    const markTaskTodo = (listIndex) => {
        const newData = receivedData.map((item, index) => {
                if (listIndex === index) {
                    item.done = false
                    return item
                } else {
                    return item
                }
            }
        )
        setRender(!render)
        dispatch(todoActions.setLoading(true));
        dispatch(todoActions.updateTask(receivedData));
        dispatch(todoActions.setLoading(false));
        // setReceivedData(newData)
    }

    const handleInputChange = (value) => {
        setInputValue(value)
    }

    const handleTaskAdd = () => {
        const newTask = {
            task: inputValue,
            done: false
        }
        if (inputValue !=="") {

           
            // setReceivedData(receivedData.concat(newTask))
            dispatch(todoActions.updateTask(receivedData));
            setInputValue('')
            setAddItem(false)
        }
        
        dispatch(todoActions.setLoading(true));
        dispatch(todoActions.updateTask(receivedData.concat(newTask)));
        dispatch(todoActions.setLoading(false));
        
        setRender(!render)
    }

    const handleRemoveAddItem =()=>{
        setAddItem(false)
        setInputValue('')

        
        
    }

    return (
        <div className={classes.container}>
            <Header setAddItem={setAddItem}/>
            {addItem && <AddItem
                inputValue={inputValue}
                handleInputChange={handleInputChange}
                setAddItem={setAddItem}
                handleTaskAdd={handleTaskAdd}
                handleRemoveAddItem={handleRemoveAddItem}
            />}
            <ul className={classes.listContainer} >
            {receivedData.map((item, index) =>
                <ListItem
                    key={index}
                    index={index}
                    title={item.task}
                    status={item.done}
                    deleteTask={deleteTask}
                    markTaskDone={markTaskDone}
                    markTaskTodo={markTaskTodo}
                />)}
            </ul>


        </div>
    )
}

export default TodoListContainer