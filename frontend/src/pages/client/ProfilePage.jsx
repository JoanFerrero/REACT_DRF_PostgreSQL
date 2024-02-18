import { AuthContext } from "../../context/Auth/AuthProvider";
import { useContext } from "react";
const ProfilePage = () => {
  const { AuthState } = useContext(AuthContext)
  return (
    <>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage;