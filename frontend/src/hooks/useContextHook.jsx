import { StationsContext } from "../context/stations/StationsProvider";
import { useContext, useEffect } from "react";
import StationsService from "../services/StationsServices";
import TrainsService from "../services/TrainsServices";
import { TrainsContext } from "../context/trains/TrainsProvider";

export const useContextHook = () => {

  const { StationsDispatch, StationsState } = useContext(StationsContext);
  const { TrainsDispatch, TrainsState } = useContext(TrainsContext);

  const setDataStations = () => {
    if(StationsState.stations.length === 0) {
      useEffect(() => {
        StationsService.getAllStations()
          .then(({data}) => {
            dispathCustom("SET_STATIONS", data, 'stations')
          })
        .catch(e => console.error(e));
      }, [])
    };
  };

  const setDataTrains = () => {
    if(TrainsState.trains.length === 0) {
      useEffect(() => {
        TrainsService.getAllTrains()
          .then(({data}) => {
            dispathCustom("SET_TRAINS", data, 'trains')
          })
        .catch(e => console.error(e));
      }, [])
    };
  }

  const dispathCustom = (type, payload, context) => {
    if(context === 'stations') {
      StationsDispatch({
        type: type,
        payload: payload,
      })
    } else if (context === 'trains') {
      TrainsDispatch({
        type: type,
        payload: payload,
      })
    }
  };

  return { dispathCustom, setDataStations, setDataTrains }
}