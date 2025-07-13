import React, { useState } from "react";
import Navbar from '../Components/Navbar/Navbar';
import About from "../Components/About/About";
import "../styles/Register.css";
import Button from '../Components/Button/Button';

const Register = () => {

    return (
        
        <div>

            <Navbar />

            <div className="page-bg">

                <div className="register-form">
                    <h2>Register</h2>

                    <div className="firstname form-group">
                        <label>First Name</label>
                        <input type="text" placeholder="John"/>
                    </div>
                    
                    <div className="lastname form-group">
                        <label>Last Name</label>
                        <input type="text" placeholder="Doe"/>
                    </div>

                    <div className="email form-group">
                        <label>Email</label>
                        <input type="text" placeholder="Johndoe@gmail.com"/>
                    </div>

                    <div className="password form-group">
                        <label>Password</label>
                        <input type="text" placeholder="**********"/>
                    </div>

                    <Button btn_name="Submit" type="primary"
                    onClick={() => console.log("Form submitted")}/>

                </div>

            </div>

            <About/>

        </div>

    );
};

export default Register;