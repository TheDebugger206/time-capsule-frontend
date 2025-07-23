import React, { useEffect, useState } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import './style.css';
import Capsule from "../../Components/Capsule/Capsule";
import { useAuth } from '../../Provider/AuthProvider';
import CapsulesController from "../../Controllers/CapsulesController";

const Explore = () => {

    const { token, setToken } = useAuth();
    const [ capsules, setCapsules ] = useState();
    const [selectedMood, setSelectedMood] = useState('');
    const [selectedVisibility, setSelectedVisibility] = useState('');

    // const [currentPage, setCurrentPage] = useState(1);
    // const capsulesPerPage = 25;

// const indexOfLastCapsule = currentPage * capsulesPerPage;
// const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;

// let filteredCapsules = capsules?.slice(indexOfFirstCapsule, indexOfLastCapsule);

    let filteredCapsules = capsules?.filter(capsule =>
        selectedMood ? capsule.mood === selectedMood : true);

    // fetch all capsules
    useEffect( () => {
        CapsulesController.getAllCapsules(token, setCapsules);
        }, [token]);

    return (
        <div>
            <Navbar />
            <SearchBar onMoodChange={setSelectedMood}/>
            <div className="capsules">
            {

            filteredCapsules?.map((capsule, index) => (
                <Capsule 
                    title={capsule.title}
                    mode={capsule.mood}
                    description={capsule.message}
                    date_from={capsule.updated_at} date_to={capsule.reveal_date}
                />
            ))
            }
            </div>
        </div>
    );
};

export default Explore;