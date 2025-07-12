import React, { useState } from "react";
import "../styles/Home.css";
import Navbar from '../Components/Navbar';
import bg_1 from '../Assets/bg_1(1).jpg';
import Button from "../Components/Button";
import About from "../Components/About";

const Home = () => {

    return (
        
        <div>
            <Navbar />

            <div className="hero">
                <div className="div1">
                    <p className="div1-title">Send a Message to the Future</p>
                    <p className="div1-text">A modern way to save your memories, millestones,
                    <br></br>
                    and messages for the future
                    </p>
                    <Button btn_name="Create Your Capsule" type="primary" />
                </div>

                <img className="bg-img" src={bg_1} alt="bg-img" />
            </div>

            <About />
        </div>

        

    );
};

export default Home;