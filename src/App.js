import React from 'react'
import './App.css'
import { Router, Route } from 'react-router-dom'
import Navbar from '../src/components/layout/Navbar'
import { ThemeProvider, Container, CssBaseline } from '@material-ui/core'
import { light } from './assets/theme'
import Landing from './components/layout/Landing'
import Products from './components/layout/Products'
import Footer from './components/layout/Footer'
import Contacts from './components/layout/Contacts'
import Alisol_100 from './components/parts/Products/iProducts/Alisol_100'
import Alisol_150 from './components/parts/Products/iProducts/Alisol_150'
import Alisol_200 from './components/parts/Products/iProducts/Alisol_200'
import Kerosene from './components/parts/Products/iProducts/Kerosene'
import createHistory from 'history/createBrowserHistory'


function App() {
	const history = createHistory()

	return (
		<ThemeProvider theme={light}>
			<Router history={history}>
				<div className='App'>
					<div className='Content'>
						<Navbar />
						<Route exact path='/' component={Landing} />
						<Route exact path='/Products' component={Products} />
						<Route exact path='/Contactos' component={Contacts} />
						<Route exact path='/Alisol_100' component={Alisol_100} />
						<Route exact path='/Alisol_150' component={Alisol_150} />
						<Route exact path='/Alisol_200' component={Alisol_200} />
						<Route exact path='/Kerosene' component={Kerosene} />

					</div>

					<Footer />
				</div>
			</Router>
		</ThemeProvider>
	)
}

export default App
