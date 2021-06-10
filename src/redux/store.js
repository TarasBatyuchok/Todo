import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import userReducer from "./userReducer/userReducer"

import {composeWithDevTools} from "redux-devtools-extension"

const appReducer = combineReducers({
    userReducer: userReducer 
})


const store = createStore (appReducer, composeWithDevTools(applyMiddleware(thunk)))


export default store