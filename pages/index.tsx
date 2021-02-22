import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators } from 'redux'

import Home from '../components/Home/Home'
import { ApplicationActions } from '../redux/states/ApplicationState/ApplicationSlice'
import { RootState } from '../redux/types'

export const firebase_config = {
	apiKey: 'AIzaSyBh2o3MomQpCFYdxLX_cOILJRsrh82HPrk',
	authDomain: 'brainbrush-a7722.firebaseapp.com',
	projectId: 'brainbrush-a7722',
	storageBucket: 'brainbrush-a7722.appspot.com',
	messagingSenderId: '84726731717',
	appId: '1:84726731717:web:3136435aaccd76ddf6b1ac',
}

const mapStateToProps = (state: RootState) => ({
	ApplicationState: state.ApplicationState,
})

const dispatchProps = (dispatch) => bindActionCreators({ updateLogin: ApplicationActions.updateLogInStatus }, dispatch)

const connector = connect(mapStateToProps, dispatchProps)

type PropsFromRedux = ConnectedProps<typeof connector>

/** Root
 * @class HomePage
 * @imports Home
 */
class HomePage extends React.Component<PropsFromRedux & {}> {
	componentDidMount() {
		console.log(this.props.ApplicationState)
		this.props.updateLogin(true)
		console.log(this.props.ApplicationState)

		window.addEventListener('scroll', () => {
			this.scollHandler()
		})
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', () => {
			this.scollHandler()
		})
	}

	private scollHandler() {
		if (window.pageYOffset >= document.getElementById('features').offsetTop - window.innerHeight / 2) {
			document.getElementById('nav-container').classList.add('bg-gray-900')
			document.getElementById('nav-container').classList.add('shadow-xl')
			document.getElementById('nav-container').classList.remove('bg-transparent')
			document.getElementById('searchbar').classList.add('sm:flex')
		} else {
			document.getElementById('nav-container').classList.add('bg-transparent')
			document.getElementById('nav-container').classList.remove('bg-gray-900')
			document.getElementById('nav-container').classList.remove('shadow-xl')
			document.getElementById('searchbar').classList.add('hidden')
			document.getElementById('searchbar').classList.remove('sm:flex')
		}
	}

	render() {
		// Home page found in /Components
		return <Home></Home>
	}
}

export default connector(HomePage)
