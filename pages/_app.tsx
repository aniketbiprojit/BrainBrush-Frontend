import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/globals.css'

import firebase from 'firebase'
import { useEffect } from 'react'
// import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'

import store from '../redux/store'
import { firebase_config } from './'

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		if (firebase.apps.length === 0) {
			firebase.initializeApp(firebase_config)
		}
	}, [])

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}

// const makeStore = () => store

// export default withRedux(makeStore)(App)
