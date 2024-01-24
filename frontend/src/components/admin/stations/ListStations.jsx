import { useContext } from "react";
import { StationsContext } from "../../../context/stations/StationsProvider";
import { useStations } from "../../../hooks/useStations";

const ListStations = () => {

  const { StationsState } = useContext(StationsContext);
  const { useDeleteStation } = useStations();
  
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Estado</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {StationsState.stations.map((station) => (
          <tr key={station.id}>
            <th scope="row">{station.id}</th>
            <td>{station.name}</td>
            <td>{station.desc}</td>
            <td>{station.status}</td>
            <td><button><a href={'/dashboard/updatestations/' + station.slug}>Editar</a></button></td>
            <td><button onClick={() => useDeleteStation(station.slug)}>Borrar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default ListStations;