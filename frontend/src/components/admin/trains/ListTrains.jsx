import { useContext } from "react";
import { TrainsContext } from "../../../context/trains/TrainsProvider";
import { useTrains } from "../../../hooks/useTrains"

const ListTrains = () => {

  const { TrainsState } = useContext(TrainsContext);
  const { useDeleteTrain } = useTrains()
  
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
        {TrainsState.trains.map((trains) => (
          <tr key={trains.id}>
            <th scope="row">{trains.id}</th>
            <td>{trains.name}</td>
            <td>{trains.desc}</td>
            <td>{trains.status}</td>
            <td><button><a href={'/dashboard/updatetrains/' + trains.slug}>Editar</a></button></td>
            <td><button onClick={() => useDeleteTrain(trains.slug)}>Borrar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default ListTrains;