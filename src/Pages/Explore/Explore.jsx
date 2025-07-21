import React, { useEffect, useState } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import './style.css';
import Capsule from "../../Components/Capsule/Capsule";
import { useAuth } from '../../Provider/AuthProvider';
import axios from "axios";

const Explore = () => {

    const { token, setToken } = useAuth();
    const [ capsules, setCapsules ] = useState();
    const [selectedMood, setSelectedMood] = useState('');
    const [selectedVisibility, setSelectedVisibility] = useState('');

    const filteredCapsules = capsules?.filter(capsule =>
        selectedMood ? capsule.mood === selectedMood : true);

    


    // fetch all capsules
    useEffect( () => {

        const fetchCapsules = async () => {

            if (!token) return;

            const response  = await axios
            .get ('http://127.0.0.1:8000/api/v0.1/user/capsules', {
                headers : {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then((response) => {
                // const allCapsules = ;
                setCapsules(response.data.payload);
                console.log(response.data.payload)
            }) 
            .catch ((error) => {
                console.log(error);
            });
        }

        fetchCapsules();

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