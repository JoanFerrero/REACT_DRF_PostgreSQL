import Header from "../../../components/admin/Header";
import CreateTrains from "../../../components/admin/trains/CreateTrains";

const CreateTrainsPage = () => {

  return (
    <div id="wrapper">
      <Header/>
      <div id="content-wrapper" className="d-flex flex-column" >
        <CreateTrains/>
      </div>
    </div>
  )
};

export default CreateTrainsPage;