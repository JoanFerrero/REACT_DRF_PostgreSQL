import CreateStations from "../../components/admin/CreateStations";
import Header from "../../components/admin/Header";

const CreateStationsPage = () => {

  return (
    <div id="wrapper">
      <Header/>
      <div id="content-wrapper" className="d-flex flex-column" >
        <CreateStations/>
      </div>
    </div>
  )
};

export default CreateStationsPage;