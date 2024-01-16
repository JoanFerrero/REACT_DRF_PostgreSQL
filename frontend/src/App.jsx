import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/client/HomePage';
import Stations from './pages/client/StationsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/stations' element={<Stations />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
