import React from 'react'
import { Marker, GoogleMap, useJsApiLoader,ScriptLoaded, LoadScript  } from '@react-google-maps/api';



const mapContainerStyle = {
  height: "200px",
  width: "200px"
}

const center = {
	lat: 10.245729,
	lng: -68.0100545
}

const position = {
	lat: 10.245729,
	lng: -68.0100545
}

const onLoad = marker => {
  console.log('marker: ', marker)
}


export default function Map () {
	return (
				<ScriptLoaded>
				<GoogleMap
					id="marker-example"
					mapContainerStyle={mapContainerStyle}
					zoom={10}
					center={center}
				>
					<Marker
					onLoad={onLoad}
					position={position}
					/>
				</GoogleMap>
				</ScriptLoaded>
)}
