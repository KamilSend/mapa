import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

import 'leaflet/dist/leaflet.css';
import './maps.scss'

L.Icon.Default.imagePath='img/'

const maps = () => {

    const position = [52.0989333, 19.2967582,7]
    const markerPosition = [49.6620367, 20.9955048,17]

    return(
        <div className="leafletContainer">
            <MapContainer center={position} zoom={6} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={markerPosition}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>

        )
}

export default maps