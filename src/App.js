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
import Xileno from './components/parts/Products/iProducts/Xileno'
import Metanol from './components/parts/Products/iProducts/Metanol'
import IPA from './components/parts/Products/iProducts/IPA'
import Etilico from './components/parts/Products/iProducts/Etilico.js'
import Hipoclorito12 from './components/parts/Products/iProducts/Hipoclorito12.js'
import Bsiso32 from './components/parts/Products/iProducts/Bsiso32.js'
import Bsiso46 from './components/parts/Products/iProducts/Bsiso46.js'
import Tecnol90 from './components/parts/Products/iProducts/Tecnol90.js'
import Etanolamina from './components/parts/Products/iProducts/Etanolamina.js'
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
						<Route exact path='/Xileno' component={Xileno} />
						<Route exact path='/Metanol' component={Metanol} />
						<Route exact path='/IPA' component={IPA} />
						<Route exact path='/Etilico' component={Etilico} />
						<Route exact path='/Base_ISO32' component={Bsiso32} />
						<Route exact path='/Base_ISO46' component={Bsiso46} />
						<Route exact path='/Hipoclorito12' component={Hipoclorito12} />
						<Route exact path='/Tecnol90' component={Tecnol90} />
						<Route exact path='/Etanolamina' component={Etanolamina} />

					</div>

					<Footer />
				</div>
			</Router>
		</ThemeProvider>
	)
}

export default App
