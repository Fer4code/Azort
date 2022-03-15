import React from 'react';
import { Tooltip, Zoom, Typography } from '@material-ui/core/'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { aromaticos } from "./Products"
import { psolventes_alifaticos } from '../Products';
import '../Styles.css'
import DialogContent from '@material-ui/core/DialogContent';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';			
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import { products } from "./Products"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    content: {
      justifyContent: "center",
    },
    margin: {

        marginRight : "10%"

    }
  });


export default function ResponsiveDialog() {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  	const [expanded, setExpanded] = React.useState(false);
	const [aliexp, setAliexp] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	const handleChange2 = (panel) => (event, isAliexp) => {
		setAliexp(isAliexp ? panel : false);
	};

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  return (
      <div classes={{margin: classes.margin }}>
          <Grid item xl={11} lg={11} md={11} sm={11} xs={11} align='center' className='gitem'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1bh-content"
							id="panel1bh-header"
                            classes={{ content: classes.content }}
						>
							<Typography variant='h5' justifyContent='center' >
                            Aromáticos
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
                            <Typography variant="h6" color="initial" align='justify'>
                            Reciben este nombre debido a los olores intensos, normalmente agradables, que presentan en su mayoría. 
                            El nombre genérico de los hidrocarburos aromáticos mono y policíclicos es "areno" y los radicales derivados 
                            de ellos se llaman radicales "arilo". Todos ellos se pueden considerar derivados del benceno, que es una 
                            molécula cíclica, de forma hexagonal y con un orden de enlace intermedio entre un enlace sencillo y un 
                            doble enlace.
                            </Typography>
                            <Typography variant="h6" color="inherit" align="justify">
                            De ellos, nosotros ofrecemos:
                            </Typography>
                            {aromaticos.map((data,key) => {
                                return(
                                    <Typography>
										<Accordion expanded={aliexp === 'panel2'} onChange={handleChange2('panel2')} style={{marginTop:"1%"}}>
										<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel2bh-content"
										id="panel2bh-header"
                                        key={key}
									>
										<Typography sx={{ width: '33%', flexShrink: 0 }}>
											{data.name}
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography align='left' gutterBottom='true'>
                                            {data.presentation}
										</Typography>
                                        <Typography align='justify'>
                                            {data.use}
										</Typography>
									</AccordionDetails>
								</Accordion>
							</Typography>
                                )
                            })}
							
						</AccordionDetails>
					</Accordion>
        </Grid>
        
  </div>)
}
