import { Button, TextField, Typography } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

interface IRegister {
	// setPassword: (password: string) => void
}

export const Register: FC<IRegister> = () => {
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
			/>
			<TextField
				fullWidth={true}
				margin='normal'
				label='Username'
				variant='outlined'
				placeholder='Введите Username'
			/>
			<TextField
				fullWidth={true}
				margin='normal'
				label='Email'
				variant='outlined'
				placeholder='Введите Email'
			/>
			<TextField
				fullWidth={true}
				margin='normal'
				label='Пароль'
				variant='outlined'
				type='password'
				placeholder='Введите пароль'
			/>
			<TextField
				fullWidth={true}
				margin='normal'
				label='Повторите пароль'
				variant='outlined'
				type='password'
				placeholder='Повторите пароль'
			/>
			<Button
				variant='contained'
				sx={{ marginTop: 2, marginBottom: 2, width: '60%' }}
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
