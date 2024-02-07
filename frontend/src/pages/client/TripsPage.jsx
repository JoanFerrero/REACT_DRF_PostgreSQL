import ListTrips from "../../components/client/ListTrips";
import MapStations from "../../components/client/MapStations";
const TripsPage = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm">
          <ListTrips />
        </div>
        <div className="col-sm">
          <MapStations />
        </div>
      </div>
    </>
  )
}
  
export default TripsPage