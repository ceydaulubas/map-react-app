import React, { useState } from 'react';
import { useRouting } from '../contexts/RoutingContext';

const PassengerForm = () => {
    const { setPassengers } = useRouting();
    const [name, setName] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');

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
        console.log("newPassenger", newPassenger)

        // Formu temizleyin
        setName('');
        setLat('');
        setLng('');
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
