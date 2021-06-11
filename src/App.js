import React from 'react';
import Navbar from "./components/common/navbar/Navbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Routes from "./components/common/Routes";


import UserContainer from "./components/pages/Users/UserContainer";
import TodoListContainer from "./components/pages/TodoList/TodoListContainer";

const App = () => {
    return (
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path={Routes.TODOLIST} component={TodoListContainer}/>
                    <Route exact path={Routes.USERS} component={UserContainer}/>
                </Switch>
            </BrowserRouter>
    );
}

export default App




