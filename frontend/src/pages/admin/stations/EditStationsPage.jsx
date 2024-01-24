import React from "react";
import EditStations from '../../../components/admin/stations/EditStations'
import Header from "../../../components/admin/Header";

const EditStationPage = () => {

  return (
    <div id="wrapper">
      <Header/>
      <div id="content-wrapper" className="d-flex flex-column" >
        <EditStations/>
      </div>
    </div>
  )
}

export default EditStationPage;