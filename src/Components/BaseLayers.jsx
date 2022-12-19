import React from 'react'

import { TileLayer, LayersControl } from "react-leaflet";


const BaseCapas = () => {
  
  const { BaseLayer } = LayersControl;

  return (
    <div>
      <LayersControl>
        <BaseLayer checked name="MapBoxStreet">
            <TileLayer
              url="https://api.mapbox.com/styles/v1/carloststech/clbasjjv1000314mu592f1u5o/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2FybG9zdHN0ZWNoIiwiYSI6ImNsYmFzbnI1ZjBjc3YzcHBpMnhsYW16bnkifQ.67H9OCUa_Sv58ruWcAswqA"
              attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
            />
        </BaseLayer>
        <BaseLayer name="MapBoxSatellite">
            <TileLayer
              url="https://api.mapbox.com/styles/v1/carloststech/clbatrah7000014nxigt9lftq/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2FybG9zdHN0ZWNoIiwiYSI6ImNsYmFzbnI1ZjBjc3YzcHBpMnhsYW16bnkifQ.67H9OCUa_Sv58ruWcAswqA"
              attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
            />
        </BaseLayer>
        <BaseLayer name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </BaseLayer>
      </LayersControl>
    </div>
  )
}

export default BaseCapas
