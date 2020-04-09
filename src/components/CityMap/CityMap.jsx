import React from "react";
import mapboxgl from 'mapbox-gl';

import { hospitals } from 'data/map'

import './CityMap.scss'

export default class CityMap extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      center: [-74.082401, 4.635174],
      zoom: 13,
      pitch: 45,
      bearing: -17.6,
      antialias: true 
    }
  }
  
  componentDidMount() {
    const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;
    const { center, zoom, pitch, bearing, antialias } = this.state    

    mapboxgl.accessToken = REACT_APP_MAPBOX_ACCESS_TOKEN

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center, zoom, pitch, bearing, antialias
    });

    map.on('load', () => { 
      var layers = map.getStyle().layers;
       
      var labelLayerId;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }
    
      map.addLayer({
        "id": "hospitales",
        "type": "circle",
        "category":"asistencia",
        "srcfile":"bogota_hospitales.geojson",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
            "features": hospitals
          }
        },
        // "layout": {"visibility":"none"},
        "paint": {
          "circle-radius": 10,
          "circle-opacity": 0.65,
          "circle-stroke-width": 0.5,
          "circle-stroke-color": "#36b5b0",
          "circle-color": "#621055"
        }
      }, labelLayerId);

      map.on('click', 'hospitales', function(e) {
        new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(e.features[0].properties['tags.name'] + ' UCI disponibles: ' +
         e.features[0].properties['avail_icu'])
        .addTo(map);
      });

      map.on('mouseenter', 'hospitales', function() {
        map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      map.on('mouseleave', 'hospitales', function() {
        map.getCanvas().style.cursor = '';
      });
    })
  }

  render() {
    return <div>
      <div id="map" ref={el => this.mapContainer = el} className="mapContainer"/></div>
  }
}