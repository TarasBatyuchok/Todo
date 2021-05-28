import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/header';
import TodoList from './components/todoList/todoLIst';
import Input from './components/input/input';




import './index.css';


const App =()=> {

  const arrItems = [
    {text:'Learn js',id:'1'},
    {text:'Learn React',id:'2'},
    {text:'Stay Alive',id:'3'}
  ];
  
  return(
    <div className="container">
      <div className="wrapper">
    <Header name="Taras"/>
    <TodoList arrItems={arrItems}/>
    {/* givу property [arrItems] for Component TodoList */}
    <Input />
      </div>
    </div>
  );
};



ReactDOM.render(<App />, document.getElementById('root'));

