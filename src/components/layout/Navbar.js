import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Divider, Grid, IconButton, Menu, MenuItem, ClickAwayListener } from '@material-ui/core'
import logo from '../img/logoc.svg'
import DehazeIcon from '@material-ui/icons/Dehaze'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	nav: {
		backgroundColor: 'grey',
		width: '100%',
	},
	imagen: {
		maxHeight: '100px',
		margin: 3,
		alignContent: 'center',
		[theme.breakpoints.down('md')]: {
			minHeight: '92px',
			padding: theme.spacing(1),
		},
	},
	items: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	mobile: {
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}))

export default function Navbar() {
	const classes = useStyles()
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleClick = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}
	const right = (
		<>
			<Button color='inherit'>
				<Typography variant='subtitle1' align='center'>
					Inicio
				</Typography>
			</Button>
			<Button color='inherit'>
				<Typography variant='subtitle1' align='center'>
					Acerca de
				</Typography>
			</Button>
			<Button color='inherit'>
				<Typography variant='subtitle1' align='center'>
					Productos
				</Typography>
			</Button>
		</>
	)
	const left = (
		<>
			<Button color='inherit'>
				<Typography variant='subtitle1' align='center'>
					Negocios
				</Typography>
			</Button>
			<Button color='inherit'>
				<Typography variant='subtitle1' align='center'>
					Sabías que?
				</Typography>
			</Button>
			<Button color='inherit'>
				<Typography variant='subtitle1' align='center'>
					Contactos
				</Typography>
			</Button>
		</>
	)

	return (
		<>
			<AppBar position='static' className={classes.nav}>
				<Toolbar>
					<Grid
						container
						alignItems='flex-start'
						justify='flex-start'
						alignContent='center'
						direction='row'
						className={classes.items}
					>
						{right}
					</Grid>
					<Grid
						container
						direction='row'
						justify='center'
						alignItems='center'
						alignContent='center'
						wrap='nowrap'
					>
						<Grid item xs={12} align='center'>
							<img
								src={logo}
								className={classes.imagen}
								onClick={event => (window.location.href = '/')}
								alt='logo'
							/>
						</Grid>
						<Grid item className={classes.mobile} align='right'>
							<div className={classes.sectionMobile}>
								<IconButton edge='end' onClick={handleClick} color='inherit'>
									<DehazeIcon />
									<Menu
										id='simple-menu'
										anchorEl={anchorEl}
										keepMounted
										open={anchorEl}
										onClose={handleClose}
									>
										<MenuItem onClick={handleClose}>Profile</MenuItem>
										<MenuItem onClick={handleClose}>My account</MenuItem>
										<MenuItem onClick={handleClose}>Logout</MenuItem>
									</Menu>
								</IconButton>
							</div>
						</Grid>
					</Grid>

					<Grid
						container
						alignItems='flex-start'
						justify='flex-end'
						direction='row'
						className={classes.items}
					>
						{left}
					</Grid>
				</Toolbar>
			</AppBar>
		</>
	)
}
