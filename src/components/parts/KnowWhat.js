import React from 'react'
import { makeStyles, Tooltip, Zoom, Typography } from '@material-ui/core/'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import './Styles.css'

export default function Profile(props) {

	return (
		<div className='fc'>
			<Typography variant='h3' color='DDAB32' align='center' className='title'>
				Sabias que?
			</Typography>
			<div container className='cont'>
				<Grid container spacing={5} justify='center' align='center' alignContent='center' alignItems='center'>
					<Grid item xl={4} lg={4} md={4} sm={11} xs={11} align='center'>
						<Paper className='paper'>
							<Card className='crd' variant='elevation'>
								<CardMedia
									className='gridcar'
									component='img'
									alt='Acido sulfonico'
									image={require('../img/base.jpg')}
								/>
							</Card>
						</Paper>
					</Grid>
					<Grid item xl={4} lg={4} md={4} sm={11} xs={11}>
						<Paper className='paper'>
							<Card className='crd' variant='elevation'>
								<CardActionArea className='gridcar'>
									<CardMedia
										className='gridcar'
										component='img'
										alt='Varsol'
										image={require('../img/lubri2.jpg')}
									/>
								</CardActionArea>
							</Card>
						</Paper>
					</Grid>
					<Grid item xl={4} lg={4} md={4} sm={11} xs={11}>
						<Paper className='paper'>
							<Card className='crd' variant='elevation'>
								<CardActionArea className='gridcar'>
									<CardMedia
										className='gridcar'
										component='img'
										alt='Infineum P5096'
										image={require('../img/lubri1.jpg')}
									/>
								</CardActionArea>
							</Card>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}
