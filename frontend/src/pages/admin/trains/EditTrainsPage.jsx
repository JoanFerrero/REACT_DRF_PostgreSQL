import React from "react";
import Header from "../../../components/admin/Header";
import EditTrains from "../../../components/admin/trains/EditTrains";

const EditTrainsPage = () => {

  return (
    <div id="wrapper">
      <Header/>
      <div id="content-wrapper" className="d-flex flex-column" >
        <EditTrains/>
      </div>
    </div>
  )
}

export default EditTrainsPage;