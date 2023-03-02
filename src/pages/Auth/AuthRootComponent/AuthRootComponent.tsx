import { Box } from '@mui/material'
import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { instance } from '../../../utils/axios'

import { Login } from '../Login/Login'
import { Register } from '../Register/Register'

import './style.scss'

export const AuthRootComponent: FC = (): JSX.Element => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [username, setUsername] = useState('')
	const [firstName, setFirstName] = useState('')
	const location = useLocation()

	const submitHandler = async (event: { preventDefault: () => void }) => {
		event.preventDefault()

		if (location.pathname === '/login') {
			const userData = { email, password }
			const user = await instance.post('/auth/login', userData)
		} else {
			if (password !== repeatPassword) return alert('Пароли не совпадают')
			const userData = { firstName, username, password, email }
			const newUser = await instance.post('/auth/register', userData)
		}
	}

	return (
		<div className='root'>
			<form className='form' onSubmit={submitHandler}>
				<Box
					display='flex'
					justifyContent='center'
					alignItems='center'
					flexDirection='column'
					maxWidth={640}
					margin='auto'
					padding={5}
					borderRadius={5}
					boxShadow={'5px 5px 10px #ccc'}
				>
					{location.pathname === '/login' ? (
						<Login setEmail={setEmail} setPassword={setPassword} />
					) : location.pathname === '/register' ? (
						<Register
							setEmail={setEmail}
							setFirstName={setFirstName}
							setPassword={setPassword}
							setRepeatPassword={setRepeatPassword}
							setUsername={setUsername}
						/>
					) : null}
				</Box>
			</form>
		</div>
	)
}
