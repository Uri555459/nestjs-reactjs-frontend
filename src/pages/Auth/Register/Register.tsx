import { Button, TextField, Typography } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface IRegister {
	setEmail: (value: string) => void
	setPassword: (value: string) => void
	setRepeatPassword: (value: string) => void
	setUsername: (value: string) => void
	setFirstName: (value: string) => void
}

export const Register: FC<IRegister> = ({
	setEmail,
	setFirstName,
	setPassword,
	setRepeatPassword,
	setUsername,
}): JSX.Element => {
	return (
		<>
			<Typography variant='h2' textAlign='center'>
				Регистрация
			</Typography>
			<Typography variant='body1' marginBottom={2} textAlign='center'>
				Введите данные для регистрации
			</Typography>
			<TextField
				fullWidth={true}
				margin='normal'
				label='Имя'
				variant='outlined'
				placeholder='Введите имя'
				onChange={event => setFirstName(event.target.value.trim())}
			/>
			<TextField
				fullWidth={true}
				margin='normal'
				label='Username'
				variant='outlined'
				placeholder='Введите Username'
				onChange={event => setUsername(event.target.value.trim())}
			/>
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
			<TextField
				fullWidth={true}
				margin='normal'
				label='Повторите пароль'
				variant='outlined'
				type='password'
				placeholder='Повторите пароль'
				onChange={event => setRepeatPassword(event.target.value.trim())}
			/>
			<Button
				variant='contained'
				sx={{ marginTop: 2, marginBottom: 2, width: '60%' }}
				type='submit'
			>
				Зарегистрироваться
			</Button>
			<Typography variant='body1'>
				У Вас уже есть аккаунт ?
				<Link to='/login'>
					<span className='inciting-text'>Войти</span>
				</Link>
			</Typography>
		</>
	)
}
