import React, { useDeferredValue, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import About from "../../Components/About/About";
import Button from '../../Components/Button/Button';
import './style.css';
import { useAuth } from '../../Provider/AuthProvider';
import AuthController from '../../Controllers/AuthController';

const Login = () => {

    const { token, setToken } = useAuth();
    const [ResponseMessage, setResponseMessage] = useState('');
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const user = { email, password };
        AuthController.login({ user, setToken, navigate, url: "/" });
    };
  
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
                    onClick={ handleLogin }/>

                    <div>{ResponseMessage}</div>

                </div>

            </div>

            <About/>

        </div>

    );
};

export default Login;