import { useCallback, useState } from "react";
import IncidentsService from "../services/IncidentsServices";


export const useIncidents = () => {
  const [incidents, setIncidents] = useState([])

  const useSetIncidents = () => {
    IncidentsService.getIncidents()
      .then(({data, status}) => {
        if (status === 200) {
          setIncidents(data)
        }
    }).catch(e => {
      console.error(e);
    });
  }
  
  return { useSetIncidents, incidents }
}