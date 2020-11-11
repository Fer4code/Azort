import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import credentials from './Credentials'
import Map from './Map'
import './Style.css'

const mapsurl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`



export default function Contacts() {
	return (
		<div className='content'>
			<Typography variant='h3' align='center' color='initial'>
				Contáctanos
			</Typography>
			<Grid
				container
				spacing={1}
				direction='row'
				justify='center'
				alignItems='center'
				alignContent='center'
				wrap='nowrap'
				className='grid'
			>
				<Grid item xs={12}>
					<Grid container>
						<Grid item xs={12} md={6} align='center'>
							<Typography variant='h5' color='initial' >
								Números de contacto
							</Typography>
							<Typography variant='h6' className='contact'>
								Whatsapp Business: +(58)419-xxxxx
							</Typography>
							<Typography variant='h6' className='contact'>
								Llámanos: +(58)419-xxxxx +(58)419-xxxxx
							</Typography>
							<Typography variant='h6' className='contact'>
								Correos: fern@grupoazort.com
							</Typography>
						</Grid>
						<Grid item xs={12} md={6} align='center'>
							<Typography variant='h5' color='initial' >
								Dirección:
							</Typography>
							<Typography variant='h6' color='initial' className='contact'>
								C.C Concepto La Granja - Av. Paseo Cabriales, Urb La granja,
							</Typography>
							<Typography variant='h6' color='initial' >
								2005, Municipio Naguanagua, Estado Carabobo, Venezuela.
							</Typography>
							{/*<Map
								googleMapURL={mapsurl}
								containerElement={<div style={{ height: '100%', width: '100%', align: 'center' }} />}
								mapElement={
									<div
										style={{
											height: '200px',
											width: '60%',
											borderRadius: '0.5rem',
											marginTop: '2%',
											align: 'center',
										}}
									/>
								}
								loadingElement={<p>Cargando...</p>}
							/>*/}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}
