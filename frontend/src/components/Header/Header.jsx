import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const redirects = {
    home: () => navigate('/'),
    stations: () => navigate('stations')
  }

  return (
    <nav className="navbar navbar-expand-md bg-dark border-bottom" data-bs-theme="dark">
      <div className="container">
        <div className="offcanvas offcanvas-end">
          <div className="offcanvas-body">
            <ul className="navbar-nav flex-grow-1 justify-content-between">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bicycle" viewBox="0 0 16 16">
                      <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5m1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139zM8 9.057 9.598 6.5H6.402zM4.937 9.5a2 2 0 0 0-.487-.877l-.548.877zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53z"/>
                  </svg>
                </a>
              </li>
              <a className="nav-link" onClick={() => redirects.home()}>Home</a>
              <a className="nav-link" onClick={() => redirects.stations()}>Stations</a>
              <a className="nav-link" onClick={() => redirects.stations()}>Register</a>
              <a className="nav-link" onClick={() => redirects.stations()}>Login</a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;