import React, { useState } from "react";
import Navbar from '../Components/Navbar/Navbar';
import About from "../Components/About/About";
import  '../styles/CreateCapsule.css';
import letter from '../Assets/Letters/letter_1.png';
import sad from '../Assets/Emoji/sad.png';
import smile from '../Assets/Emoji/smile.png';
import angry from '../Assets/Emoji/angry.png';
import color1 from '../Assets/Emoji/circle color1.png';
import color2 from '../Assets/Emoji/circle color2.png';
import RadioButton from "../Components/RadioButton/RadioButton";

const CreateCapsule = () => {

    // theme
    const themeColors = {
        theme1: ['43505F', '9F4B22'],
        theme2: ['0002FD', 'FD0100']
    };

    // theme state
    const [currentTheme, setTheme] = useState('theme1');
    // mood will be whether smile, sad, angry
    const [currentMood, setMood] = useState();
    // font
    const [currentFont, setFont] = useState();
    // visibility state 
    const [currentVisibility, setVisibility] = useState('public');


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

    return (
        
        <div>
            <Navbar />

            <div className="main">

                <div className="main-left">

                    <h2>Visibility</h2>
                    <div className="visibility">
                        <form action="">

                            <RadioButton 
                                id="public" 
                                name="visibility" 
                                label_name={"Public"}
                                checked={currentVisibility === 'public'}
                                onChange={() => changeVisibility('public')}
                            />

                            <RadioButton 
                                id="private" 
                                name="visibility" 
                                label_name={"Private"}
                                checked={currentVisibility === 'private'}
                                onChange={() => changeVisibility('private')}
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


                </div>

                <div className="main-middle">
                    <img className="letter-bg" src={letter} alt="letter background" />
                    <textarea name="" id=""
                        className="letter-textarea" placeholder="Start typing here..."></textarea>
                </div>

                <div className="main-right">

                </div>

            </div>

            <About/>
        </div>

    );
};

export default CreateCapsule;