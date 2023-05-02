import { useRouting } from '../contexts/RoutingContext';

const RouteDetailView = () => {
    const { origin, destination, passengers } = useRouting();

    // Rota süresi, mesafe ve yolcuların ortalama süresini hesaplayın

    return (
        <div className="route-detail-view">
            <p>Toplam mesafe: { } km</p>
            <p>Toplam süre: { } saat</p>
            <p>Yolcu ortalama süresi: { } dk</p>
        </div>
    );
};

export default RouteDetailView;
