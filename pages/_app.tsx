import type { AppProps /*, AppContext */ } from 'next/app'
import { useEffect } from 'react'
import { firebase_config } from '.'
import firebase from 'firebase'
import store from '../redux/store'
// import withRedux from 'next-redux-wrapper'

import { Provider } from 'react-redux'

import '../styles/globals.css'

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
