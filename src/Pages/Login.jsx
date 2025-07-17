import React, { useState } from "react";
import Navbar from '../Components/Navbar/Navbar';
import About from "../Components/About/About";
import "../styles/Login.css";
import Button from '../Components/Button/Button';

const Login = () => {

    return (
        
        <div>

            <Navbar />

            <div className="page-bg">

                <div className="login-form">
                    <h2>Login</h2>

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

export default Login;