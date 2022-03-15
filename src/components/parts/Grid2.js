import React from 'react'
import { Grid, Typography } from '@material-ui/core/'		
import './Styles.css'
import { products } from "./Products"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Solv_alifaticos from './Products/Solv_alifaticos'
import Parafinicos from './Products/Parafinicos'
import Aromaticos from './Products/Aromaticos'
import Alcoholes from './Products/Alcoholes'
import Aminas from './Products/Aminas'
import Baseslub from './Products/Baseslub'
import Mineraloil from './Products/Mineraloil'



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

				<Grid container spacing={3} justify='center' align='center' alignContent='center' alignItems='center'>
					
					<Grid item xl={6} lg={6} md={6} sm={11} xs={11} align='center' >
						<Solv_alifaticos />
					</Grid>
					{/*<Grid item xl={3} lg={3} md={3} sm={6} xs={11} align='center' className='gitem'>
			<Parafinicos/>
					</Grid>
					*/}
					<Grid item xl={6} lg={6} md={6} sm={6} xs={11} align='center' className='gitem'>
					<Aromaticos />
					</Grid>
					<Grid item xl={6} lg={6} md={6} sm={6} xs={11} align='center' className='gitem'>
						<Alcoholes />
					</Grid>
					<Grid item xl={6} lg={6} md={6} sm={6} xs={11} align='center' className='gitem'>
					<Mineraloil/>
					</Grid>
					<Grid item xl={6} lg={6} md={6} sm={6} xs={11} align='center' className='gitem'>
						<Baseslub />
					</Grid>
					<Grid item xl={6} lg={6} md={6} sm={6} xs={11} align='center' className='gitem'>
						<Aminas />
					</Grid>

				</Grid>
			</div>

		</div>
	)
}
