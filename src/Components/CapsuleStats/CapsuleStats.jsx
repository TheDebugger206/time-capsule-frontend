import React from 'react';
import './CapsuleStats.css';

const CapsuleStats = ({icon, description, value}) => {
    return ( 
        <div className="CapsuleStats">
            <img 
                className="CapsuleStats-Icon" 
                src={icon} 
                alt="CapsuleStats-Icon" />
            <p>{description}{value}</p>
        </div>

     );
}
 
export default CapsuleStats;