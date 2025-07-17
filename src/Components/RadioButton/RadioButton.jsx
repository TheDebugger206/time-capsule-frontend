import React from 'react';
import './RadioButton.css';

const RadioButton = ({id, name, label_name, checked, onChange}) => {
    return ( 
        <div className='radio'> 
            <input 
            type="radio" 
            id={id} name={name} 
            className='radio-input'
            checked={checked}
            onChange={onChange}
            />

            <label htmlFor={id} className='radio-label'>{label_name}</label>
        </div>
     );
}
 
export default RadioButton;