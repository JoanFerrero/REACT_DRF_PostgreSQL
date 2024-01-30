import {useContext, useEffect} from "react";
import CardStations from './CardStations'
import Search from "./Search";
import { StationsContext } from "../../context/stations/StationsProvider";

const ListStations = () => {

  const { StationsState } = useContext(StationsContext);

  return (
    <>
      <Search />
      {StationsState.stations.length !== 0 ? (
        StationsState.stations.map((station) => (
          <CardStations key={station.id} station={station}/>
        ))
      ) : (
        <h1>No existen Estaciones</h1>
      )}
    </>
  )
};

export default ListStations;