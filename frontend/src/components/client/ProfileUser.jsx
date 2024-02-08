import { useEffect, useContext } from "react";
import { useRent } from "../../hooks/useRent";
import { AuthContext } from "../../context/Auth/AuthProvider";
import { ChairsContext } from "../../context/chairs/ChairsProvider";

const ProfileUser = () => {
  const  { rents, useSetRent } = useRent();
  useEffect(() => {
    useSetRent();
  }, [])
  console.log(rents)
  //Queda hacer que los datos se muestren de forma reactiva si tiene reservas

  const { AuthState } = useContext(AuthContext);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top" alt="Imagen de perfil" />
            <div className="card-body">
              <h5 className="card-title">{AuthState.user.username}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Detalles del Perfil</h5>
              <ul className="list-group">
                <li className="list-group-item">Correo Electrónico: {AuthState.user.email}</li>
                <li className="list-group-item">Tipo: {AuthState.user.type}</li>
              </ul>
            </div>
          </div>
          {rents !== undefined && rents.length > 0 ? (
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Reservas</h5>
                {rents.map((rent) => (
                  <ul className="list-group mt-2">
                    <li className="list-group-item">Desde {rent.trip.exit_station.name} - Hasta {rent.trip.arrival_station.name}</li>
                    <li className="list-group-item">Silla {rent.chair.type}</li>
                    <li className="list-group-item">Nombre tren: {rent.train.name}</li>
                    <li className="list-group-item">Precio:
                      {rent.chair.type === 'premium' ? ' 30' : null}
                      {rent.chair.type === 'medio' ? ' 20' : null}
                      {rent.chair.type === 'basico' ? ' 10' : null}
                      €
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          ) : null }
        </div>
      </div>
    </div>
  )
}

export default ProfileUser