
import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../Button/Button';
import './style.css';
import logo from '../../Assets/logo.png';
import menu from '../../Assets/Icons/menu.png';

const Navbar = () => {

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
                    <Link to="/capsules">My Capsules</Link>
                    <Link to="/surprise">Surprise Me</Link>
                </div>

                <div className='buttons'>
                    <Button btn_name="Login" type='primary' 
                    onClick={() => navigate('/Login')} />
                    <Button btn_name="Register" type='outline' 
                    onClick={() => navigate('/Register')}/>
                </div>

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