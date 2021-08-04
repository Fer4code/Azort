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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Solv_alifaticos from '../parts/Products/Solv_alifaticos'
import Parafinicos from '../parts/Products/Parafinicos'
import Aromaticos from '../parts/Products/Aromaticos'
import Alcoholes from '../parts/Products/Alcoholes'
import Aminas from '../parts/Products/Aminas'
import Baseslub from '../parts/Products/Baseslub'
import Mineraloil from '../parts/Products/Mineraloil'



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
			<Grid item xl={3} lg={3} md={3} sm={6} xs={11} align='center' className='gitem'>
			<Solv_alifaticos/>
					</Grid>
					{/*<Grid item xl={3} lg={3} md={3} sm={6} xs={11} align='center' className='gitem'>
			<Parafinicos/>
					</Grid>
					*/}
					<Grid item xl={3} lg={3} md={3} sm={6} xs={11} align='center' className='gitem'>
			<Aromaticos/>
	  </Grid>
					<Grid item xl={3} lg={3} md={3} sm={6} xs={11} align='center' className='gitem'>
			<Alcoholes/>
					</Grid>
					{/*
					<Grid item xl={3} lg={3} md={3} sm={6} xs={11} align='center' className='gitem'>
					<Mineraloil/>						EEEEE
					</Grid>*/}
					<Grid item xl={3} lg={3} md={3} sm={6} xs={11} align='center' className='gitem'>
					<Baseslub/>
					</Grid>
					<Grid item xl={3} lg={3} md={3} sm={6} xs={11} align='center' className='gitem'>
					<Aminas/>
					</Grid>
					
					
				
            		</Grid>
		</div>

					</div>
	)
}
