import React, { useState } from "react";

// Components
import Navbar from '../Components/Navbar/Navbar';
import CapsuleStats from "../Components/CapsuleStats/CapsuleStats";
import Button from "../Components/Button/Button";

// CSS
import '../styles/MyCapsules.css';

// Icons
import angry_icon from '../Assets/Emoji/angry.png';
import checklist_icon from '../Assets/Icons/checklist.png';
import capsule_icon from '../Assets/Icons/capsule.png';
import confetti_icon from '../Assets/Icons/confetti.png';
import hourglass_icon from '../Assets/Icons/hourglass.png';
import privacy_icon from '../Assets/Icons/privacy.png';


const MyCapsules = () => {

    return (
        
    <div>
        <Navbar />

        <div className="MyCapsules">

            <div className="MyCapsules-first-container">

                <div className="profile">
                    <div className="profile_1">
                        <img className="profile-pic" src={angry_icon} alt="profile-pic" />
                        <h2>Moustafa Haydar</h2>
                    </div>

                    <div className="profile_2">
                        <p>Lover of memories and stories</p>
                    </div>

                    <div className="profile_3">

                        <CapsuleStats 
                            icon={checklist_icon} 
                            description={"Total Capsules: "}
                            value={20}
                        />

                        <CapsuleStats 
                            icon={hourglass_icon} 
                            description={"Upcoming: "}
                            value={20}
                        />

                        <CapsuleStats 
                            icon={confetti_icon} 
                            description={"Revealed: "}
                            value={20}
                            
                        />

                        <CapsuleStats 
                            icon={privacy_icon} 
                            description={"Private: "}
                            value={20}
                        />

                    </div>
                </div>

                <div className="countdown">
                    
                    <div className="countdown_1">
                        <img className="capsule_icon" src={capsule_icon} alt="capsule-icon" />

                    </div>

                    <p>Your next capsule open in</p>

                    <p>18 days</p>

                    <Button btn_name={"Check details"} type="outline"/>

                </div>

            </div>

            <div className="MyCapsules-second-container">

            </div>



        </div>

    </div>

    );
};

export default MyCapsules;