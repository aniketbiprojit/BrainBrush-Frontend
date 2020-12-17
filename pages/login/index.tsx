import firebase from 'firebase'
import React, { Component, Fragment } from 'react'
import { firebase_config } from '..'

interface ILoginProps {}

interface ILoginState {
	displayName: String
}

export default class Login extends Component<ILoginProps, ILoginState> {
	constructor(props: ILoginProps) {
		super(props)
	}

	componentDidMount() {
		if (firebase.apps.length === 0) {
			firebase.initializeApp(firebase_config)
		}
	}

	state = {
		displayName: '',
	}

	render() {
		return (
			<Fragment>
				<a href='#'>
					<h1
						onClick={async (e) => {
							e.preventDefault()
							const provider = new firebase.auth.GoogleAuthProvider()
							const user = await firebase.auth().signInWithPopup(provider)
							const { displayName } = user.user
							this.setState({ displayName })
						}}
					>
						Login
					</h1>
				</a>
				<br />
				<h1>{this.state.displayName}</h1>
			</Fragment>
		)
	}
}
