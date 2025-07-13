import React from 'react';
import './Button.css';

const Button = ({btn_name, onClick, type = "primary"}) => {
    const btnClass = `btn ${type}`;
    
    return ( 
            <button className={btnClass}
            onClick={onClick}>
                {btn_name}
            </button>
     );
}
 
export default Button;