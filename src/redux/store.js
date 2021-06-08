import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import todoReducer from "./todo/todoReducer";

const appReducer = combineReducers({
    todoList: todoReducer
// users: userReducer;
});


const store = createStore(appReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

//
// store.todoList