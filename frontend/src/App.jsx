import Home from './pages/client/HomePage';
import Stations from './pages/client/StationsPage';
import DashboardPage from './pages/admin/DashboardPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StationsProvider } from './context/StationsProvider';
import CreateStationsPage from './pages/admin/CreateStationsPage';
import ListStationsPage from './pages/admin/ListStationsPage';
import EditStationPage from './pages/admin/EditStationsPage';

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
          <Route path="/dashboard/updatestations/:slug" element={<EditStationPage/>}/>
        </Routes>
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
