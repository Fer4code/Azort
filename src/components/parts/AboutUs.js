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
							Compartir el asesoramiento global y materias primas con el mercado industrial nacional,
        					que contribuya al mejoramiento de la calidad, reduccion de costos, proteccion del talento
        					humano, disminucion del impacto en el medio ambiente y en alianza, propiciar el desarrollo
        					industrial del pais.
						</Typography>
                       </Grid>
						<Grid item xs={12} md={12} align='center' className='item'>
                        <Typography variant="h3" color="initial">Visión</Typography>
						<Typography variant="h5" color="initial" align='justify'>
							Ser los aliados comerciales industriales mas confiables, dentro y fuera del mercado venezolano,
        					comprometidos con nuestros valores y el desarrollo del pais.</Typography>
                            </Grid>
							
						<Grid item xs={12} md={12} align='center' className='item'>
							<Typography variant="h3" color="initial">Nuestros Valores</Typography>
							<Typography variant="h5" color="initial">
		Responsabilidad; cumplir con lo acordado,
        Compromiso; sentimos pasion por lo que hacemos, brindar mas,
        Honestidad; transparencia en el desempeño, decir las cosas como son,
        Respeto; todos somos valiosos, todos tenemos talent y eso se respeta, trato cordial,
        Innovacion; siempre hay una mejor forma de hacerlo.. reinventar es indispensable,
        Conexion: sensibilidad con la realidad del pais y del mercado, los pies en la tierra,
        Talento; generar alianzas positivas, en conjunto tenemos mas oportunidades de exito,
        Impulso; vamos por mas.</Typography>
                         
						</Grid>
						
					</Grid>
				</Grid>
			</Grid>
			</Container>
		</div>
	)
}

export default AboutUs