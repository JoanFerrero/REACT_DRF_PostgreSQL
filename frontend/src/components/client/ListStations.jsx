import {useContext, useEffect} from "react";
import CardStations from './CardStations'
import Search from "./Search";
import { StationsContext } from "../../context/StationsProvider";
import { useContextHook } from "../../hooks/useContextHook";

const ListStations = () => {

  const { StationsState } = useContext(StationsContext);
  const { setDataStations } = useContextHook();

  setDataStations();

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