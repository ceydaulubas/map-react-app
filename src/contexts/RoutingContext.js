import { createContext, useContext, useState, useEffect } from 'react';
import { enrichPassengerData } from '../utils/enrichPassengerData';

const RoutingContext = createContext();

export const useRouting = () => {
    return useContext(RoutingContext);
};

export const RoutingProvider = ({ children }) => {
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [passengers, setPassengers] = useState([]);
    const [enrichedPassengers, setEnrichedPassengers] = useState([]);

    useEffect(() => {
        if (passengers.length > 0 && origin && destination) {
            const enrichedData = enrichPassengerData(passengers, { origin, destination });
            setEnrichedPassengers(enrichedData);
        }
    }, [passengers, origin, destination]);

    const updatePassengers = (newPassengers) => {
        setPassengers(newPassengers);
    };


    const value = {
        origin,
        setOrigin,
        destination,
        setDestination,
        passengers,
        setPassengers,
        enrichedPassengers,
        updatePassengers,
    };

    return <RoutingContext.Provider value={value}>{children}</RoutingContext.Provider>;
};
