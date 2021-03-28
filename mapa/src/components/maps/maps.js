import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

import 'leaflet/dist/leaflet.css';
import './maps.scss'

L.Icon.Default.imagePath='img/'

const maps = (props) => {

    const position = [52.0989333, 19.2967582,7]

    const markers = props.coordinates.map((marker, index) => {
        return(
            <Marker position={marker} key={index}>
                <Popup>
                    {marker}
                </Popup>
            </Marker>
        )
    })

    return(
        <div className="leafletContainer">
            <MapContainer center={position} zoom={6} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers}
            </MapContainer>
        </div>

        )
}

export default maps