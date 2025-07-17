import React from 'react';
import './style.css';
import mode_icon from '../../Assets/Emoji/angry.png';
import date_icon from '../../Assets/Icons/hourglass.png';

const Capsule = ({title, mode, date_from, date_to, description}) => {
    return ( 

        <div className='capsule display-column radius-16 align-center'>
            
            <p className='capsule-title'>{title}</p>

            <div className="capsule-mood display-row">
                <img className='capsule-icon' src={mode_icon} alt="" />
                <p>{mode}</p>
            </div>

            <div className="capsule-date display-row">
                <img className='capsule-icon' src={date_icon} alt="" />
                <p>{date_from} - {date_to}</p>
            </div>

            <p className='capsule-description'>{description}</p>
            
        </div>

     );

}
 
export default Capsule;

    

