import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IUser } from '../../../types'

interface IAuthState {
	user: IUser
	isLogged: boolean
}

const initialState: IAuthState = {
	user: {
		id: null,
		firstName: '',
		username: '',
		email: '',
		createdAt: '',
		updatedAt: '',
		watchlist: [
			{
				id: null,
				name: '',
				assetId: '',
				createdAt: '',
				updatedAt: '',
				user: null,
			},
		],
	},
	isLogged: false,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload
			state.isLogged = true
		},
	},
})

export const { login } = authSlice.actions

export const authReducer = authSlice.reducer
