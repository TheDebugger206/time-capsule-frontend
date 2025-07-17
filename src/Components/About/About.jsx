import React from "react";
import './style.css';

const About = () => {
    return (

        <div className="about-page">
            
            <div className="about-hero">

                <h1>About Time Capsule</h1>
                <p>
                    Time Capsule is a personal and social platform where you can preserve memories, emotions, and secrets,
                    locked away until a future date.
                </p>
            </div>

            <div className="about-details">

                <h2>Why We Built This</h2>
                <p>
                    Everyone has stories that deserve to be remembered. We wanted to create a space where moments can
                    be rediscovered, connecting the past to the future.
                </p>

                <h2>Our Mission</h2>
                <p>
                    Empowering people to record their thoughts, feelings, and dreams in a meaningful time.
                </p>

            </div>

        </div>

    );
};

export default About;