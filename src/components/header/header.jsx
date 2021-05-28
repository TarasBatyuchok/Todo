import React from 'react'


import './header.css';



function Header(props) {
 
  return (
    <h1 className="title">
      {`Hi i'm ${props.name} this My todo list))`}
    </h1>
  );
}

export default Header;
