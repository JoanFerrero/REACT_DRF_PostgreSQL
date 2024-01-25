import React from "react";
import Header from "../../../components/admin/Header";
import EditChairs from "../../../components/admin/chairs/EditChairs";

const EditChairPage = () => {

  return (
    <div id="wrapper">
      <Header/>
      <div id="content-wrapper" className="d-flex flex-column" >
        <EditChairs/>
      </div>
    </div>
  )
}

export default EditChairPage;