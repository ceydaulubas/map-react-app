import { useRouting } from '../contexts/RoutingContext';

const RouteDetailView = () => {
    const { origin, destination, passengers, routeInfo } = useRouting();

    // Rota süresi, mesafe ve yolcuların ortalama süresini hesaplayın

    return (
        <div className="route-detail-view">
            <p>Toplam mesafe: {routeInfo ? routeInfo.distance.toFixed(2) : '-'} km</p>
            <p>Toplam süre: {routeInfo ? routeInfo.duration.toFixed(2) : '-'} saat</p>
            <p>Yolcu ortalama süresi: { } dk</p>
        </div>
    );
};

export default RouteDetailView;
