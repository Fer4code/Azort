import React from 'react';
import { Tooltip, Zoom, Typography } from '@material-ui/core/'
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { limpiadores } from "./Products"
import { plimpiadores } from '../Products';
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
       Limpiadores
    </Typography>
    <Typography variant='body1' color='initial' align='center' className='gtitle'>
    Hipoclorito 12%
    </Typography>
    
    <div container className='contgrid'>

    <Grid container spacing={5} justify='center' align='center' alignContent='center' alignItems='center'>
    {limpiadores.map((data, key) => {
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
  {plimpiadores.map((data, key) => {
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
                                      {data.name}
                                  </Typography>
                                  <Typography variant='body2' align='center' color='textSecondary' component='p'>
                                  {data.presentation}
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