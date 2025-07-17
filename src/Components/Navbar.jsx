
import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../Components/Button';
import '../styles/Navbar.css';
import logo from '../Assets/logo.png';
import menu from '../Assets/Icons/menu.png';

const Navbar = () => {

    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return ( 
        <div className='navbar'>

            <Link to="/">
                <img src={logo} alt="logo" className='logo'/>
            </Link>
            

            <div className={`navbar-links
                ${isMenuOpen ? 'show' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/create">Create Capsule</Link>
                <Link to="/capsules">My Capsules</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/surprise">Surprise Mode</Link>
            </div>

            <img className='menu' src={menu} alt="menu" 
                onClick={() => {

                    // will show the navbar-links in column
                    setIsMenuOpen(!isMenuOpen);
                    console.log("Menu clicked");

                }}/>

            <div className='buttons'>
                <Button btn_name="Login" type='primary' 
                onClick={() => navigate('/Login')} />
                <Button btn_name="Register" type='outline' 
                onClick={() => navigate('/Register')}/>
            </div>

        </div>
     );
}
 
export default Navbar;