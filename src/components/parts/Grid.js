import React from 'react'
import { makeStyles, Tooltip, Zoom, Container, Typography } from '@material-ui/core/'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import './Styles.css'


export default function Profile(props) {

	return (
		<div className='fullcgrid'>
			<Typography variant='h3' color='initial' align='center'>
				Nuestros productos
			</Typography>
			<div container className='contgrid'>
				<Grid container spacing={10} justify='center' align='center' alignContent='center' alignItems='center'>
					<Grid item xl={3} lg={3} md={3} sm={6} xs={11} align='center'>
						<Tooltip title='Ácido Sulfónico' TransitionComponent={Zoom}>
							<Paper className='papergrid'>
								<Card className='crdgrid' variant='elevation'>
									<CardActionArea>
										<CardMedia
											className='gridimg'
											component='img'
											alt='Acido sulfonico'
											image={require('../img/azort (2).jpeg')}
										/>
									</CardActionArea>
									<CardContent>
										<Typography align='center' variant='h5' component='h2'>
											Ácido Sulfónicooo
										</Typography>
										<Typography variant='body2' align='center' color='textSecondary' component='p'>
											A granel por KG
										</Typography>
									</CardContent>
								</Card>
							</Paper>
						</Tooltip>
					</Grid>
					<Grid item xl={3} lg={3} md={3} sm={6} xs={11}>
						<Tooltip title='Varsol' TransitionComponent={Zoom}>
							<Paper className='papergrid'>
								<Card className='crdgrid' variant='elevation'>
									<CardActionArea className="gridimg">
										<CardMedia
											className="gridimg"
											component='img'
											alt='Varsol'
											image={require('../img/azort (5).jpeg')}
										/>
									</CardActionArea>
									<CardContent>
										<Typography align='center' variant='h5' component='h2'>
											Varsol
										</Typography>
										<Typography variant='body2' align='center' color='textSecondary' component='p'>
											A granel por litros
										</Typography>
									</CardContent>
								</Card>
							</Paper>
						</Tooltip>
					</Grid>
					<Grid item xl={3} lg={3} md={3} sm={6} xs={11}>
						<Tooltip title='Aditivo Infineum P5096' TransitionComponent={Zoom}>
							<Paper className='papergrid'>
								<Card className='crdgrid' variant='elevation'>
									<CardActionArea className='gridimg'>
										<CardMedia
											className='gridimg'
											component='img'
											alt='Infineum P5096'
											image={require('../img/azort (16).jpeg')}
										/>
									</CardActionArea>
									<CardContent>
										<Typography align='center' variant='h5' component='h2'>
											Infineum P5096
										</Typography>
										<Typography variant='body2' align='center' color='textSecondary' component='p'>
											Por tambor de 200 KG
										</Typography>
									</CardContent>
								</Card>
							</Paper>
						</Tooltip>
					</Grid>
					<Grid item xl={3} lg={3} md={3} sm={6} xs={11}>
						<Tooltip title='Aceite mineral blanco grado USP' TransitionComponent={Zoom}>
							<Paper className='papergrid'>
								<Card className='crdgrid' variant='elevation'>
									<CardActionArea className='gridimg'>
										<CardMedia
											className='gridimg'
											component='img'
											alt='Aceite mineral USP'
											image={require('../img/azort (17).jpeg')}
										/>
									</CardActionArea>
									<CardContent>
										<Typography align='center' variant='h5' component='h2'>
											Aceite mineral USP
										</Typography>
										<Typography variant='body2' align='center' color='textSecondary' component='p'>
											Granel
										</Typography>
									</CardContent>
								</Card>
							</Paper>
						</Tooltip>
					</Grid>
					<Grid item xl={3} lg={3} md={3} sm={6} xs={11}>
						<Tooltip title='Mejorador de viscocidad EPM 060' TransitionComponent={Zoom}>
							<Paper className='papergrid'>
								<Card className='crdgrid' variant='elevation'>
									<CardActionArea className='gridimg'>
										<CardMedia
											className='gridimg'
											component='img'
											alt='Mejorador de viscocidad EPM 060'
											image={require('../img/azort (14).jpeg')}
										/>
									</CardActionArea>
									<CardContent>
										<Typography align='center' variant='body1' component='h6'>
											Mejorador de viscocidad EPM V 060
										</Typography>
										<Typography variant='body2' align='center' color='textSecondary' component='p'>
											Saco de 25 Kgs
										</Typography>
									</CardContent>
								</Card>
							</Paper>
						</Tooltip>
					</Grid>
					<Grid item xl={3} lg={3} md={3} sm={6} xs={11}>
						<Tooltip title='Alisol 100' TransitionComponent={Zoom}>
							<Paper className='papergrid'>
								<Card className='crdgrid' variant='elevation'>
									<CardActionArea className='gridimg'>
										<CardMedia
											className='gridimg'
											component='img'
											alt='Alisol 100'
											image={require('../img/azort (15).jpeg')}
										/>
									</CardActionArea>
									<CardContent>
										<Typography align='center' variant='h5' component='h2'>
											Alisol 100
										</Typography>
										<Typography variant='body2' align='center' color='textSecondary' component='p'>
											Granel por litro
										</Typography>
									</CardContent>
								</Card>
							</Paper>
						</Tooltip>
					</Grid>
					<Grid item xl={3} lg={3} md={3} sm={6} xs={11}>
						<Tooltip title='Antiespumante' TransitionComponent={Zoom}>
							<Paper className='papergrid'>
								<Card className='crdgrid' variant='elevation'>
									<CardActionArea className='gridimg'>
										<CardMedia
											className='gridimg'
											component='img'
											alt='Antiespumante'
											image={require('../img/azort (10).jpeg')}
										/>
									</CardActionArea>
									<CardContent>
										<Typography align='center' variant='h5' component='h2'>
											Antiespumante
										</Typography>
										<Typography variant='body2' align='center' color='textSecondary' component='p'>
											Tambores y Pailas
										</Typography>
									</CardContent>
								</Card>
							</Paper>
						</Tooltip>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}
