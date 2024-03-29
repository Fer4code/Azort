import React from 'react';
import { Tooltip, Zoom, Typography } from '@material-ui/core/'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { parafinicos } from "./Products"
import { pparafinicos } from '../Products';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import '../Styles.css'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Container from '@material-ui/core/Container';
import DialogContent from '@material-ui/core/DialogContent';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const aliconst = (
    <>
      <Dialog
    maxWidth={'lg'}
    open={open}
    aria-labelledby="responsive-dialog-title"
    scroll='paper'
    
        >
            <DialogContent >
            <div className='fulliproduct'>
    <Typography variant='h4' color='initial' align='center' className='gtitle'>
        Parafinado
    </Typography>
    <Typography variant='body1' color='initial' align='center' className='gtitle'>
    Se obtiene del petróleo, de los esquistos bituminosos o del carbón. 
    El proceso comienza con una destilación a temperatura elevada, para obtener aceites pesados, de los que por enfriamiento a 0 ℃, 
    cristaliza la parafina, la cual es separada mediante filtración o centrifugación. El producto se purifica mediante recristalizaciones, 
    lavados ácidos y alcalinos y decoloración. Las refinerías de petróleo normalmente producen parafina. También se puede obtener mediante 
    el craqueo térmico del petróleo, donde se rompen cadenas de carbonos y se añade calor 400-650 °C.
    </Typography>
    
    <div container className='contgrid'>

    <Grid container spacing={5} justify='center' align='center' alignContent='center' alignItems='center'>
    {parafinicos.map((data, key) => {
  return (
        <Grid item xl={4} lg={4} md={4} sm={4} xs={11} align='center' key={key} className='gitem'>
                <Tooltip title={data.name} TransitionComponent={Zoom}>
                    <Paper className='papergrid'>
                    
                        <Card className='crdgrid' variant='elevation'>
                            <CardActionArea>
                                <CardMedia
                                    className='gridimg'
                                    component='img'
                                    alt={data.name}
                                    image={require('./pimg/'+`${data.image}`)}
                                    onClick={event =>  window.location.href=`${data.path}`}
                                />
                            </CardActionArea>
                            <CardContent >
                                <Typography align='center' variant='body1'>
                                    {data.name}
                                </Typography>
                                <Typography variant='body2' align='center' color='textSecondary' component='p'>
                                    {data.presentation}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </Tooltip>
            </Grid>
  );
})}
</Grid>
</div>
</div>
</DialogContent>
</Dialog>
  </>
  )
  return (
      <div>
  {pparafinicos.map((data, key) => {
    return (
        <div>
        {open ? aliconst : null}
       
          <Grid item xl={3} lg={3} md={3} sm={6} xs={11} align='center' key={key} className='gitem'>
                  <Tooltip title={data.name} TransitionComponent={Zoom}>
                  <ClickAwayListener onClickAway={handleClose}>
                      <Paper className='papergrid' onClick={handleClickOpen}>
                      
                          <Card className='crdgrid' variant='elevation'>
                              <CardActionArea>
                                  <CardMedia
                                      className='gridimg'
                                      component='img'
                                      alt={data.name}
                                      image={require('./pimg/'+`${data.image}`)}
                                  />
                              </CardActionArea>
                              <CardContent>
                                  <Typography align='center' variant='h5' component='h2'>
                                      Parafinado
                                  </Typography>
                                  <Typography variant='body2' align='center' color='textSecondary' component='p'>
                                  Granel (Totems / Cisternas)
                                  </Typography>
                              </CardContent>
                          </Card>
                      </Paper>
                      </ClickAwayListener>
                  </Tooltip>
              </Grid>
              </div>
    );
  })}
  </div>)
}
