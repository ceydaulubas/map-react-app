import { createContext, useContext, useState, useEffect } from 'react';
import { enrichPassengerData } from '../utils/enrichPassengerData';
import { fetchPassengerData } from '../api/passengerAPI';

const RoutingContext = createContext();

export const useRouting = () => {
    return useContext(RoutingContext);
};

export const RoutingProvider = ({ children }) => {
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [passengers, setPassengers] = useState([]);
    const [enrichedPassengers, setEnrichedPassengers] = useState([]);
    const [routeInfo, setRouteInfo] = useState(null);

    const saveRouteInfo = (directionsResult) => {
        const route = directionsResult.routes[0].legs[0];
        const distance = route.distance.value / 1000;
        const duration = route.duration.value / 3600;

        setRouteInfo({
            distance,
            duration,
        });
    };

    const updatePassengers = (newPassengers) => {
        setPassengers(newPassengers);
    };

    useEffect(() => {
        const fetchPassengers = async () => {
            const response = await fetchPassengerData();
            setPassengers(response);
        };

        fetchPassengers();
    }, []);

    useEffect(() => {
        console.log("passengers.length ", passengers.length)
        console.log("origin", origin)
        console.log("destination", destination)
        if (passengers.length > 0 && origin && destination) {
            (async () => {
                const enrichedData = await enrichPassengerData(passengers, origin, destination);
                console.log("enrichedData", enrichedData);
                setEnrichedPassengers(enrichedData);
            })();
        }
    }, [passengers, origin, destination]);



    const value = {
        origin,
        setOrigin,
        destination,
        setDestination,
        passengers,
        setPassengers,
        enrichedPassengers,
        updatePassengers,
        routeInfo,
        saveRouteInfo,
    };

    return <RoutingContext.Provider value={value}>{children}</RoutingContext.Provider>;
};
