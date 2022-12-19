
import { useState } from "react"
import { Marker, Popup, useMapEvents } from "react-leaflet"



const MyLocation = () => {

  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate( 
        { 
          enableHighAccuracy: true 
        }
      )
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng,
                14,
                {animate: true,
                 duration: 2 
                 }
      )
      var myLat = e.latlng.lat.toString();
      var myLng = e.latlng.lng.toString();

      console.log("myLat: " + myLat);
      console.log("myLng: " + myLng);
      // console.log("Has hecho click en la coordenada: " +  e.latlng.lat.toString() + "," +  e.latlng.lng.toString());
    },
  })
  

  console.log("tu posicion. :" + position);
  console.log("tu posicion JSON. :" + JSON.stringify(position) );


  
  return position === null ? null : (
    
    <Marker position={position}>
      <Popup>
        <di>
          <h3>Lat: </h3>
          <b>{JSON.stringify(position.lat)}</b>
        </di>
        <di>
          <h3>Lng: </h3>
          <b>{JSON.stringify(position.lng)}</b>
        </di>
      </Popup>
    </Marker>
  )
}

export default MyLocation;




