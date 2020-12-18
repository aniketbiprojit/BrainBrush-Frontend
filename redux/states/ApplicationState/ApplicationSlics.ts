import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ReduxStateTypes.IApplicationState = {
	loggedIn: false,
}

export const ApplicationSlice = createSlice({
	name: 'ApplicationState',
	initialState,
	reducers: {
		updateLogInStatus(state, action: PayloadAction<boolean>) {
			state.loggedIn = action.payload
		},
	},
})

export const ApplicationActions = ApplicationSlice.actions

export const ApplicationReducer = ApplicationSlice.reducer
