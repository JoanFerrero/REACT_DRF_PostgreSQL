import ListTrips from "../../components/client/lists/ListTrips";
import MapStations from "../../components/client/cards/MapStations";
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