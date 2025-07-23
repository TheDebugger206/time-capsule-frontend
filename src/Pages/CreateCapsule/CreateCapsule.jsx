import React, { createElement, useEffect, useState } from "react";
import { useNavigate, Link, Navigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import About from "../../Components/About/About";
import letter from '../../Assets/Letters/letter_1.png';
import sad from '../../Assets/Emoji/sad.png';
import smile from '../../Assets/Emoji/smile.png';
import angry from '../../Assets/Emoji/angry.png';
import color1 from '../../Assets/Emoji/circle color1.png';
import color2 from '../../Assets/Emoji/circle color2.png';
import RadioButton from "../../Components/RadioButton/RadioButton";
import photo from "../../Assets/Icons/photo.png";
import audio from "../../Assets/Icons/audio.png";
import arrow_right from "../../Assets/Arrows/arrow_2.png";
import './style.css';
import Button from "../../Components/Button/Button";
import PutInCapsule from "../PutInCapsule/PutInCapsule";
import TokenController from '../../Controllers/TokenController';
import { AuthProvider, useAuth } from "../../Provider/AuthProvider";

const CreateCapsule = () => {

    const navigate = useNavigate();
    const { token, setToken } = useAuth();
    const [user, setUser] = useState();

    // theme
    const themeColors = {
        theme1: ['43505F', '9F4B22'],
        theme2: ['0002FD', 'FD0100']
    };

    // theme state
    const [currentTheme, setTheme] = useState('theme1');
    // mood will be whether smile, sad, angry
    const [currentMood, setMood] = useState("happy");
    // font
    const [currentFont, setFont] = useState();
    // visibility state 
    const [currentVisibility, setVisibility] = useState(0);

    // title
    const [ title, setTitle ] = useState("");
    const [ titleError, setTitleError ] = useState("");
    // message
    const [ message, setMessage ] = useState("");
    const [ messageError, setMessageError ] = useState("");

    useEffect(() => {
        if (token) {
            TokenController.decodeToken(token, setUser);
        }
    }, [token]);

    const handleCreateCapsule = () => {

        if (!token || !user) {
            console.log("Token or user not available.");
            return;
        }

        if (!title) {
            setTitleError("Please enter a title!");
            return;
        }
        setTitleError();

        if (!message) {
            setMessageError("Please enter a message!");
            return;
        }
        setMessageError();

        const capsuleData = {
            user_id: user.id,
            title,
            message,
            currentVisibility,
            is_revealed: 0,
            currentMood
        };

        localStorage.setItem("capsuleDraft", JSON.stringify(capsuleData));
        
        navigate("/putInCapsule");
    };

    function changeVisibility(to) {
        setVisibility(to);
    }

    function changeTheme(to) {
        setTheme(to);
    }
    
    function changeMood(mood) {
        setMood(mood);
    }

    function changeFont(font) {
        setFont(font);
    }

    function updateTitle(title) {
        setTitle(title);
    }

    function updateMessage(message) {
        setMessage(message);
    }

    return (
        
    <div>
        <Navbar />

        <div className="main">

            <div className="main-left">


                <div className="main-left-child">

                <h2>Visibility</h2>
                <div className="visibility">
                    <form action="">

                        <RadioButton 
                            id="public" 
                            name="visibility" 
                            label_name={"Public"}
                            checked={currentVisibility === 'public'}
                            onChange={() => changeVisibility(0)}
                        />

                        <RadioButton 
                            id="private" 
                            name="visibility" 
                            label_name={"Private"}
                            checked={currentVisibility === 'private'}
                            onChange={() => changeVisibility(1)}
                        />

                    </form>
                </div>

                <h2>Theme</h2>
                <div className="theme">

                        <button className={`img-btn`}
                        onClick={() => { changeTheme('theme1') }}>
                        <img src={color1} alt="theme1"
                        className = {`emoji ${currentTheme === 'theme1' ? 'selected' : ''}`}/>
                    </button> 

                    <button className={`img-btn`}
                    onClick={() => { changeTheme('theme2') }}>
                        <img src={color2} alt="theme2" 
                        className = {`emoji ${currentTheme === 'theme2' ? 'selected' : ''}`}/>
                    </button>

                </div>

                <h2>Font</h2>
                <div className="font">

                    <RadioButton 
                        id='playfair' 
                        name='font' 
                        label_name={"Playfair Display"}
                        checked={currentFont === 'playfair'}
                        onChange={() => changeFont('playfair')}
                    />

                    <RadioButton 
                        id='homemade' 
                        name='font' 
                        label_name={"Homemade apple"}
                        checked={currentFont === 'homemade'}
                        onChange={() => changeFont('homemade')}
                    />
                
                </div>

                <h2>Mood</h2>
                <div className="mood">

                    <button className={`img-btn `}
                        onClick={() => {
                        changeMood('happy');
                        console.log(`Mood changed to Happy!`);
                        }}>
                        <img src={smile} alt="" className={`emoji ${currentMood === 'happy' ? 'selected' : ''}`}/>
                    </button>

                    <button className={`img-btn`}
                        onClick={() => {
                        changeMood('sad');
                        console.log(`Mood changed to Sad!`);
                        }}>
                        <img src={sad} alt="" className={`emoji ${currentMood === 'sad' ? 'selected' : ''}`}/>
                    </button>

                    <button className={`img-btn`}
                        onClick={() => {
                        changeMood('angry');
                        console.log(`Mood changed to Angry!`);
                        }}>
                        <img src={angry} alt="" className={`emoji ${currentMood === 'angry' ? 'selected' : ''}`}/>
                    </button>

                </div>

                <h2>Attach Media</h2>
                <div className="media">
                    <button className={`img-btn`}
                        >
                        <img src={photo} alt="photo-icon"
                        className = {`photo-icon`}/>
                    </button> 

                    <button className={`img-btn`}
                    >
                        <img src={audio} alt="audio-icon" 
                        className = {`audio-icon`}/>
                    </button>
                </div>

                </div>

            </div>

            <div className="main-middle">
                <img className="letter-bg" src={letter} alt="letter background" />
                <textarea name="title" id="" value={title}
                    onChange={(e) => updateTitle(e.target.value)}
                    className="letter-title" placeholder="Enter title here..."></textarea>
                    {titleError && <p className="error-message"> {titleError} </p>}

                <textarea name="text" id="" value={message}
                    onChange={(e) => updateMessage(e.target.value)}
                    className="letter-textarea" placeholder="Start typing here..."></textarea>
                    {messageError && <p className="error-message"> {messageError} </p>}

            </div>

            <div className="main-right">
                    <div className="right-arrow">
                        <img src={arrow_right} alt="" />
                    </div>
                    <Button btn_name={'Put In Capsule'} 
                    onClick={
                        handleCreateCapsule
                    }/>
            </div>

        </div>


    </div>

    );
}

export default CreateCapsule;