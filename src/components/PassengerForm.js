import React, { useState } from 'react';
import { useRouting } from '../contexts/RoutingContext';
import axios from 'axios';

const PassengerForm = () => {
    const { setPassengers } = useRouting();
    const [name, setName] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');

    const API_BASE_URL = 'http://localhost:5000';

    const handleAddPassenger = async (newPassenger) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/passengers`, newPassenger, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("response.data", response.data);
        } catch (error) {
            console.error('Passanger cannot add:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPassenger = {
            name,
            pickUpPoint: {
                lat: parseFloat(lat),
                lng: parseFloat(lng),
            },
        };

        setPassengers((prevPassengers) => [...prevPassengers, newPassenger]);
        handleAddPassenger(newPassenger);

        // Clear the form
        setName('');
        setLat('');
        setLng('');

        console.log("newPassenger", newPassenger)
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Lat:
                <input type="text" value={lat} onChange={(e) => setLat(e.target.value)} />
            </label>
            <label>
                Long:
                <input type="text" value={lng} onChange={(e) => setLng(e.target.value)} />
            </label>
            <button type="submit">Add Passenger</button>
        </form>
    );
};

export default PassengerForm;
