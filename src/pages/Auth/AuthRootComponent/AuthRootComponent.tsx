import { FC, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'

import { instance } from '../../../utils/axios'
import { useAppDispatch } from '../../../utils/hooks'
import { login } from '../../../store/slices/auth'

import { Login } from '../'
import { Register } from '../'

import './style.scss'

export const AuthRootComponent: FC = (): JSX.Element => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [username, setUsername] = useState('')
	const [firstName, setFirstName] = useState('')
	const location = useLocation()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const submitHandler = async (event: { preventDefault: () => void }) => {
		event.preventDefault()

		if (location.pathname === '/login') {
			try {
				const userData = { email, password }
				const user = await instance.post('/auth/login', userData)
				await dispatch(login(user.data))
				navigate('/')
			} catch (error: any) {
				return error.message
			}
		} else {
			if (password !== repeatPassword) return alert('Пароли не совпадают')
			try {
				const userData = { firstName, username, password, email }
				const newUser = await instance.post('/auth/register', userData)
			} catch (error: any) {
				return error.message
			}
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
