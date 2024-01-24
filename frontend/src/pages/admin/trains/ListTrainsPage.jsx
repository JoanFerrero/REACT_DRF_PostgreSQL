import Header from "../../../components/admin/Header";
import ListTrains from "../../../components/admin/trains/ListTrains";

import { useContextHook } from "../../../hooks/useContextHook";

const ListTrainsPage = () => {
  const { setDataTrains } = useContextHook();

  setDataTrains()

  return (
    <div id="wrapper">
      <Header/>
      <div id="content-wrapper" className="d-flex flex-column" >
        <div className="container mt-2">
          <div className="col-lg-12">
            <div className="card shadow mb-4">
              <a className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
                <h6 className="m-0 font-weight-bold text-primary">Lista Trenes</h6>
              </a>
              <div className="collapse show" id="collapseCardExample">
                <div className="col-xl-3 col-md-6 mb-4">
                  <ListTrains />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ListTrainsPage;