import React from 'react'
import Navbar from '../src/components/layout/Navbar'
import { ThemeProvider, Container, CssBaseline } from '@material-ui/core'
import { light } from './assets/theme'
import Landing from './components/layout/Landing'

function App() {
	return (
		<ThemeProvider theme={light}>
			<div className='App'>
				<Navbar />
				<>
					<Landing />
				</>
			</div>
		</ThemeProvider>
	)
}

export default App
