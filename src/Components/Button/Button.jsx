import React from 'react';
<<<<<<< HEAD
=======
import './style.css';
>>>>>>> Components

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