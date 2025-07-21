import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import About from "../../Components/About/About";
import Button from '../../Components/Button/Button';
import axios from "axios";
import './style.css';
import { useAuth } from '../../Provider/AuthProvider';


const Login = () => {

    const { token, setToken } = useAuth();
    const navigate = useNavigate();
    const [ResponseMessage, setResponseMessage] = useState('');

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {

        const user = { email, password };

        axios
        .post("http://127.0.0.1:8000/api/v0.1/guest/login", user)
        .then((response) => {
            // console.log(response.data);
            const user_token = response.data.payload.token;
            setToken(user_token);
            // console.log(token);
            navigate("/");
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } 
        });

    }

    return (
        
        <div>

            <Navbar />

            <div className="page-bg bg">

                <div className="login-form">
                    <h2>Login</h2>

                    <div className="email form-group">
                        <label>Email</label>
                        <input type="text" placeholder="Johndoe@gmail.com"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="password form-group">
                        <label>Password</label>
                        <input type="password" placeholder="**********"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Button btn_name="Submit" type="primary"
                    onClick={() => login()}/>

                    <div>{ResponseMessage}</div>

                </div>

            </div>

            <About/>

        </div>

    );
};

export default Login;