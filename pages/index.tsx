import React from 'react'
import { RootState } from '../redux/types'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ApplicationActions } from '../redux/states/ApplicationState/ApplicationSlice'

import Layout from '../components/layouts/Home/Home'

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

class HomePage extends React.Component<PropsFromRedux & {}> {
	componentDidMount() {
		console.log(this.props.ApplicationState)
		this.props.updateLogin(true)
		console.log(this.props.ApplicationState)
	}

	render() {
		return <Layout>{/* pass props */}</Layout>
	}
}

export default connector(HomePage)
