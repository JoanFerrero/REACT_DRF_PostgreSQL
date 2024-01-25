import Header from "../../../components/admin/Header";
import CreateChairs from "../../../components/admin/chairs/CreateChairs"

const CreateChairsPage = () => {

  return (
    <div id="wrapper">
      <Header/>
      <div id="content-wrapper" className="d-flex flex-column" >
        <CreateChairs/>
      </div>
    </div>
  )
};

export default CreateChairsPage;