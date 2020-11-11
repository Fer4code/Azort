import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import credentials from './Credentials'
import Map from './Map'
import IG from '../img/ig.svg'
import './Style.css'

const useStyles = makeStyles(theme => ({
	content: {
		backgroundColor: 'black',
		height: '10%',
		width: '100%',
	},
	header: {
		color: 'white',
	},
	item: {
		marginTop: theme.spacing(2),
	},
	logo: {
		width: '6%',
	},
}))

const mapsurl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`
function Footer() {
	const classes = useStyles()
	return (
		<div>
			<Grid
				container
				direction='row'
				justify='center'
				alignItems='flex-end'
				alignContent='flex-end'
				wrap='nowrap'
				className='fcontent'
			>
				<Grid item xs={12}>
					<Grid container>
						<Grid item xs={12} md={4} align='center' className='item'>
							<Typography variant='h5' className='header'>
								Contáctanos
							</Typography>
							<Typography variant='h6' className='header'>
								Whatsapp Business: +(58)419-xxxxx
							</Typography>
							<Typography variant='h6' className='header'>
								Llámanos: +(58)419-xxxxx +(58)419-xxxxx
							</Typography>
							<Typography variant='h6' className='header'>
								Correos: fern@grupoazort.com
							</Typography>
						</Grid>
						<Grid item xs={12} md={4} align='center' className='item'>
							<Typography variant='h5' className='header'>
								Nuestras redes sociales
							</Typography>
							<img
								src={IG}
								className={classes.logo}
								onClick={event => (window.location.href = '/')}
								alt='Instagram'
							/>
							<Typography variant='h5' color='initial' className='header'>
								Dirección:
							</Typography>
							<Typography variant='h6' color='initial' className='header'>
								C.C Concepto La Granja - Av. Paseo Cabriales, Urb La granja,
							</Typography>
							<Typography variant='h6' color='initial' className='header'>
								2005, Municipio Naguanagua, Estado Carabobo, Venezuela.
							</Typography>
						</Grid>
						<Grid item xs={12} md={4} align='center' className='item'>
							<Typography variant='h5' color='initial' className='header' align='center'>
								Ubicación
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
						<Grid item xs={12} align='center' style={{ marginTop: '3%', backgroundColor: 'grey' }}>
							<Typography
								variant='h6'
								className='header'
							>{`© ${new Date().getFullYear()} Grupo Azort`}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default Footer
