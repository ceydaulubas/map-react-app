import { getDistance } from 'geolib';


export const enrichPassengerData = async (passengers, origin, destination) => {
    // Fetch the route data from the Directions API
    const directionsService = new window.google.maps.DirectionsService();

    console.log("passengers", passengers)
    const enrichedData = await Promise.all(
        passengers.map(async (passenger, index) => {
            return new Promise((resolve) => {
                directionsService.route(
                    {
                        origin: { lat: passenger.pickUpPoint.lat, lng: passenger.pickUpPoint.lng },
                        destination: { lat: destination.lat, lng: destination.lng },
                        travelMode: window.google.maps.TravelMode.DRIVING,
                    },
                    (result, status) => {
                        if (status === window.google.maps.DirectionsStatus.OK) {
                            const tripDuration = result.routes[0].legs[0].duration.value / 60; // Convert to minutes
                            resolve({
                                ...passenger,
                                pickUpPointOrder: index,
                                tripDuration: tripDuration,
                            });
                        } else {
                            resolve({
                                ...passenger,
                                pickUpPointOrder: index,
                                tripDuration: null,
                            });
                        }
                    }
                );
            });
        })
    );

    return enrichedData;
};
