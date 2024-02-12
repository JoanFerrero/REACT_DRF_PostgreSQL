const AsideProfile = ({name, setPage}) => {

  const changepage = (page) => {
    setPage(page)
  }

  return (
    <>
      <div>
        <div>
          <h6 className="p-1">{name}</h6>
          <ul className="list-group ul">
            <li className="li list-group-item list-group-item-action mb-2 rounded" onClick={() => changepage('profile')}>
              <a>
                <span className="fa fa-circle pr-1" id="red"></span>Perfil
              </a>
            </li>
            <li className="li list-group-item list-group-item-action mb-2 rounded" onClick={() => changepage('profile')}>
              <a>
                <span className="fa fa-circle pr-1" id="red"></span>Notificaciones
              </a>
            </li>
            <li className="li list-group-item list-group-item-action mb-2 rounded" onClick={() => changepage('bookings')}>
              <a>
                <span className="fa fa-circle pr-1" id="red"></span>Reservas
              </a>
            </li>
            <li className="li list-group-item list-group-item-action mb-2 rounded" onClick={() => changepage('profile')}>
              <a>
                <span className="fa fa-circle pr-1" id="red"></span>Incidencias
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default AsideProfile;