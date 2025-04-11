import {useMemo} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const MapaObras = ({ data, className }) => {
  const position = [6.2442, -75.5812]; // Centro de Medellín

  const iconos = {
    Andenes: new Icon({iconUrl : 'https://icons.iconarchive.com/icons/fa-team/fontawesome/512/FontAwesome-Person-Walking-icon.png',
      iconSize : [35,35], // size of the icon
      iconAnchor : [22,94], // point of the icon which will correspond to marker's location
      popupAnchor : [-3, -76]}),
    Cicloparqueaderos: new Icon({iconUrl : 'https://icons.iconarchive.com/icons/fa-team/fontawesome/512/FontAwesome-Person-Biking-icon.png',
      iconSize : [35,35], // size of the icon
      iconAnchor : [22,94], // point of the icon which will correspond to marker's location
      popupAnchor : [-3, -76]}),
    Parques: new Icon({iconUrl : 'https://icons.iconarchive.com/icons/fa-team/fontawesome/512/FontAwesome-Tree-City-icon.png',
      iconSize : [35,35], // size of the icon
      iconAnchor : [22,94], // point of the icon which will correspond to marker's location
      popupAnchor : [-3, -76]}),
    "Presupuesto Participativo": new Icon({iconUrl : 'https://icons.iconarchive.com/icons/fa-team/fontawesome/512/FontAwesome-Hand-Holding-Dollar-icon.png',
      iconSize : [35,35], // size of the icon
      iconAnchor : [22,94], // point of the icon which will correspond to marker's location
      popupAnchor : [-3, -76]})
  }

  const categoriasUnicas = useMemo(() => (
    [...new Set(data.map((obra) => obra.properties.Categoria))]
  ), [data]);

    const dataClassified = useMemo(() => (
      data.reduce((acc, obra) => {
        const categoria = obra.properties?.Categoria;
        if (!acc[categoria]) {
          acc[categoria] = [];
        }
        acc[categoria].push(obra);
        return acc;
      }, {})
    ), [data]);

  return (
    
      <MapContainer center={position} zoom={13} style={{ height: "400px" }} className={`z-0 ${className}`}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {categoriasUnicas.map((categoria, _) => (
          dataClassified[categoria].map((obra, idx)=>
            <Marker key={obra.properties.ID} position={[obra.geometry.coordinates[1], obra.geometry.coordinates[0]]} icon={iconos[categoria]}>
              <Popup>
                <strong>{obra.properties["Nombre del Proyecto"]}</strong><br />
                <strong>Categoría:</strong> {obra.properties.Categoria}<br />
                <strong>Estado:</strong> {obra.properties["Estado del Proyecto"]}<br />
                <strong>Comuna:</strong> {obra.properties.Comuna}
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    
  );
};

export default MapaObras;

