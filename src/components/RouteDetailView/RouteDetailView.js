import { useRouting } from '../../contexts/RoutingContext';
import { Card, Title, Info, Label } from "./RouteDetailView.sc"

const RouteDetailView = () => {
    const { routeInfo } = useRouting();
    const passengerAverageDuration = '';

    return (
        <Card>
            <Title>Passenger Details</Title>
            <Info>
                <Label>Name:</Label> {routeInfo && routeInfo.name}
            </Info>
            <Info>
                <Label>Current Location:</Label> {routeInfo && routeInfo.currentLocation}
            </Info>
            <Info>
                <Label>Destination:</Label> {routeInfo && routeInfo.destination}
            </Info>
            <Info>
                <Label>Total Distance:</Label> {routeInfo && routeInfo.distance.toFixed(2)} km
            </Info>
            <Info>
                <Label>Total Duration:</Label> {routeInfo && routeInfo.duration.toFixed(2)} saat
            </Info>
            <Info>
                <Label>Passenger Avg Duration:</Label> {passengerAverageDuration} dk
            </Info>
        </Card>
    );
};

export default RouteDetailView;
