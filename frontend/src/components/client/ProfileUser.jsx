import { useEffect, useContext, useState } from "react";
import { useRent } from "../../hooks/useRent";
import { AuthContext } from "../../context/Auth/AuthProvider";
import AsideProfile from "./profile/AsideProfile";
import { useProfile } from "../../hooks/useProfile";
import Bookings from "./profile/Bookings";
import DataProfile from "./profile/DataProfile";

const ProfileUser = () => {
  const { page, useChangePage} = useProfile();
  const  { rents, useSetRent } = useRent();
  
  useEffect(() => {
    useSetRent();
  }, [])

  const { AuthState } = useContext(AuthContext);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <AsideProfile name={AuthState.user.username} setPage={(data) => useChangePage(data)}/>
        </div>
        <div className="col-md-8">
          {page === 'profile' ? (
            <>
              <DataProfile profile={AuthState.user} />
            </>
          ):null}
          {page === 'bookings' ? (
            <>
              {rents !== undefined && rents.length > 0 ? (
                <Bookings rents={rents}/>
              ) : null }
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ProfileUser