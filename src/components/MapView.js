import React, { useRef, useEffect } from 'react';
import { useRouting } from '../contexts/RoutingContext';
import {
    GoogleMap,
    LoadScript,
    Marker,
    DirectionsRenderer,
} from '@react-google-maps/api';
import { fetchPassengerData } from '../api/passengerAPI';

const containerStyle = {
    width: '100%',
    height: '500px',
};

const center = {
    lat: 0,
    lng: 0,
};

const MapView = () => {
    const { origin, destination, enrichedPassengers, updatePassengers } = useRouting();
    const [directions, setDirections] = React.useState(null);
    const [error, setError] = React.useState(null);

    const mapRef = useRef();

    // Yolcu verilerini al ve RoutingContext içindeki güncellenmiş yolcu listesini kullan
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchPassengerData();
                console.log("data", data)
                updatePassengers(data);
            } catch (error) {
                console.error('Yolcu verileri alınamadı:', error);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (origin && destination) {
            // Rota hesaplaması için DirectionsService kullanılır
            const directionsService = new window.google.maps.DirectionsService();
            directionsService.route(
                {
                    origin: { lat: origin.lat, lng: origin.lng },
                    destination: { lat: destination.lat, lng: destination.lng },
                    travelMode: window.google.maps.TravelMode.DRIVING,
                },
                (result, status) => {
                    if (status === window.google.maps.DirectionsStatus.OK) {
                        setDirections(result);
                    } else {
                        setError('Rota hesaplanamadı. Lütfen başka bir konum deneyin.');
                    }
                }
            );
        }
    }, [origin, destination]);

    // Örnek yeni yolcu verisi
    const newPassenger = {
        name: 'John Doe',
        pickUpPoint: {
            lat: 40.7128,
            lng: -74.0060,
        },
    };

    // Yeni yolcu verisi ekleme işlemini gerçekleştiren işlev
    const addNewPassenger = () => {
        const newPassengers = [...enrichedPassengers, newPassenger];
        updatePassengers(newPassengers);
    };

    const onLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    return (
        <LoadScript googleMapsApiKey="AIzaSyCjcz9nsog-wunlvz_l5MQ2nTwv0sHzlNI">
            {/* <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}> */}
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad}>
                {origin && <Marker position={{ lat: origin.lat, lng: origin.lng }} />}
                {destination && <Marker position={{ lat: destination.lat, lng: destination.lng }} />}
                {enrichedPassengers.map((passenger, index) => (
                    <Marker
                        key={index}
                        position={{
                            lat: passenger.pickUpPoint.lat,
                            lng: passenger.pickUpPoint.lng,
                        }}
                    />
                ))}
                {directions && <DirectionsRenderer directions={directions} />}
                {/* Yeni yolcu ekleme işlemini tetiklemek için bir düğme ekleyebilirsiniz */}
                <button onClick={addNewPassenger}>
                </button>

            </GoogleMap>
        </LoadScript>
    );
};

export default React.memo(MapView);
