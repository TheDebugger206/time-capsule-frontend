import React, { useRef } from 'react';
import arrow_down from '../../Assets/Icons/arrow-down.png';
import './style.css';

const FilterDropdown = ({name, choices = []}) => {

    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        if (dropdownRef.current) {
            dropdownRef.current.classList.toggle("show");
        }
    };

    return ( 

        <div className="filter-mood dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}>

            <div className="row center align-center gap-2"
            >
                <button className='dropbtn'>
                    {name}
                    <img className='arrow-down-icon ' src={arrow_down} alt="arrow-down" />
                </button>
            </div>

            <div ref={dropdownRef} className="dropdown-content">
                {choices.map((choice) => (
                    <a href="..." key={choice}>{choice}</a>
                    ))}
            </div>

        </div>
     );
}
 
export default FilterDropdown;