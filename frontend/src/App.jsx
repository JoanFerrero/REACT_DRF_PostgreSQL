import Header from './components/Header/Header';
import Home from './pages/client/HomePage';
import Stations from './pages/client/StationsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StationsProvider } from './context/StationsProvider';


function App() {

  return (
    <BrowserRouter>
      <StationsProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/stations' element={<Stations />} />
        </Routes>
      </StationsProvider>
    </BrowserRouter>
  )
}

export default App
