import ListStations from '../../components/client/ListStations'
import MapStations from "../../components/client/MapStations";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm">
          <ListStations />
        </div>
        <div className="col-sm">
          <MapStations />
        </div>
      </div>
    </>
  )
}
  
export default Home