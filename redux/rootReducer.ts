import { combineReducers } from '@reduxjs/toolkit'
import { ApplicationReducer } from './states/ApplicationState/ApplicationSlics'

const rootReducer = combineReducers({
	ApplicationState: ApplicationReducer,
})

export default rootReducer
