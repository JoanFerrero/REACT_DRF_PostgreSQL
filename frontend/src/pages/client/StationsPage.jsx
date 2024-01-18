import ListStations from '../../components/client/ListStations'
import MapStations from "../../components/client/MapStations";
import Header from "../../components/client/Header";
const Home = () => {
  return (
    <>
      <Header />
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