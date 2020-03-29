import React from 'react'
import mapboxgl from 'mapbox-gl'

// import './CityMap.scss'

export default class CityMap extends React.Component {
    componentDidMount() {
        const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env
        console.log(REACT_APP_MAPBOX_ACCESS_TOKEN);        
    }
    
    render() {
        return (
            <div id="map-container">
                
            </div>
        )
    }
}
