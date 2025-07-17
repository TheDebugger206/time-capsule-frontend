import React from 'react';
import './style.css';

const CapsuleStats = ({icon, description, value}) => {
    return ( 
        <div className="CapsuleStats">
            <img 
                className="CapsuleStats-Icon" 
                src={icon} 
                alt="CapsuleStats-Icon" />
            <p className='CapsuleStats-Description'>{description}{value}</p>
        </div>

     );
}
 
export default CapsuleStats;