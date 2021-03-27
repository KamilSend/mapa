import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

import 'leaflet/dist/leaflet.css';
import './maps.scss'

L.Icon.Default.imagePath='img/'

const maps = (props) => {

    const position = [52.0989333, 19.2967582,7]
    const markerPosition = [49.6620367, 20.9955048,17]

    const markers = props.coordinates.map((marker) => {
        return(
            <Marker position={marker}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
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
                {/*<Marker position={props.coordinates[1]}>*/}
                {/*    <Popup>*/}
                {/*        A pretty CSS3 popup. <br /> Easily customizable.*/}
                {/*    </Popup>*/}
                {/*</Marker>*/}
                {markers}
            </MapContainer>
        </div>

        )
}

export default maps