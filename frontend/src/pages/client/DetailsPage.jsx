import { useEffect } from "react";
import Tren from "../../components/client/DetailsTrain"
import { useTrips } from "../../hooks/useTrips"
const DetailsPage = () => {
  const { useOneTrain, trip} = useTrips();

  useEffect(() => {
    useOneTrain(2)
  }, [])

  return (
    trip !== undefined ? (
      <Tren trip={trip}/>
    ): (
      <h1>Cargando</h1>
    )
  )
}
  
export default DetailsPage