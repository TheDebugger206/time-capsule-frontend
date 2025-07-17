import React, { useState } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import './style.css';
import Capsule from "../../Components/Capsule/Capsule";

const Explore = () => {

    return (
        
        <div>
            <Navbar />
            <SearchBar />

            <div className="capsules">

                <Capsule 
                    title={'title'}
                    mode={''}
                    description={''}
                    date_from={''} date_to={''}
                />
                
                <Capsule 
                    title="First Day at University"
                    mode="private"
                    description="I felt nervous but excited. Met my roommate and explored the campus. Everything felt new and full of potential."
                    date_from="2022-10-01"
                    date_to="2025-10-01"
                />

                <Capsule 
                    title="First Day at University"
                    mode="private"
                    description="I felt nervous but excited. Met my roommate and explored the campus. Everything felt new and full of potential."
                    date_from="2022-10-01"
                    date_to="2025-10-01"
                />

                <Capsule 
                    title="First Day at University"
                    mode="private"
                    description="I felt nervous but excited. Met my roommate and explored the campus. Everything felt new and full of potential."
                    date_from="2022-10-01"
                    date_to="2025-10-01"
                />

            </div>

        </div>

    );
};

export default Explore;