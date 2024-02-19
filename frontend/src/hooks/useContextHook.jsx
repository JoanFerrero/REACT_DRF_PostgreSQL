import { StationsContext } from "../context/stations/StationsProvider";
import { useContext, useEffect } from "react";
import { TrainsContext } from "../context/trains/TrainsProvider";
import { ChairsContext } from "../context/chairs/ChairsProvider";
import { AuthContext } from "../context/Auth/AuthProvider";
import { TripsContext } from "../context/trips/TripsProvider";
import StationsService from "../services/StationsServices";
import TrainsService from "../services/TrainsServices";
import ChairsService from "../services/ChairsServices";
import TripsService from "../services/TripsService";
import { useNotification } from "./useNotification";

export const useContextHook = () => {

  const { StationsDispatch, StationsState } = useContext(StationsContext);
  const { TrainsDispatch, TrainsState } = useContext(TrainsContext);
  const { ChairsDispatch, ChairsState } = useContext(ChairsContext);
  const { AuthDispatch, AuthState } = useContext(AuthContext);
  const { TripsDispatch, TripsState } = useContext(TripsContext);
  const { getNotifications } = useNotification()

  const setDataContexts = () => {
    if(AuthState.isAuth) {
      getNotifications()
    }
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

      if(TripsState.trips.length === 0) {
        TripsService.getAllTrips()
          .then(({data}) => {
            dispathCustom("SET_TRIPS", data, 'trips')
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
    } else if(context === 'auth') {
      AuthDispatch({
        type: type,
        payload: payload
      })
    } else if(context === 'trips') {
      TripsDispatch({
        type: type,
        payload: payload
      })
    }
  };

  return { dispathCustom, setDataContexts }
}