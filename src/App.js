import logo from './logo.svg';
import './App.css';
import { RoutingProvider } from './contexts/RoutingContext';
import { MapView, TableView, RouteDetailView, PassengerForm } from './components';

function App() {
  return (
    <RoutingProvider>
      <div className="app">
        <h1>Passinger Routing App</h1>
        <PassengerForm />
        <div className="app-views">
          <MapView />
          <TableView />
          <RouteDetailView />
        </div>
      </div>
    </RoutingProvider>
  );
}

export default App;
