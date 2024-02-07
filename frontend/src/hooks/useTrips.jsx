import { useCallback, useState, useContext } from "react";
import TrainsService from "../services/TrainsServices";
import { useContextHook } from "./useContextHook";
import { useNavigate } from "react-router-dom";
import { StationsContext } from "../context/stations/StationsProvider";

export const useTrips = () => {
  const navigate = useNavigate()
  const { dispathCustom } = useContextHook()
  const [ exit, setExit ] = useState({});
  const [ arrival, setArrival ] = useState({});
  const { StationsState } = useContext(StationsContext);

  const useAddTrains = useCallback(data => {
    const train = {
      "name": data.name,
      "desc": data.desc,
      "image": data.image,
      "status": data.status,
    }
    TrainsService.createTrains(train)
      .then(({ data, status }) => {
        if (status === 200) {
          dispathCustom('ADD_TRAIN', data, 'trains')
          navigate('/dashboard/listtrains')
        }
    }).catch(e => {
      console.error(e);
    });
  }, [])

  const useSetStations = useCallback(data => {
    setExit(StationsState.stations.find(station => station.id === data.exit))
    setArrival(StationsState.stations.find(station => station.id === data.arrival))
  }, [])
  
  return { useAddTrains, useSetStations, exit, arrival }
}