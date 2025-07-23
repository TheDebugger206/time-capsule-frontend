import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import About from "../../Components/About/About";
import Button from '../../Components/Button/Button';
import AuthController from "../../Controllers/AuthController";
import './style.css';

const Register = () => {

    const navigate = useNavigate();
    const [ResponseMessage, setResponseMessage] = useState();
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        
        const new_user = { first_name, last_name, email, password };

        try {
            const result =  await AuthController.register({new_user, navigate});
        } catch (error) {
            setResponseMessage(error.message || "Login failed. Please try again.");
        }
    }
    
    return (

        <div>

            <Navbar />

            <div className="page-bg bg">

                <div className="register-form">
                    <h2>Register</h2>

                    <div className="response-message">
                        {ResponseMessage && <p style={{ color: 'red' }}>{ResponseMessage}</p>}
                    </div>

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
                    onClick={handleRegister}/>
                </div>

            </div>


        </div>

    );
};

export default Register;