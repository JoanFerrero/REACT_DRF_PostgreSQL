import React, { useEffect } from 'react';
import './Tren.css'; // Importa el archivo CSS para los estilos

const Tren = ({trip}) => {
  return (
    <>
      <div className="row mx-2 mt-2 justify-content-md-center" >
        <div className="col-sm">
          <div className="rectangulo">
            <div className="cuadrado"></div>
            <div className="cuadrado"></div>
            <div className="cuadrado"></div>
            <div className="cuadrado"></div>
            <div className="cuadrado"></div>
            <div className="cuadrado"></div>
            <div className="cuadrado"></div>
            <div className="cuadrado"></div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Salida: {trip.exit_station.name}</li>
              <li className="list-group-item">LLegada: {trip.arrival_station.name}</li>
            </ul>
            <div className="card-header">
              Precio Total: 30€
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tren;