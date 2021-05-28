import React from 'react';
import "./Button.css"

const Button = ({buttonText, className, onClick, ...props}) => {

    return(
        <button
            className={className}
            onClick={onClick}
        > {buttonText}</button>
    )

}
export default Button