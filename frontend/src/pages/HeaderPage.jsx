import { AuthContext } from "../context/Auth/AuthProvider";
import Header from "../components/client/Header";
import HeaderDashBoard from "../components/admin/Header";
import { useContext, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useContextHook } from "../hooks/useContextHook";

const HeaderPage = ({ children }) => {
  const { AuthState } = useContext(AuthContext);
  const location = useLocation();
  const urlParts = location.pathname.split('/');
  const { dispathCustom } = useContextHook()

  useEffect(() => {
    if(urlParts[1] === 'dashboard') {
      dispathCustom('SET_SITE', true, 'auth');
    }
  }, [])

  return (
    <>
      {AuthState.dashboard === true ? (
        <>
          <div id="wrapper">
            <HeaderDashBoard />
            {children}
          </div>
        </>
      ) : (
        <>
          <Header />
          {children}
        </>
      )}
    </>
  )
}

export default HeaderPage;