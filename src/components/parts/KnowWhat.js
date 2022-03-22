import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import './Styles.css'
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import base from '../img/base.jpg'
import lubri2 from '../img/lubri2.jpg'
import lubri1 from '../img/lubri1.jpg'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function Profile(props) {
	const [open, setOpen] = React.useState(false);
	const [open2, setOpen2] = React.useState(false);
	const [open3, setOpen3] = React.useState(false);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };


	return (
		<div className='fc'>
			<Typography variant='h3' color='DDAB32' align='center' className='title'>
				Sabías que?
			</Typography>
			<div container className='cont'>
				<Grid container spacing={2} justify='center' align='center' alignContent='center' alignItems='center'>
					<Grid item xl={4} lg={4} md={4} sm={11} xs={11} align='center'>
						<Paper className='paper'>
							<Card className='crd' variant='elevation'>
								<CardActionArea className='gridcar'>
									
									<CardMedia
										className='gridcar-img'
										component='img'
										alt='Acido sulfonico'
										image={lubri1}
										onClick={handleClickOpen}
									/>
								</CardActionArea>
							</Card>
						</Paper>
					</Grid>
					<Grid item xl={4} lg={4} md={4} sm={11} xs={11}>
						<Paper className='paper'>
							<Card className='crd' variant='elevation'>
								<CardActionArea className='gridcar'>
									<CardMedia
										className='gridcar-img'
										component='img'
										alt='Varsol'
										image={lubri2}
										onClick={handleClickOpen2}

									/>
								</CardActionArea>
							</Card>
						</Paper>
					</Grid>
					<Grid item xl={4} lg={4} md={4} sm={11} xs={11}>
						<Paper className='paper'>
							<Card className='crd' variant='elevation'>
								<CardActionArea className='gridcar'>
									<CardMedia
										className='gridcar-img'
										component='img'
										alt='Infineum P5096'
										image={base}
										onClick={handleClickOpen3}
									/>
								</CardActionArea>
							</Card>
						</Paper>
					</Grid>
				</Grid>
				
				
		<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      > 
        <DialogContent>
		<img  src={lubri1} className='gridcar-img' alt="fireSpot"/>
        </DialogContent>
		</Dialog>

		<Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>
		<img  src={lubri2} className='gridcar-img' alt="fireSpot"/>
        </DialogContent>
		</Dialog>

		<Dialog
        open={open3}
        onClose={handleClose3}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>
		<img  src={base} className='gridcar-img' alt="fireSpot"/>
        </DialogContent>
		</Dialog>
			
			
			
			
			
			
			
			</div>
		</div>
	)
}