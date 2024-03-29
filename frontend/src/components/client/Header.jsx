import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContextHook } from "../../hooks/useContextHook";
import { AuthContext } from "../../context/Auth/AuthProvider";
import { useAuth } from "../../hooks/useAuth";
import { NotificationsContext } from "../../context/Notifications/NotificationsProvider";
import NotificationHeader from "./notifications/NotificationHeader";


const Header = () => {
  const navigate = useNavigate();
  const { setDataContexts, getNotification } = useContextHook();
  const { useLogOutUser} = useAuth();
  const [notificate, setNotificate] = useState(false);
  const { NotificationsState } = useContext(NotificationsContext);
  const { AuthState } = useContext(AuthContext);

  setDataContexts()

  const redirects = {
    home: () => navigate('/'),
    trips: () => navigate('/trips'),
    dashboard: () => navigate('/dashboard'),
    login: () => navigate('/login'),
    register: () => navigate('/register'),
    profile: () => navigate('/profile'),
  }

  const logout = () => {
    useLogOutUser()
  }

  useEffect(() => {
    if(AuthState.isAuth) {
      getNotification()
    }
  }, [AuthState.isAuth])

  const isUser = AuthState.isAuth ? (
    <>
      <a className="nav-link" onClick={() => redirects.profile()}>Profile</a>
      <div className="position-relative">
        <img src="https://i.pinimg.com/originals/6f/57/76/6f57760966a796644b8cfb0fbc449843.png" alt="Imagen de perfil" className="rounded-circle" style={{ width: '32px', height: '32px' }} onClick={() => setNotificate(!notificate)} />
        {notificate === false ? (
          <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-danger">
            {NotificationsState.countNotSeen}
          </span>
        ): (
          <div className="position-absolute end-0  p-2" style={{ zIndex: 1000 }}>
            <ul className="list-group">
              {NotificationsState.notificationsNotSeen.map(data => (
                <NotificationHeader data={data} key={data.id}/>
              ))}
            </ul>
          </div>
        )}
      </div>
      <a className="nav-link" onClick={() => logout()}>Log out</a>
    </>
  ) : (              
    <>
      <a className="nav-link" onClick={() => redirects.register()}>Register</a>
      <a className="nav-link" onClick={() => redirects.login()}>Login</a>
    </>
  );

  const isAdminUser = AuthState.isAdmin ? <a className="nav-link" onClick={() => redirects.dashboard()}>Dashboard</a> : '';

  return (
    <nav className="navbar navbar-expand-md bg-dark border-bottom" data-bs-theme="dark">
      <div className="container">
        <div className="offcanvas offcanvas-end">
          <div className="offcanvas-body">
            <ul className="navbar-nav flex-grow-1 justify-content-between">
              <li className="nav-item">
                <a className="nav-link" onClick={() => redirects.home()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-train-freight-front" viewBox="0 0 16 16">
                    <path d="M5.065.158A1.5 1.5 0 0 1 5.736 0h4.528a1.5 1.5 0 0 1 .67.158l3.237 1.618a1.5 1.5 0 0 1 .83 1.342V13.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V3.118a1.5 1.5 0 0 1 .828-1.342zM2 9.372V13.5A1.5 1.5 0 0 0 3.5 15h4V8h-.853a.5.5 0 0 0-.144.021zM8.5 15h4a1.5 1.5 0 0 0 1.5-1.5V9.372l-4.503-1.35A.5.5 0 0 0 9.353 8H8.5zM14 8.328v-5.21a.5.5 0 0 0-.276-.447l-3.236-1.618A.5.5 0 0 0 10.264 1H5.736a.5.5 0 0 0-.223.053L2.277 2.67A.5.5 0 0 0 2 3.118v5.21l1-.3V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.028zm-2-.6V5H8.5v2h.853a1.5 1.5 0 0 1 .431.063zM7.5 7V5H4v2.728l2.216-.665A1.5 1.5 0 0 1 6.646 7zm-1-5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-3 8a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m9 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M5 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                  </svg>
                </a>
              </li>
              <a className="nav-link" onClick={() => redirects.home()}>Home</a>
              <a className="nav-link" onClick={() => redirects.trips()}>Trips</a>
              {isAdminUser}
              {isUser}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;