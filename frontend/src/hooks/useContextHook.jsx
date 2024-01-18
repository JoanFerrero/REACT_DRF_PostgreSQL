import { StationsContext } from "../context/StationsProvider";
import { useContext, useEffect } from "react";
import StationsService from "../services/StationsServices";

export const useContextHook = () => {

  const { StationsDispatch, StationsState } = useContext(StationsContext);

  const setDataStations = () => {
    if(StationsState.stations.length === 0) {
      useEffect(() => {
        StationsService.getAllStations()
          .then(({data}) => {
            dispathCustom("SET_STATIONS", data)
          })
        .catch(e => console.error(e));
      }, [])
    };
  };

  const dispathCustom = (type, payload) => {
    StationsDispatch({
      type: type,
      payload: payload,
    })
  };

  return { dispathCustom, setDataStations }
}