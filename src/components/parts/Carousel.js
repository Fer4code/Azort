import React from 'react'
import { Carousel } from 'react-bootstrap'
import car2 from '../img/unnamed.jpg'
import car1 from '../img/index.jpg'
import car3 from '../img/azort (6).jpeg'
import { Typography, Grid, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	divcar: {
		backgroundColor: 'black',
		width: '100%',
		height: '70vh',
		paddingTop: theme.spacing(24),
		paddingLeft: theme.spacing(22),
	},
	textcar: {
		color: 'white',
	},
	carimg: {
		width: '100%',
		height: '70vh',
	},
}))

export default function Caroussel() {
	const [index, setIndex] = React.useState(0)
	const classes = useStyles()

	const handleSelect = selectedIndex => {
		setIndex(selectedIndex)
	}
	return (
		<>
			<Grid item sm={12}>
				<Carousel
					alt='mycarousel'
					pause='scroll'
					controls='true'
					wrap='true'
					touch='true'
					fade='true'
					interval='10000'
					activeIndex={index}
					onSelect={handleSelect}
				>
					<Carousel.Item>
						<img className={classes.carimg} src={car1} alt='First slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className={classes.carimg} src={car2} alt='Second slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className={classes.carimg} src={car3} alt='Third slide' />
					</Carousel.Item>
				</Carousel>
			</Grid>
		</>
	)
}
