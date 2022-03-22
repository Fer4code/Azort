import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import car2 from '../img/car2.jpg'
import car3 from '../img/car3.jpg'
import car1 from '../img/car1.jpg'
import car4 from '../img/car4.jpg'

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
					controls='false'
					dots='false'
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
					<Carousel.Item>
						<img className='divcar' src={car4} alt='Fourth slide' />
					</Carousel.Item>
				</Carousel>
			</Grid>
		</>
	)
}
