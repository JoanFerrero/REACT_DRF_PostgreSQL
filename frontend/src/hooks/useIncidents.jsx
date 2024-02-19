import { useCallback, useState } from "react";
import IncidentsService from "../services/IncidentsServices";
import toast from 'react-hot-toast';

export const useIncidents = () => {
  const [incidentsT, setIncidentsT] = useState([])
  const [incidentsC, setIncidentsC] = useState([])

  const useSetIncidents = useCallback(() => {
    IncidentsService.getIncidentTrain()
      .then(({data, status}) => {
        if (status === 200) {
          setIncidentsT( data)
        }
    }).catch(e => {
      console.error(e);
    });

    IncidentsService.getIncidentChair()
      .then(({data, status}) => {
        if (status === 200) {
          setIncidentsC(data)
          navigate('/profile');
        }
    }).catch(e => {
      console.error(e);
    });
  }, [])

  

  const usePostIncidents = useCallback((data) => {
    if( data.option === 'chair') {
      const incidentC = {
        title: data.title,
        desc: data.desc,
        chair: data.data.chair.slug
      }
      IncidentsService.postIncidentChair(incidentC)
        .then(({data, status}) => {
          if (status === 200) {
            toast.success('Incidencia creada correctamente!!');
            window.location.reload();
          }
      }).catch(e => {
        console.error(e);
      });
    } else if(data.option === 'train') {
      const incidentT = {
        title: data.title,
        desc: data.desc,
        train: data.data.train.slug
      }
      IncidentsService.postIncidentTrain(incidentT)
        .then(({data, status}) => {
          if (status === 200) {
            toast.success('Incidencia creada correctamente!!');
            window.location.reload();
          }
      }).catch(e => {
        console.error(e);
      });
    }
  }, [])
  
  return { useSetIncidents, incidentsC, incidentsT, usePostIncidents }
}