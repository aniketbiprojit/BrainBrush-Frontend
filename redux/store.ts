import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

import ReactGA from 'react-ga'

import { createLogger } from 'redux-logger'

if (process.env.GA_INIT) {
	ReactGA.initialize(process.env.GA_INIT)
}

const middleware = [...getDefaultMiddleware()]

const logger = createLogger({
	level: 'debug',
	collapsed: true,
})

middleware.push(logger)

const store = configureStore({
	reducer: rootReducer,
	middleware,
	enhancers: [],
})

export type AppDispatch = typeof store.dispatch

export default store
