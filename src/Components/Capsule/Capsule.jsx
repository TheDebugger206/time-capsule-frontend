import React from 'react';
import './style.css';
import angry_icon from '../../Assets/Emoji/angry.png';
import happy_icon from '../../Assets/Emoji/smile.png';
import sad_icon from '../../Assets/Emoji/sad.png';
import date_icon from '../../Assets/Icons/hourglass.png';

const Capsule = ({title, mood, date_from, date_to, description}) => {
    
    let mood_icon;

    if (mood === 'happy') {
        mood_icon = happy_icon;
    } else if (mood === 'sad') {
        mood_icon = sad_icon;
    } else if (mood === 'angry') {
        mood_icon = angry_icon;
    } else {
        mood_icon = null;
    }
    
    return (

        <div className='capsule display-column radius-16 center'>
            
            <p className='capsule-title'>{title}</p>

            <div className="capsule-mood display-row align-center">
                <img className='capsule-icon' src={mood_icon} alt="mood-icon" />
                <p>{mood}</p>
            </div>

            <div className="capsule-date display-row align-center">
                <img className='capsule-icon' src={date_icon} alt="" />
                <p>{date_from.substr(0,10)} -&gt; {date_to}</p>
            </div>

            <p className='capsule-description'>{description}</p>
            
        </div>

     );

}
 
export default Capsule;

    

