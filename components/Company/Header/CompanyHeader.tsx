import React from 'react'

import { Search } from 'react-feather'

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='brand-name'>Brainbrush</div>
			<div className='search-bar'>
				<Search className='search-icon' size='20' />
				<input className='input' placeholder='Search for companies, listing...'></input>
			</div>
			<div className='links'>
				<a href='#0'>Home</a>
				<a href='#0'>Companies</a>
				<a href='#0'>Register</a>
				<a href='#0' className='login'>
					Login
				</a>
			</div>
		</div>
	)
}

class Header extends React.Component {
	state = { header: false }

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

	handleScroll = () => {
		if (window.pageYOffset > 140) {
			if (!this.state.header) {
				this.setState({ header: true })
			}
		} else {
			if (this.state.header) {
				this.setState({ header: false })
			}
		}
	}

	render() {
		return (
			<div className={`header ${this.state.header && 'scrolled'}`}>
				<div className='brand'>
					<div className='brand-image'>
						<img alt='' src='/apple.svg'></img>
					</div>
					<div className='brand-name'>Apple</div>
				</div>
				<div className='links'>
					<a href='#0' className='follow'>
						Follow
					</a>
				</div>
			</div>
		)
	}
}

export const CompanyHeaderPorted = () => {
	return (
		<div>
			<div className='sticky'>
				<Navbar />
				<Header />
			</div>
		</div>
	)
}
