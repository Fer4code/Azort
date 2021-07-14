import React from 'react'
import { Tooltip, Zoom, Typography } from '@material-ui/core/'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import './Styles.css'
import {products} from "./Products"

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Solv_alifaticos from '../parts/Products/Solv_alifaticos'



export default function Products(props) {

	const [open, setOpen] = React.useState(false);
  	const theme = useTheme();
  	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
	

	  return (
		<div className='fullcgrid'>
			<Typography variant='h3' color='initial' align='center' className='gtitle'>
				Nuestros productos
			</Typography>
			<div container className='contgrid'>

			<Grid container spacing={10} justify='center' align='center' alignContent='center' alignItems='center'>
				<Solv_alifaticos/>
            {products.map((data, key) => {
          return (
				
				<Grid item xl={3} lg={3} md={3} sm={6} xs={11} align='center' key={key} className='gitem'>
						<Tooltip title={data.name} TransitionComponent={Zoom}>
							<Paper className='papergrid'>
							
								<Card className='crdgrid' variant='elevation'>
									<CardActionArea>
										<CardMedia
											className='gridimg'
											component='img'
											alt={data.name}
											image={require('../img/'+ `${data.image}`)}
										/>
									</CardActionArea>
									<CardContent>
										<Typography align='center' variant='h5' component='h2'>
											{data.name}
										</Typography>
										<Typography variant='body2' align='center' color='textSecondary' component='p'>
											{data.presentation}
										</Typography>
									</CardContent>
								</Card>
							</Paper>
						</Tooltip>
					</Grid>
          );
        })}
		</Grid>
		</div>
		</div>
	)
}
