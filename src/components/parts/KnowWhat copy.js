import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
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
									style={{width: '20%'}}
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