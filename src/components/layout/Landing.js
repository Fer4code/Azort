import React from 'react'
import Carousel from '../parts/Carousel'
import Grid from '../parts/Grid'
import KnowWhat from '../parts/KnowWhat'
import AboutUs from '../parts/AboutUs'
import './Style.css'
import logo from '../img/logo.svg'
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
	  height: 180,
	},
	container: {
	  display: 'flex',
	},
	paper: {
	  margin: theme.spacing(1),
	},
	svg: {
	  width: 100,
	  height: 100,
	},
	polygon: {
	  fill: theme.palette.common.white,
	  stroke: theme.palette.divider,
	  strokeWidth: 1,
	},
  }));

export default function Landing() {
	const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
	return (
		<>
		     

			<Carousel />
			<Grid />
			<AboutUs/>
			<KnowWhat />
		</>
	)
}
