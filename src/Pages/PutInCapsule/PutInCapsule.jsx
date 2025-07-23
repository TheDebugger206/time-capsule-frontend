import React, {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './style.css';

// Assets
import Navbar from '../../Components/Navbar/Navbar';
import postcard from '../../Assets/Letters/postcard-design.jpeg';
import arrow from '../../Assets/Arrows/arrow_1.png';
import empty_stamp from '../../Assets/Icons/stamp.png';
import stamp_icon from '../../Assets/Icons/after_stamp.png';

import MediaController from '../../Controllers/MediaController';
import CapsulesController from '../../Controllers/CapsulesController';
import { useAuth } from '../../Provider/AuthProvider';
import VoiceRecorder from '../../Components/VoiceRecorder/VoiceRecorder';

const PutInCapsule = () => {

    const navigate = useNavigate();
    const { token, setToken } = useAuth();

    const [capsule, setCapsule] = useState(null);

    const [revealDate, setRevealDate] = useState("");
    const [revealDateError, setRevealDateError ] = useState();

    const [ currentStamp, setCurrentStamp ] = useState(empty_stamp);

    // get the capsule data from the CreateCapsule Page
    useEffect(() => {
        const capsuleData = localStorage.getItem("capsuleDraft");
        if (capsuleData) {
            setCapsule(JSON.parse(capsuleData));
        }
        console.log(capsuleData);
    }, []);

    // send the capsule
    const sendCapsule = async () => {
        
        if(!revealDate) {
            setRevealDateError("Please choose the reveal date!");
            return;
        }
        setRevealDateError();

        const updatedCapsule = {
            user_id: capsule.user_id,
            title: capsule.title,
            message: capsule.message,
            privacy: capsule.currentVisibility,            
            reveal_date : revealDate,
            is_revealed: capsule.is_revealed,
            mood: capsule.currentMood
        }

        try  {
            
            const createdCapsule = await CapsulesController.createCapsule(token, updatedCapsule);

            if (!createdCapsule) {
                console.error("Capsule not created.");
                return;
            }

            setCapsule(createdCapsule);

            localStorage.removeItem("capsuleDraft");

            stamp();

        } catch (error) {
            console.error("Error: ", error);
        }
        
    }

    const stamp = () => {
        setCurrentStamp(stamp_icon);
    }

    const updateRevealDate = (date) => {
        setRevealDate(date);
    }

    // upload photo

    const [ media, setMedia ] = useState();

    const uploadImage = (e) => {

        const file = e.target.files[0];
        if (!file) return;

        const type = file.type.startsWith("image/") ? "image"
            : file.type.startsWith("audio/") ? "audio"
            : "unknown";
        
        const reader = new FileReader();

        reader.onload = (readerEvt) => {
            const base64 = readerEvt.target.result.split(',')[1];

            setMedia ({
                capsule_id: capsule.id,
                title: file.name,
                type: type,
                string_base64: base64,
            });
        };

        reader.readAsDataURL(file); 
    };

    const handleMediaSubmit = (e) => {
        e.preventDefault();

        if (!media) {
            console.log("No media uploaded.");
            return;
        }
        MediaController.createMedia(token, media);
        
    };

    // record voice
    const [permission, setPermission] = useState(false);
    const [stream, setStream] = useState(null);

    const getMicrophonePermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                });
                setPermission(true);
                setStream(streamData);
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
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
            <img className='postcard-empty-stamp-icon' src={currentStamp} alt="" />
        </button>

        {revealDateError && <p className='revealDateError'>{revealDateError}</p> }
        
        <label className='postcard-label-name' htmlFor="postcard-name">Name: </label>
        <input id='postcard-name' className='postcard-name' type="text" placeholder='Moustafa Haydar' />

        <label className='postcard-label-date' htmlFor="postcard-date">Date: </label>
        <input className='postcard-date' type="date" placeholder='6-6-2026' 
        value={revealDate} onChange={(e) => {updateRevealDate(e.target.value)} }/>

    </div>


    <div className="media-container">

            <div className="image-upload-section">

                <h3>Images Upload</h3>
      
                <form 
                onSubmit={handleMediaSubmit}>
                        <input 
                        type="file" 
                        name="image"
                        id="file"
                        accept=".jpeg, .png, .jpg"
                        onChange={uploadImage}
                        />

                        <input type="submit" value="upload" />
                </form>

            </div>

            <VoiceRecorder 
                toekn={token}
                capsule={capsule}/>

    </div>

</div>
    );
}
 
export default PutInCapsule;