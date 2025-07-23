
import React, {useEffect, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../Button/Button';
import './style.css';
import logo from '../../Assets/logo.png';
import menu from '../../Assets/Icons/menu.png';
import { useAuth } from '../../Provider/AuthProvider';
import notification_icon from '../../Assets/Icons/bell (1).png';
import profile_icon from '../../Assets/Icons/user.png';

const Navbar = () => {
    
    const { token, setToken } = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return ( 
        <div className='navbar'>

            <Link className='navbar-left' to="/">
                <img src={logo} alt="logo" className='logo'/>
            </Link>
            

            <div className={`navbar-right
                ${isMenuOpen ? 'show' : ''}`}>

                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/create">Create Capsule</Link>
                    <Link to="/explore">Explore</Link>
                    <Link to="/myCapsules">My Capsules</Link>
                    <Link to="/surprise">Surprise Me</Link>
                </div>

                {!token && (
                    <div className='buttons'>
                        <Button btn_name="Login" type='primary' 
                        onClick={() => navigate('/Login')} />
                        <Button btn_name="Register" type='outline' 
                        onClick={() => navigate('/Register')}/>
                    </div>
                )}

                {token && (
                    <div className=" buttons display-row">
                        <button className='no-border no-bg ' type=''>
                            <img className='home_profile_icon' src={notification_icon} alt="notifications-icon" />
                        </button>
                        <button className='no-border no-bg margin-left' type='submit'
                            onClick={() => navigate("/profile")}>
                            <img className='home_profile_icon' src={profile_icon} alt="profile-icon" />
                        </button>
                    </div>
                )}

            </div>

            <img className='menu' src={menu} alt="menu" 
                onClick={() => {
                    // will show the navbar-links in column
                    setIsMenuOpen(!isMenuOpen);
                    console.log("Menu clicked");
                }}/>

        </div>
     );
}
 
export default Navbar;