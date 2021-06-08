import React, {useEffect, useState} from 'react'

import Headre from './HeaderTodo/HeaderTodoList'
import ListItem from './ListItem/ListItem'
import classes from "./TodoList.module.css"
import AddItem from "./FormForAddList/FormForAddLIst";
import {useDispatch, useSelector} from "react-redux";
import {todoActions} from "../../../redux/todo/todoActions";

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
    const tasks = useSelector(store => store.todoList.tasks)
    const loading = useSelector(store => store.todoList.loading)
    const dispatch = useDispatch();
    const [addItem, setAddItem] = useState(false)
    const [receivedData, setReceivedData] = useState(tasks)
    const [render, setRender] = useState(true)
    const [inputValue, setInputValue] = useState('')

    console.log("tasks", tasks)
    useEffect(() => {
        setReceivedData(tasks)
    }, [render])


    const deleteTask = (index) => {
        receivedData.splice(index, 1)
        setRender(!render)

        dispatch(todoActions.setLoading(true))
        dispatch(todoActions.updateTasks(receivedData))
        dispatch(todoActions.setLoading(false))
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
        // setReceivedData(newData)
        setRender(!render)

        dispatch(todoActions.setLoading(true))
        dispatch(todoActions.updateTasks(receivedData))
        dispatch(todoActions.setLoading(false))
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
        // setReceivedData(newData)
        setRender(!render)

        dispatch(todoActions.setLoading(true))
        dispatch(todoActions.updateTasks(receivedData))
        dispatch(todoActions.setLoading(false))
    }

    const handleInputChange = (value) => {
        setInputValue(value)
    }

    const handleTaskAdd = () => {
        const newTask = {
            task: inputValue,
            done: false
        }
        if (inputValue !== "") {
            dispatch(todoActions.setLoading(true))
            dispatch(todoActions.updateTasks(receivedData))
            dispatch(todoActions.setLoading(false))
            // setReceivedData(receivedData.concat(newTask))
            setInputValue('')
            setAddItem(false)
        }
        setRender(!render)
    }

    const handleRemoveAddItem = () => {
        setAddItem(false)
        setInputValue('')
    }

    return (
        <div className={classes.container}>


            <Headre setAddItem={setAddItem}/>
            {loading
                ? <h1>Loading...</h1>
                : <>
                    {addItem && <AddItem
                        inputValue={inputValue}
                        handleInputChange={handleInputChange}
                        setAddItem={setAddItem}
                        handleTaskAdd={handleTaskAdd}
                        handleRemoveAddItem={handleRemoveAddItem}
                    />}
                    <ul className={classes.listContainer}>
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

                </>
            }
        </div>
    )
}
export default TodoListContainer