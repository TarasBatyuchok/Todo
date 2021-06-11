import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import userReducer from "./userReducer/userReducer";
import todoReducer from "./todoReducer/todoReducer";

import {composeWithDevTools} from "redux-devtools-extension"

const appReducer = combineReducers({
    userReducer: userReducer ,
    todoReducer: todoReducer
})


const store = createStore (appReducer, composeWithDevTools(applyMiddleware(thunk)))


export default store 