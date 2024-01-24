import Header from "../../components/admin/Header";
import ListStations from "../../components/admin/ListStations";
import { useContextHook } from "../../hooks/useContextHook";

const ListStationsPage = () => {
  const { setDataStations } = useContextHook();
  setDataStations()
  return (
    <div id="wrapper">
      <Header/>
      <div id="content-wrapper" className="d-flex flex-column" >
        <div className="container mt-2">
          <div className="col-lg-12">
            <div className="card shadow mb-4">
              <a className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
                <h6 className="m-0 font-weight-bold text-primary">Creacion Estaciones</h6>
              </a>
              <div className="collapse show" id="collapseCardExample">
                <div className="col-xl-3 col-md-6 mb-4">
                  <ListStations />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ListStationsPage;