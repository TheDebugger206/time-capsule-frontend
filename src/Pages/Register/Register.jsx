import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import About from "../../Components/About/About";
import Button from '../../Components/Button/Button';
import './style.css';
import axios from "axios";

const Register = () => {

    const navigate = useNavigate();

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [responseMessage, setResponseMessage] = useState("");

    const register = () => {

        const newUser = {
        first_name, last_name, email, password }

        axios
        .post("http://127.0.0.1:8000/api/v0.1/guest/register", newUser)
        .then((response) => {
                navigate("/Login");
            })
        .catch((err) => {
                setResponseMessage("Error creating post");
        });
    }

    return (

        <div>

            <Navbar />

            <div className="page-bg bg">

                <div className="register-form">
                    <h2>Register</h2>

                    <div className="firstname form-group">
                        <label>First Name</label>
                        <input type="text" placeholder="John"
                        value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    
                    <div className="lastname form-group">
                        <label>Last Name</label>
                        <input type="text" placeholder="Doe"
                        value={last_name} onChange={(e) => setLastName(e.target.value)}/>
                    </div>

                    <div className="email form-group">
                        <label>Email</label>
                        <input type="text" placeholder="Johndoe@gmail.com"
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="password form-group">
                        <label>Password</label>
                        <input type="password" placeholder="**********"
                        value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <Button btn_name="Submit" type="primary"
                    onClick={() => register()}/>

                    <div>{responseMessage}</div>

                </div>

            </div>

            <About/>

        </div>

    );
};

export default Register;