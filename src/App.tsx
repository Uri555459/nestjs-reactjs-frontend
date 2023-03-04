import { CssBaseline, ThemeProvider } from '@mui/material'
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AuthRootComponent, Home } from './pages'
import { ColorModeContext, useMode } from './theme'

import { PrivateRoute } from './utils/router/privateRoute'

export const App: FC = () => {
	const [theme, colorMode] = useMode()

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='App'>
					<Routes>
						<Route element={<PrivateRoute />}>
							<Route path='/' element={<Home />} />
						</Route>
						<Route path='login' element={<AuthRootComponent />} />
						<Route path='register' element={<AuthRootComponent />} />
					</Routes>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}
