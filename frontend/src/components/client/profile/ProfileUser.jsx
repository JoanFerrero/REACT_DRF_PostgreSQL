import { useEffect, useContext, useState } from "react";
import { useRent } from "../../../hooks/useRent";
import { AuthContext } from "../../../context/Auth/AuthProvider";
import AsideProfile from "./AsideProfile";
import { useProfile } from "../../../hooks/useProfile";
import Bookings from "./Bookings";
import DataProfile from "./DataProfile";
import { useIncidents } from "../../../hooks/useIncidents";
import Incidents from "./Incidents";

const ProfileUser = () => {
  const { page, useChangePage } = useProfile();
  const { rents, useSetRent } = useRent();
  const { incidents, useSetIncidents} = useIncidents();

  useEffect(() => {
    useSetRent();
    useSetIncidents();
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
                <>
                  {rents.map((rent) => (
                    <Bookings rent={rent} key={rent.id}/>
                  ))}
                </>
              ) : null }
            </>
          ) : null}
          {page === 'incidents' ? (
            <>
              {incidents !== undefined && incidents.length > 0 ? (
                <>
                  {incidents.map((incident) => (
                    <Incidents incident={incident} key={incident.id}/>
                  ))}
                </>
              ) : null }
            </>
          ): null}
        </div>
      </div>
    </div>
  )
}

export default ProfileUser