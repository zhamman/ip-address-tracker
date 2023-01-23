import React from "react";
import "./Map.scss";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import ChangeView from "./ChangeView";

const Map = info => {
  // const [map, setMap] = useState(null);
  const long = info.long;
  const lat = info.lat;
  const position = [lat, long];

  console.log(info);

  return (
    <div id="map">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={position}
        zoom={8}
        scrollWheelZoom={true}
      >
        <ChangeView center={position} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {long}, {lat}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

// `${info.long}`, `${info.lat}`
