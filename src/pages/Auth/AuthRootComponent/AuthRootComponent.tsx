import { Box } from '@mui/material'
import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Login } from '../Login/Login'
import { Register } from '../Register/Register'

import './style.scss'

interface IAuthRootComponent {}

export const AuthRootComponent: FC<IAuthRootComponent> = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const location = useLocation()

	const submitHandler = async (event: { preventDefault: () => void }) => {
		event.preventDefault()
		return { email, password }
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
						<Register />
					) : null}
				</Box>
			</form>
		</div>
	)
}
