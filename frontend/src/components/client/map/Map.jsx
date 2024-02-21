import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const markers = [
    { position: [39.46065528327018, -0.38188461978603605], content: 'Estacion Valencia' },
    { position: [39.151116651506875, -0.4334163018824872], content: 'Estacion Alzira' },
    { position: [38.360660311661505, -0.4998189921593576], content: 'Estacion Alicante' },
    { position: [40.17218651047807, -0.00400079934721462], content: 'Estacion Castellon' },
    { position: [38.97005410954505, -0.18386601330819674], content: 'Estacion Gandia' },
    { position: [38.990477382502384, -0.5221539650020443], content: 'Estacion Xàtiva' },
    { position: [38.70061519042403, -0.48407936792019], content: 'Estacion Alcoy' },
    { position: [39.680614116764914, -0.28112786095276093], content: 'Estacion Sagunto' },
  ];

  return (
    <MapContainer
      center={[39.46065528327018, -0.38188461978603605]}
      zoom={8}
      style={{ height: '700px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker position={marker.position} key={index}>
          <Popup>
            {marker.content}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;