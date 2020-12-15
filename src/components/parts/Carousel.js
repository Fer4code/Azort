import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import car2 from '../img/unnamed.jpg'
import car1 from '../img/alifatico.jpg'
import car3 from '../img/covid.jpg'
import { Typography, Grid, Button, makeStyles } from '@material-ui/core'

export default function Caroussel() {
	const [index, setIndex] = React.useState(0)

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
						<img className="divcar" src={car1} alt='First slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='divcar' src={car2} alt='Second slide' />
					</Carousel.Item>
					<Carousel.Item>
						<img className='divcar' src={car3} alt='Third slide' />
					</Carousel.Item>
				</Carousel>
			</Grid>
		</>
	)
}
