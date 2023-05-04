// PassengerForm.js
import React, { useState } from 'react';
import { useRouting } from '../contexts/RoutingContext';
import axios from 'axios';

const PassengerForm = () => {
    const { setPassengers } = useRouting();
    const [name, setName] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [destinationLat, setDestinationLat] = useState('');
    const [destinationLng, setDestinationLng] = useState('');

    const API_BASE_URL = 'http://localhost:5000';

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPassenger = {
            name,
            pickUpPoint: {
                lat: parseFloat(lat),
                lng: parseFloat(lng),
            },
            destination: {
                lat: parseFloat(destinationLat),
                lng: parseFloat(destinationLng),
            },
        };

        try {
            const response = await axios.post(`${API_BASE_URL}/passengers`, newPassenger);
            setPassengers((prevPassengers) => [...prevPassengers, response.data]);

            console.log("newPassenger", newPassenger)
            // Clear the form
            setName('');
            setLat('');
            setLng('');
            setDestinationLat('');
            setDestinationLng('');
        } catch (error) {
            console.error('Error adding new passenger:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Passenger name input */}
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>

                {/* Passenger location inputs */}
                <label>
                    Lat:
                    <input type="text" value={lat} onChange={(e) => setLat(e.target.value)} />
                </label>
                <label>
                    Long:
                    <input type="text" value={lng} onChange={(e) => setLng(e.target.value)} />
                </label>

                {/* Destination location inputs */}
                <label>
                    Destination Lat:
                    <input
                        type="text"
                        value={destinationLat}
                        onChange={(e) => setDestinationLat(e.target.value)}
                    />
                </label>
                <label>
                    Destination Long:
                    <input
                        type="text"
                        value={destinationLng}
                        onChange={(e) => setDestinationLng(e.target.value)}
                    />
                </label>

                <button type="submit">Add Passenger</button>
            </form>
        </div>
    );
};

export default PassengerForm;
