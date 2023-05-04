
import './App.css';
import { RoutingProvider } from './contexts/RoutingContext';
import { MapView, TableView, RouteDetailView, PassengerForm, NavBar } from './components';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <RoutingProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<PassengerForm />} />
          <Route path="/mapView" element={<MapView />} />
          <Route path="/tableView" element={<TableView />} />
          <Route path="/detail" element={<RouteDetailView />} />
        </Routes>
      </BrowserRouter>


    </RoutingProvider>
  );
}

export default App;

