import React, { Fragment } from 'react'
import Carousel from '../parts/Carousel'
import Grid2 from '../parts/Grid2'
import KnowWhat from '../parts/KnowWhat'
import AboutUs from '../parts/AboutUs'
import './Style.css'
import logo from '../img/logo.svg'
import lam from '../img/sulf.jpeg'
import Switch from '@material-ui/core/Switch'
import Paper from '@material-ui/core/Paper'
import Zoom from '@material-ui/core/Zoom'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	root: {
		height: 180,
	},
	container: {
		display: 'flex',
	},
	paper: {
		margin: theme.spacing(1),
	},
	polygon: {
		fill: theme.palette.common.white,
		stroke: theme.palette.divider,
		strokeWidth: 1,
	},
}))

export default function Landing() {
	const classes = useStyles()
	const [loaded, setLoaded] = React.useState(false)

	function onLoad() {
		console.log('loaded')
		setLoaded(true)
	}

	return (
		<>
			
			{loaded ? <img src={logo} onLoad={onLoad}	alt='logo' className='App-logo' style={{display: loaded ? 'block' : 'none'}}/>   : 
			(<Fragment>
				<Carousel/>
				<Grid2/>
				<AboutUs />
				<KnowWhat />
				
			</Fragment>)
			}
			
			
		</>
	)
}
