import {useContext} from "react";
import CardStations from './CardStations'
import Search from "./Search";
import { StationsContext } from "../../context/StationsProvider";

const ListStations = () => {

  const { StationsState } = useContext(StationsContext)

  return (
    <>
      <Search />
      {StationsState.stations.map((station) => (
        <CardStations key={station.id} station={station}/>
      ))}
    </>
  )
};

export default ListStations;