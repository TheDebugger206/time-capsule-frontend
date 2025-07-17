import React, {useRef} from 'react';
import './style.css';

// Assets
import Navbar from '../../Components/Navbar/Navbar';
import postcard from '../../Assets/Letters/postcard-design.jpeg';
import arrow from '../../Assets/Arrows/arrow_1.png';
import empty_stamp from '../../Assets/Icons/stamp.png';
import stamp from '../../Assets/Icons/after_stamp.png';

const PutInCapsule = () => {

    const stampRef = useRef(null);

    const sendCapsule = () => {
        if (stampRef.current) {
            stampRef.current.src = stamp;
        }
    };

return ( 

<div>

    <Navbar/>

    <div className='putInCapsule bg display-column center'>

        <img className='postcard' src={postcard} alt="postcard-img" />

        <p className='postcard-stamp-here'>Stamp<br></br>here<br></br>to send</p>
        <img className='postcard-arrow-icon' src={arrow} alt="" />


        <button
            onClick={sendCapsule}
        >
            <img ref={stampRef} className='postcard-empty-stamp-icon' src={empty_stamp} alt="" />
        </button>
        
        <label className='postcard-label-name' htmlFor="postcard-name">Name: </label>
        <input id='postcard-name' className='postcard-name' type="text" placeholder='Moustafa Haydar' />

        <label className='postcard-label-date' htmlFor="postcard-date">Date: </label>
        <input className='postcard-date' type="date" placeholder='6-6-2026' />

    </div>



</div>
    );
}
 
export default PutInCapsule;