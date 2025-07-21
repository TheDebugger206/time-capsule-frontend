import React, { useDeferredValue, useEffect, useState } from "react";
import { useAuth } from '../../Provider/AuthProvider';
// Components
import Navbar from '../../Components/Navbar/Navbar';
import CapsuleStats from "../../Components/CapsuleStats/CapsuleStats";
import Button from "../../Components/Button/Button";
// Icons
import angry_icon from '../../Assets/Emoji/angry.png';
import checklist_icon from '../../Assets/Icons/checklist.png';
import capsule_icon from '../../Assets/Icons/capsule.png';
import confetti_icon from '../../Assets/Icons/confetti.png';
import hourglass_icon from '../../Assets/Icons/hourglass.png';
import privacy_icon from '../../Assets/Icons/privacy.png';
import { jwtDecode } from 'jwt-decode';

import './style.css';
import axios from "axios";

const MyCapsules = () => {

    const { token, setToken } = useAuth();
    const [ user, setUser ] = useState(null);
    const [ capsules, setCapsules ] = useState(null);

    const logout = () => { setToken(); };

    // decode token
    useEffect (() => {

        const decodeToken = () => {
            try {
                const decoded = jwtDecode(token);
                const user_info = {
                    'id' : decoded.sub,
                    'first_name': decoded.first_name,
                    'last_name': decoded.last_name,
                    'email': decoded.email,
                }
                setUser(user_info);

            } catch (e) {
                console.log("Invalid token: ", e);
            }
        }

        decodeToken();
        
    }, [token]);

    // fetch capsules
    useEffect (() => {
        const fetchUserCapsules = async () => {

            const response = await axios
            .get('http://127.0.0.1:8000/api/v0.1/user/user_capsules/{user.id}', {
                headers: {
                    Authorization: `Bearer ${token}`
                }})
            .then((response) => {
                setCapsules(response.payload);
            })
            .catch((error) => {
                console.log(error.message);
            })
                
        }

        fetchUserCapsules();
    });

    // fetch private capsules
    useEffect(() => {

    });

    // fetch revealed capsules
    useEffect (() => {

    });


    return (
        
    <div>
        <Navbar />
        
        <div className="MyCapsules bg">

            <div className="MyCapsules-first-container">

                {user && (
                    <div className="profile radius-16">
                    <div className="profile_1">
                        <img className="profile-pic" src={angry_icon} alt="profile-pic" />
                        <p>{user.first_name} {user.last_name}</p>
                    </div>

                    <div className="profile_2">
                        <p>{user.bio}</p>
                    </div>

                    <div className="profile_3">

                        <CapsuleStats 
                            icon={checklist_icon} 
                            description={"Total Capsules: "}
                            value={capsules?.length || 0}
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
                )}

                <div className="countdown radius-16">
                    
                    <div className="countdown_1">
                        <img className="capsule_icon" src={capsule_icon} alt="capsule-icon" />
                        <p>Capsule Countdown Timeline</p>
                    </div>

                    <div className="countdown_2">
                        <p>Your next capsule open in</p>
                    </div>

                    <div className="countdown_3">
                        <p className="countdown-number">18 <span>days</span></p>
                    </div>

                    <Button btn_name={"Check details"} type="outline"/>

                </div>

            </div>

        </div>

        <div className="MyCapsules-second-container">
                <h2>Logout</h2>
                <Button btn_name={"Logout"} type="primary"
                onClick={() => logout() }/>

                <Button btn_name={"UserId"} type="primary"
                onClick={() => console.log(user) }/>
            </div>

    </div>

    );
};

export default MyCapsules;