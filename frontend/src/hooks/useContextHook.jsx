import { StationsContext } from "../context/stations/StationsProvider";
import { useContext, useEffect } from "react";
import StationsService from "../services/StationsServices";
import TrainsService from "../services/TrainsServices";
import { TrainsContext } from "../context/trains/TrainsProvider";
import { ChairsContext } from "../context/chairs/ChairsProvider";
import ChairsService from "../services/ChairsServices";

export const useContextHook = () => {

  const { StationsDispatch, StationsState } = useContext(StationsContext);
  const { TrainsDispatch, TrainsState } = useContext(TrainsContext);
  const { ChairsDispatch, ChairsState } = useContext(ChairsContext);

  const setDataContexts = () => {
    useEffect(() => {
      if(StationsState.stations.length === 0) {
        StationsService.getAllStations()
          .then(({data}) => {
            dispathCustom("SET_STATIONS", data, 'stations')
          })
        .catch(e => console.error(e));
      };

      if(TrainsState.trains.length === 0) {
        TrainsService.getAllTrains()
          .then(({data}) => {
            dispathCustom("SET_TRAINS", data, 'trains')
          })
        .catch(e => console.error(e));
      };

      if(ChairsState.chairs.length === 0) {
        ChairsService.getAllChairs()
          .then(({data}) => {
            dispathCustom("SET_CHAIRS", data, 'chairs')
          })
      }
    }, [])
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
    } else if (context === 'chairs') {
      ChairsDispatch({
        type: type,
        payload: payload,
      })
    }
  };

  return { dispathCustom, setDataContexts }
}