import type { AppProps } from 'next/app'
import '../styles/globals.css'

import firebase from 'firebase'
import { useEffect } from 'react'
import { Provider } from 'react-redux'

import store from '../redux/store'
import { firebase_config } from './'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		if (firebase.apps.length === 0) {
			firebase.initializeApp(firebase_config)
		}
	}, [])

	return (
		<Provider store={store}>
			<Head>
				<meta name='viewport' content='initial-scale=0.75, maximum-scale=0.75, width=device-width'></meta>
			</Head>
			<Component {...pageProps} />
		</Provider>
	)
}
