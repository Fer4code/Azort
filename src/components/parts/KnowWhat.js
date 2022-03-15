import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import './Styles.css'
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import base from '../img/base.jpg'
import lubri2 from '../img/lubri2.jpg'
import lubri1 from '../img/lubri1.jpg'

export default function Profile(props) {

	return (
		<div className='fc'>
			<Typography variant='h3' color='DDAB32' align='center' className='title'>
				Sabías que?
			</Typography>
			<div container className='cont'>
				<Grid container spacing={5} justify='center' align='center' alignContent='center' alignItems='center'>
					<Grid item xl={4} lg={4} md={4} sm={11} xs={11} align='center'>
						<Paper className='paper'>
							<Card className='crd' variant='elevation'>
								<CardActionArea className='gridcar'>
									<CardMedia
										className='gridcar'
										component='img'
										alt='Acido sulfonico'
										image={base}
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
										alt='Varsol'
										image={lubri2}
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
										image={lubri1}
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