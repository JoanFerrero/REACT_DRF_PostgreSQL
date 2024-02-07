import {useContext} from "react";
import CardTrips from './CardTrips'
import Search from "./Search";
import { TripsContext } from "../../context/trips/TripsProvider";

const ListTrips = () => {

  const { TripsState } = useContext(TripsContext);

  return (
    <>
      <Search />
      {TripsState.trips.length !== 0 ? (
        TripsState.trips.map((trip) => (
          <CardTrips key={trip.id} trip={trip}/>
        ))
      ) : (
        <h1>No existen viajes</h1>
      )}
    </>
  )
};

export default ListTrips;