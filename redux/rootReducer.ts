import { combineReducers } from '@reduxjs/toolkit'
import { ApplicationReducer } from './states/ApplicationState/ApplicationSlice'

const rootReducer = combineReducers({
	ApplicationState: ApplicationReducer,
})

export default rootReducer
