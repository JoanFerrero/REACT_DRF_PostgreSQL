import { useCallback, useState } from "react";
import IncidentsService from "../services/IncidentsServices";


export const useIncidents = () => {
  const [incidents, setIncidents] = useState([])

  const useSetIncidents = useCallback(() => {
    IncidentsService.getIncidents()
      .then(({data, status}) => {
        if (status === 200) {
          setIncidents(data)
        }
    }).catch(e => {
      console.error(e);
    });
  }, [])

  const usePostIncidents = useCallback((data) => {
    console.log(data)
  }, [])
  
  return { useSetIncidents, incidents, usePostIncidents }
}