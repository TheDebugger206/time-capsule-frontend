import React, { useState } from "react";
import { useNavigate, Link, Navigate } from 'react-router-dom';
import "../styles/Home.css";
import Navbar from '../Components/Navbar/Navbar';
import bg_1 from '../Assets/bg_1(1).jpg';
import Button from "../Components/Button/Button";
import About from "../Components/About/About";


const Home = () => {

    const navigate = useNavigate();

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
                    <Button btn_name="Create Your Capsule" type="primary"
                    onClick={() => navigate('/create')} />
                </div>

                <img className="bg-img" src={bg_1} alt="bg-img" />
            </div>

            <About />
        </div>

        

    );
};

export default Home;