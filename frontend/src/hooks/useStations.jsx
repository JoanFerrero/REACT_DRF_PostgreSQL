import { useCallback, useContext } from "react"
import StationsService from "../services/StationsServices"
import { useContextHook } from "./useContextHook"
import { StationsContext } from "../context/StationsProvider"
export const useStations = () => {
  const { dispathCustom } = useContextHook()
  const { StationsState } = useContext(StationsContext);
  
  const useAddStations = useCallback(data => {
    const station = {
      "name": data.name,
      "desc": data.desc,
      "image": data.image,
      "status": data.status,
    }
    StationsService.createStations(station)
      .then(({ data, status }) => {
        if (status === 200) {
          dispathCustom('ADD_STATIONS', data)
        }
    })
    .catch(e => {
      console.error(e);
    });
  }, [])
  
  return { useAddStations }
}