import type { AppProps /*, AppContext */ } from 'next/app'
import { useEffect } from 'react'
import { firebase_config } from '.'
import firebase from 'firebase'

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		if (firebase.apps.length === 0) {
			firebase.initializeApp(firebase_config)
		}
	}, [])

	return <Component {...pageProps} />
}
