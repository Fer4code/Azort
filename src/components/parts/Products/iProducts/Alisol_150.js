import React from 'react'
import { Tooltip, Zoom, Typography, makeStyles } from '@material-ui/core/'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import '../../Styles.css'
import { alisol_150 } from "../Products"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';
import Button from '@material-ui/core/Button';



export default function Alisol_150(props) {

	const [open, setOpen] = React.useState(false);
  	const theme = useTheme();
  	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	  return (

      <div className='ipcontainer'>
			<Typography variant='h3' color='DDAB32' align='center' className='title'>
				Solventes Alifáticos
			</Typography>
			<div container className='iproduct'>
                {alisol_150.map((data, key) => {
                  return (
                  <>
                  <Grid container spacing={5} justify='center' align='center' alignContent='center' alignItems='center'>
                    <Grid item xl={6} lg={6} md={6} sm={11} xs={11} align='center'>
                    <Tooltip title={data.name} TransitionComponent={Zoom}>
							<Paper className='ipaper'>
							
              <img src={require('../pimg/'+`${data.image}`)} className='imgproducts'/>
							</Paper>
						</Tooltip>
                    </Grid>

                    <Grid item xl={6} lg={6} md={6} sm={11} xs={11} align='center'>
                    <Typography variant="h2" color="initial">{data.name}</Typography>
            <Typography variant="body1" color="initial" align='justify'>Dentro de sus usos mas comunes:
            </Typography>
            <Typography variant="body1" color="initial" align='justify'>{data.use}
            </Typography>
            <Button
            variant="contained"
            color="default"
            className='down'
            style={{marginTop:'7%'}}
            startIcon={<GetAppIcon/>}
            href={require('../PDFs/'+`${data.file}`)}
            download={data.file}
            >
              
              <Typography
          
              variant="button" color="initial" ></Typography>
              Descargar DataSheet
      </Button>
                    </Grid>
                  </Grid>
                  </>
                  );
                })}
			</div>
		</div>
    )
}