import { useCallback, useState } from "react";

export const useProfile = () => {
  const [page, setpage ] = useState('profile');

  const useChangePage = useCallback(data => {
    setpage(data)
  }, [])
  
  return { useChangePage, page }
}