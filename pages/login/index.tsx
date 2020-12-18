import firebase from 'firebase'
import { connect } from 'react-redux'
import React, { Component, Fragment } from 'react'
import { ConnectedProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ApplicationActions } from '../../redux/states/ApplicationState/ApplicationSlice'
import { RootState } from '../../redux/types'

interface ILoginProps {}

interface ILoginState {
	displayName: String
}

const mapStateToProps = (state: RootState) => ({
	ApplicationState: state.ApplicationState,
})

const dispatchProps = (dispatch) => bindActionCreators({ updateLogin: ApplicationActions.updateLogInStatus }, dispatch)

const connector = connect(mapStateToProps, dispatchProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type CombinedProps = ILoginProps & PropsFromRedux

class Login extends Component<CombinedProps, ILoginState> {
	constructor(props: CombinedProps) {
		super(props)
	}

	componentDidMount() {
		console.log(this.props.ApplicationState)
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
						Google Login
					</h1>
				</a>
				<br />
				<h1>{this.state.displayName}</h1>
			</Fragment>
		)
	}
}

export default connector(Login)
