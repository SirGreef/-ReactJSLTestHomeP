import React from "react";
import { MapContainer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "./App.css";

import blue from "./svg/azul.svg";

import BaseCapas from "./Components/BaseLayers";
import MyLocation from "./Components/MyLocation";
// import LocationButton from "./Components/MyLocation2";

const icon = new Icon({
  // iconUrl: '/svg/car_map_negro.svg',
  iconUrl: blue,
  iconSize: [38, 45],
});



if (!navigator.geolocation){
  alert('No se dispone de geolocalizacion en su dispositivo')
};



export default function App() {
  return (
    <MapContainer center={[-33.4157425, -70.6015113]} zoom={14}>

      <BaseCapas></BaseCapas>
      <MyLocation/>
      

      <div>
        <Marker key="01" position={[-33.4157425, -70.6015113]} icon={icon}>
          <Popup>
            <div>Distancia:</div>
            <div>valor:</div>
          </Popup>
        </Marker>      
      </div>
      
    </MapContainer>
  );
}
