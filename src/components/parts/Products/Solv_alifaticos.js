import React from 'react';
import { Tooltip, Zoom, Typography } from '@material-ui/core/'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {solventes_alifaticos} from "./Products"
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import '../Styles.css'

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const aliconst = (
      <>
      {solventes_alifaticos.map((data, key) => {
          return(
    <Dialog
    fullScreen={fullScreen}
    open={open}
    aria-labelledby="responsive-dialog-title"
  >
    <DialogTitle id="responsive-dialog-title">{"Solventes alifaticos"}</DialogTitle>
    <Grid item xl={3} lg={3} md={3} sm={6} xs={11} align='center' key={key} className='gitem'>
                  <Tooltip title={data.name} TransitionComponent={Zoom}>
                      <Paper className='papergrid'>
                      
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
                  </Tooltip>
              </Grid>
  </Dialog>
   );
})}
  </>
  )
  return (
      <div>
  {solventes_alifaticos.map((data, key) => {
    return (
        <div>
        {open ? aliconst : null}
       
          <Grid item xl={3} lg={3} md={3} sm={6} xs={11} align='center' key={key} className='gitem'>
                  <Tooltip title={data.name} TransitionComponent={Zoom}>
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
                                      Solventes Alifaticos
                                  </Typography>
                                  <Typography variant='body2' align='center' color='textSecondary' component='p'>
                                  Granel (Totems / Cisternas)
                                  </Typography>
                              </CardContent>
                          </Card>
                      </Paper>
                  </Tooltip>
              </Grid>
              </div>
    );
  })}
  </div>)
}
