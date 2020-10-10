import React from 'react'
import { makeStyles, Tooltip, Zoom, Typography } from '@material-ui/core/'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles(theme => ({
	fc: {
		width: '100%',
		marginTop: '3%',
		marginBottom: '10%',
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	cont: {
		position: 'center',
		align: 'center',
		justify: 'center',
		alignItem: 'center',
		alignContent: 'center',
		marginTop: '5%',
		marginLeft: '15%',
		minHeight: 'auto',
		width: '70%',
	},
	crd: {
		height: '30rem',
		width: '100%',
	},
	gridimg: {
		width: '100%',
		height: '100%',
		alignContent: 'center',
	},
	title: {
		color: '#DDAB32',
		marginLeft: '12%',
	},
}))

export default function Profile(props) {
	const classes = useStyles()

	return (
		<div className={classes.fc}>
			<Typography variant='h3' color='DDAB32' align='left' className={classes.title}>
				Sabias que?
			</Typography>
			<div container className={classes.cont}>
				<Grid container spacing={5} justify='center' align='center' alignContent='center' alignItems='center'>
					<Grid item xl={4} lg={4} md={4} sm={11} xs={11} align='center'>
						<Paper className={classes.paper}>
							<Card className={classes.crd} variant='elevation'>
								<CardMedia
									className={classes.gridimg}
									component='img'
									alt='Acido sulfonico'
									image={require('../img/chev.jpg')}
								/>
							</Card>
						</Paper>
					</Grid>
					<Grid item xl={4} lg={4} md={4} sm={11} xs={11}>
						<Paper className={classes.paper}>
							<Card className={classes.crd} variant='elevation'>
								<CardActionArea className={classes.gridimg}>
									<CardMedia
										className={classes.gridimg}
										component='img'
										alt='Varsol'
										image={require('../img/ch.jpg')}
									/>
								</CardActionArea>
							</Card>
						</Paper>
					</Grid>
					<Grid item xl={4} lg={4} md={4} sm={11} xs={11}>
						<Paper className={classes.paper}>
							<Card className={classes.crd} variant='elevation'>
								<CardActionArea className={classes.gridimg}>
									<CardMedia
										className={classes.gridimg}
										component='img'
										alt='Infineum P5096'
										image={require('../img/hy.jpg')}
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
