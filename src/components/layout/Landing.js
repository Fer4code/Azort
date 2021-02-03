import React, {useEffect, useState } from 'react'
import Carousel from '../parts/Carousel'
import Grid2 from '../parts/Grid2'
import KnowWhat from '../parts/KnowWhat'
import AboutUs from '../parts/AboutUs'
import Insta from '../parts/Insta'
import './Style.css'
import { makeStyles } from '@material-ui/core/styles'
import {Animation} from './Animation';

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

function App() {
	const [loading,setLoading] = useState(true);
	useEffect(()=> {
	  setTimeout(() => {
		setLoading(false);
	  }, 1500);
	});
	return (
	  <>
	  {loading === false ? (
		<div className="App">
		  <Carousel/>
		  <Grid2/>
		  <AboutUs/>
		  <KnowWhat/>
		  <Insta/>
		</div>
		): (
		<div >
		  <Animation />
		</div>
  
		  )
	  }
	  </>
	);
  }
  
export default App;