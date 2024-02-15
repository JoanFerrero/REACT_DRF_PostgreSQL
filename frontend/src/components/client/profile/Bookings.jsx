const Bookings = ({rent}) => {
  return (
    <>
      <ul className="list-group mt-2" key={rent.id}>
        <li className="list-group-item">Desde {rent.trip.exit_station.name} - Hasta {rent.trip.arrival_station.name}</li>
        <li className="list-group-item">Silla {rent.chair.type}</li>
        <li className="list-group-item">Nombre tren: {rent.train.name}</li>
        <li className="list-group-item">Precio:
          {rent.chair.type === 'premium' ? ' 30' : null}
          {rent.chair.type === 'medio' ? ' 20' : null}
          {rent.chair.type === 'basico' ? ' 10' : null}
          €
        </li>
        <li className="list-group-item">Notificar incidencia</li>
      </ul>
    </>
  )
}

export default Bookings;