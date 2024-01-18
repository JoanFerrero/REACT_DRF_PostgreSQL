import Home from './pages/client/HomePage';
import Stations from './pages/client/StationsPage';
import DashboardPage from './pages/admin/DashboardPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StationsProvider } from './context/StationsProvider';
import CreateStationsPage from './pages/admin/CreateStationsPage';
import ListStationsPage from './pages/admin/ListStationsPage';


function App() {
  return (
    <BrowserRouter>
      <StationsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/stations' element={<Stations />} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/dashboard/createstations" element={<CreateStationsPage/>} />
          <Route path="/dashboard/liststations" element={<ListStationsPage/>} />
        </Routes>
      </StationsProvider>
    </BrowserRouter>
  )
}

export default App
