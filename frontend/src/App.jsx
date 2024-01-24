import Home from './pages/client/HomePage';
import DashboardPage from './pages/admin/DashboardPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { StationsProvider } from './context/stations/StationsProvider';
import { TrainsProvider } from './context/trains/TrainsProvider';

import Stations from './pages/client/StationsPage';
import CreateStationsPage from './pages/admin/stations/CreateStationsPage';
import ListStationsPage from './pages/admin/stations/ListStationsPage';
import EditStationPage from './pages/admin/stations/EditStationsPage';

import ListTrainsPage from './pages/admin/trains/ListTrainsPage';
import CreateTrainsPage from './pages/admin/trains/CreateTrainsPage';
import EditTrainsPage from './pages/admin/trains/EditTrainsPage';

function App() { 
  return (
    <BrowserRouter>
      <StationsProvider>
        <TrainsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/stations' element={<Stations />} />
            <Route path="/dashboard" element={<DashboardPage/>} />

            <Route path="/dashboard/createstations" element={<CreateStationsPage/>} />
            <Route path="/dashboard/liststations" element={<ListStationsPage/>} />
            <Route path="/dashboard/updatestations/:slug" element={<EditStationPage/>} />

            <Route path="/dashboard/listtrains" element={<ListTrainsPage />} />
            <Route path="/dashboard/createtrains" element={<CreateTrainsPage />} />
            <Route path="/dashboard/updatetrains/:slug" element={<EditTrainsPage />} />
          </Routes>
        </TrainsProvider>
      </StationsProvider>
    </BrowserRouter>
  )
}

export default App

//**import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { StationsProvider } from './context/StationsProvider';
//import React, { Suspense } from 'react';

//const Home = React.lazy(() => import('./pages/client/HomePage'));
//const Stations = React.lazy(() => import('./pages/client/StationsPage'));
//const DashboardPage = React.lazy(() => import('./pages/admin/DashboardPage'));

//const CreateStationsPage = React.lazy(() => import('./pages/admin/CreateStationsPage'));
//const ListStationsPage = React.lazy(() => import('./pages/admin/ListStationsPage'));
//const EditStationPage = React.lazy(() => import('./pages/admin/EditStationsPage'));

//function App() { 
//  return (
    //<Suspense>
      //<BrowserRouter>
        //<StationsProvider>
          //<Routes>
            //<Route path="/" element={<Home />} />
            //<Route path='/stations' element={<Stations />} />
            //<Route path="/dashboard" element={<DashboardPage/>} />
            //<Route path="/dashboard/createstations" element={<CreateStationsPage/>} />
            //<Route path="/dashboard/liststations" element={<ListStationsPage/>} />
            //<Route path="/dashboard/updatestations/:slug" element={<EditStationPage/>}/>
          //</Routes>
        //</StationsProvider>
      //</BrowserRouter>
  //</Suspense>
//  )
//}

//export default App
