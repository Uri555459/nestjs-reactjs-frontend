import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField, Typography } from '@mui/material'

interface ILogin {
	setEmail: (value: string) => void
	setPassword: (value: string) => void
}

export const Login: FC<ILogin> = ({ setEmail, setPassword }): JSX.Element => {
	return (
		<>
			<Typography variant='h2' textAlign='center'>
				Авторизация
			</Typography>
			<Typography variant='body1' marginBottom={2} textAlign='center'>
				Введите логин и пароль
			</Typography>
			<TextField
				fullWidth={true}
				margin='normal'
				label='Email'
				variant='outlined'
				placeholder='Введите Email'
				onChange={event => setEmail(event.target.value.trim())}
			/>
			<TextField
				fullWidth={true}
				margin='normal'
				label='Пароль'
				variant='outlined'
				type='password'
				placeholder='Введите пароль'
				onChange={event => setPassword(event.target.value.trim())}
			/>
			<Button
				variant='contained'
				sx={{ marginTop: 2, marginBottom: 2, width: '60%' }}
				type='submit'
			>
				Войти
			</Button>
			<Typography variant='body1' sx={{}}>
				У Вас нет аккаунта ?
				<Link to='/register'>
					<span className='inciting-text'>Регистрация</span>
				</Link>
			</Typography>
		</>
	)
}
