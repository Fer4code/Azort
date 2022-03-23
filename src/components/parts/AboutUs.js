import React from 'react'
import { Grid, Typography, makeStyles, Container } from '@material-ui/core'
import './Styles.css'

function AboutUs() {
	return (
		<div>
			<Container maxWidth="lg">
			<Grid
				container
				direction='row'
				justify='center'
				alignItems='flex-end'
				alignContent='flex-end'
				wrap='nowrap'
				className='content'
			>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={12} align='center' className='item'>
							<Typography variant="h3" color="initial">Misión</Typography>
							<Typography variant="h5" color="initial" align='justify'> 
							Compartir el asesoramiento global y materias primas con el mercado industrial nacional, que les
							apoye en el mejoramiento de la calidad, reducción de costos, protección del talento humano y
							disminución del impacto en el medio ambiente y en alianza, propiciar el desarrollo industrial del país.
						</Typography>
                       </Grid>
						<Grid item xs={12} md={12} align='center' className='item'>
                        <Typography variant="h3" color="initial">Visión</Typography>
						<Typography variant="h5" color="initial" align='justify'>
						Ser los aliados comerciales industriales más confiables en el mercado venezolano,
						comprometidos con nuestros valores y el desarrollo del país.
						</Typography>
                            </Grid>
							
						<Grid item xs={12} md={12} align='center' className='item'>
							<Typography variant="h3" color="initial">Nuestros Valores</Typography>
							<Typography variant="h5" color="initial">
							Responsabilidad; cumplir con lo acordado,
							Compromiso; sentimos pasión por lo que hacemos, brindar más,
							Honestidad; transparencia en el desempeño, decir las cosas como son,
							Respeto; todos somos valiosos, todos tenemos talento y eso se respeta, trato cordial,
							Innovación; siempre hay una mejor forma de hacerlo…re inventar es indispensable,
							Conexión; sensibilidad con la realidad del país y del mercado, los pies en la tierra,
							Talento; generar alianzas positivas, en conjunto tenemos más oportunidades de éxito,
							Impulso; vamos por más.
							</Typography>
						</Grid>
						
					</Grid>
				</Grid>
			</Grid>
			</Container>
		</div>
	)
}

export default AboutUs