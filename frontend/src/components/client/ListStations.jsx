import React from "react";
import CardStations from './CardStations'
import Search from "./Search";

const ListStations = () => {

  const stations = [
    {id: 1, nombre: "valencia", descripcion: "Descripcion"},
    {id: 2, nombre: "Madrid", descripcion: "Descripcion"},
    {id: 3, nombre: "Malaga", descripcion: "Descripcion"}
  ];


  return (
    <>
      <Search />
      {stations.map((station) => (
        <CardStations key={station.id} station={station}/>
      ))}
    </>
  )
};

export default ListStations;