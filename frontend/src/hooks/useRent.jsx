import { useCallback } from "react";
import RentService from "../services/RentServices";

export const useRent = () => {
  const useCreateRent = useCallback(data => {
    RentService.postRent(data)
      .then(({data, status }) => {
        if (status === 200) {
          console.log(data)
        }
    }).catch(e => {
      console.error(e);
    });
  }, [])
  
  return { useCreateRent }
}