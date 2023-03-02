import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AuthRootComponent, Home } from './pages'

import { PrivateRoute } from './utils/router/privateRoute'

export const App: FC = () => {
	return (
		<div className='App'>
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route path='/' element={<Home />} />
				</Route>
				<Route path='login' element={<AuthRootComponent />} />
				<Route path='register' element={<AuthRootComponent />} />
			</Routes>
		</div>
	)
}
