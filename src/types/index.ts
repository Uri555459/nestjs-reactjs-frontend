export interface IWatchlist {
	id: number | null
	name: string
	assetId: string
	createdAt: string
	updatedAt: string
	user: number | null
}

export interface IUser {
	id: number | null
	firstName: string
	username: string
	email: string
	createdAt: string
	updatedAt: string
	watchlist: IWatchlist[]
}
