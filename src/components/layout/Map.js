import React from 'react'
{/*import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'*/}

const Map = props => {
	return (
		<>
			<GoogleMap defaultZoom={15} defaultCenter={{ lat: 10.245729, lng: -68.0100545 }} />
			<Marker position={{ lat: 10.245729, lng: -68.0100545 }} />
		</>
	)
}

export default withScriptjs(withGoogleMap(Map))
