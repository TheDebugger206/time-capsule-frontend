import React from 'react';
import './style.css';
import search_icon from '../../Assets/Icons/search-icon.png';
import FilterDropdown from '../FilterDropdown/FilterDropdown';


const SearBar = () => {
    return ( 
        <div className='search-bar display-row center'>


            <div className="search-bar-filters display-row">

                <FilterDropdown 
                    name={"Mood"} 
                    choices={["Happy", "Sad"]}/>

                <FilterDropdown 
                    name={"Visibility"} 
                    choices={["Public", "Private"]}/>

                <FilterDropdown 
                    name={"Date"} 
                    choices={["Today", "Month"]}/>

            </div>


            <div className="search-bar-search display-row">
                <img className='search-icon' src={search_icon} alt="" />
                <input type="text" placeholder='Search' />
            </div>

        </div>
     );
}
 
export default SearBar;