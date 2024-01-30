import HomePage from './pages/client/HomePage';
import DashboardPage from './pages/admin/DashboardPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { StationsProvider } from './context/stations/StationsProvider';
import { TrainsProvider } from './context/trains/TrainsProvider';
import { ChairsProvider } from './context/chairs/ChairsProvider';

import Stations from './pages/client/StationsPage';
import CreateStationsPage from './pages/admin/stations/CreateStationsPage';
import ListStationsPage from './pages/admin/stations/ListStationsPage';
import EditStationPage from './pages/admin/stations/EditStationsPage';

import ListTrainsPage from './pages/admin/trains/ListTrainsPage';
import CreateTrainsPage from './pages/admin/trains/CreateTrainsPage';
import EditTrainsPage from './pages/admin/trains/EditTrainsPage';

import ListChairsPage from './pages/admin/chairs/ListChairsPage';
import CreateChairsPage from './pages/admin/chairs/CreateChairsPage';
import EditChairsPage from './pages/admin/chairs/EditChairsPage';

import LoginPage from './pages/client/LoginPage';
import RegisterPage from './pages/client/RegisterPage';

function App() { 
  return (
    <BrowserRouter>
      <StationsProvider>
        <TrainsProvider>
          <ChairsProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/stations" element={<Stations />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />

              <Route path="/dashboard" element={<DashboardPage/>} />

              <Route path="/dashboard/createstations" element={<CreateStationsPage/>} />
              <Route path="/dashboard/liststations" element={<ListStationsPage/>} />
              <Route path="/dashboard/updatestations/:slug" element={<EditStationPage/>} />

              <Route path="/dashboard/listtrains" element={<ListTrainsPage />} />
              <Route path="/dashboard/createtrains" element={<CreateTrainsPage />} />
              <Route path="/dashboard/updatetrains/:slug" element={<EditTrainsPage />} />

              <Route path="/dashboard/listchairs" element={<ListChairsPage />} />
              <Route path="/dashboard/createchairs" element={<CreateChairsPage />} />
              <Route path="/dashboard/updatechairs/:slug" element={<EditChairsPage />} />
            </Routes>
          </ChairsProvider>
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
