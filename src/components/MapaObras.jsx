import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import obrasData from "../data/obras.json";
import { Icon } from "leaflet";

const MapaObras = ({ comunaSeleccionada }) => {
  const position = [6.2442, -75.5812]; // Centro de Medellín

  const icono = new Icon({iconUrl : 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-legal-business-and-finance-icongeek26-linear-colour-icongeek26.png',
    iconSize : [35,35], // size of the icon
    iconAnchor : [22,94], // point of the icon which will correspond to marker's location
    popupAnchor : [-3, -76]})

  // Filtrar obras según comuna seleccionada
  const obrasFiltradas = comunaSeleccionada
    ? obrasData.features.filter((obra) => obra.properties.comuna === comunaSeleccionada)
    : obrasData.features;

  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {obrasFiltradas.map((obra, idx) => (
        <Marker key={idx} position={[obra.geometry.coordinates[1], obra.geometry.coordinates[0]]} icon={icono}>
          <Popup>
            <strong>{obra.properties.nombre}</strong><br />
            <strong>Categoría:</strong> {obra.properties.categoria}<br />
            <strong>Estado:</strong> {obra.properties.estado}<br />
            <strong>Comuna:</strong> {obra.properties.comuna}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapaObras;

