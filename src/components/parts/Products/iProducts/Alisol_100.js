import React from 'react'
import { Tooltip, Zoom, Typography, makeStyles } from '@material-ui/core/'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import '../../Styles.css'
import { alisol_100 } from "../Products"
import {products} from "../Products"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


export default function Alisol_100(props) {

	const [open, setOpen] = React.useState(false);
  	const theme = useTheme();
  	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();

	  return (

			<div container className='iproduct'>
          
			<Grid container spacing={10} justify='center' align='center' alignContent='center' alignItems='center'>
      <Grid item xs={12}>
            <Typography variant='h4' color='initial' align='center' >
				        Solventes Alifaticos
			      </Typography>
            </Grid>  
            {alisol_100.map((data, key) => {
          return (<>
				
				<Grid item xl={3} lg={3} md={3} sm={6} xs={11} align='flex-start' key={key} className='gitem'>
						<Tooltip title={data.name} TransitionComponent={Zoom}>
							<Paper className='papergrid'>
							
              <img src={require('../pimg/'+`${data.image}`)} className='imgproducts'/>
							</Paper>
						</Tooltip>
					</Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={11} align='center' justify="flex-start">
            <Typography variant="h2" color="initial">{data.name}</Typography>
            <Typography variant="body1" color="initial" align='justify'>Dentro de sus usos mas comunes:
            </Typography>
            <Typography variant="body1" color="initial" align='justify'>{data.use}
            </Typography>
            <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<GetAppIcon/>}
            >
              <Typography variant="button" color="initial">Descargar DataSheet</Typography>
        
      </Button>
        </Grid>
        </>
          );
        })}
		</Grid>
		</div>

	)
}

{/*export default function Alisol_100() {
  const classes = useStyles();

  return (
 
    <div className={classes.root}>
       <Grid container spacing ={3}>

         <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
          <Paper >xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper >xs=12 sm=6</Paper>
        </Grid>
        
      </Grid>
    </div>
      {/*{alisol_100.map((data, key) => {
  return (
    <>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={11} justify="center" align='center'>
                <Tooltip title={data.name} TransitionComponent={Zoom}>
                    <Paper className='papergrid'>
                    
                        <Card className='crdgrid' variant='elevation'>
                            
                                <CardMedia
                                    className='gridimg'
                                    component='img'
                                    alt={data.name}
                                    image={require('../pimg/'+`${data.image}`)}
                                    onClick={event =>  window.location.href='/Contactos'}
                                    
                                />
                            
                        </Card>
                    </Paper>
                </Tooltip>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={11} align='center' justify="flex-start">
            <Typography variant="h2" color="initial">Alisol 100</Typography>
            <Typography variant="body1" color="initial">Fabricacion de pinturas, productos de la agricultura, y disolventes de resinas. 
            Tambien se utliza en la formulacion de productos veterinarios y desengrasantes de piezas metalicas, ademas como componentes de 
            barnices, tintas y lacas y en la formulacion de gomas y adhesivos.
            </Typography>

        </Grid>
    </>   
  );
})}
</Grid>
</div>

);
}*/}
