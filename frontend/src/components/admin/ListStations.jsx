import { useContext } from "react";
import { StationsContext } from "../../context/StationsProvider";
import { useContextHook } from "../../hooks/useContextHook";

const ListStations = () => {
  const { StationsState } = useContext(StationsContext);
  const { setDataStations } = useContextHook();

  setDataStations()
  
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        {StationsState.stations.map((station) => (
          <tr key={station.id}>
            <th scope="row">{station.id}</th>
            <td>{station.name}</td>
            <td>{station.desc}</td>
            <td>{station.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default ListStations;