import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Button } from '../lib/Button/Button'
// import Button from '../../../lib/Button/Button'

// function get_company_data(company: string, minimize: boolean) {
// 	return {
// 		ticker: 'GOOG',
// 		stock_market: 'NASDAQ',
// 		icon: <FaGoogle className={minimize ? 'lg:mr-10 text-8xl' : 'text-6xl'} />,
// 		company,
// 	}
// }
// export const ScrollNavBanner: React.FC<{ company: string; minimize: boolean }> = ({ company, minimize = false }) => {
// 	const { ticker, stock_market, icon } = get_company_data(company, minimize)

// 	return (
// 		<>
// 			<div
// 				className={`flex flex-col items-center px-56 lg:gap-0 lg:items-start lg:flex-row ${
// 					minimize ? 'h-26 pt-5 pb-5 bg-gray-300' : 'flex flex-col items-center gap-6 lg:gap-0 lg:items-start lg:flex-row pt-10 pb-10'
// 				}`}
// 			>
// 				{icon}
// 				<div className='flex flex-col items-center lg:items-start lg:w-full'>
// 					<h1 className='lg:text-5xl font-semibold text-3xl'>{company}</h1>
// 					<div className='flex flex-row gap-10 pt-5'>
// 						<h2>{ticker}</h2>
// 						<h2>{stock_market}</h2>
// 					</div>
// 				</div>
// 				<div className='lg:mt-2 sm:mt-1 flex-end'>
// 					<Button text='Follow' />
// 				</div>
// 			</div>
// 		</>
// 	)
// }

// const Navbar = () => {
// 	return (
// 		<div className='navbar'>
// 			<div className='brand-name'>Brainbrush</div>
// 			<div className='search-bar'>
// 				<Search className='search-icon' size='20' />
// 				<input className='input' placeholder='Search for companies, listing...'></input>
// 			</div>
// 			<div className='links'>
// 				<a href='#0'>Home</a>
// 				<a href='#0'>Companies</a>
// 				<a href='#0'>Register</a>
// 				<a href='#0' className='login'>
// 					Login
// 				</a>
// 			</div>
// 		</div>
// 	)
// }

// class Header extends React.Component<{ company: string; logo?: string }> {
// 	state = { header: false }

// 	componentDidMount() {
// 		window.addEventListener('scroll', this.handleScroll)
// 	}

// 	handleScroll = () => {
// 		if (window.pageYOffset > 140) {
// 			if (!this.state.header) {
// 				this.setState({ header: true })
// 			}
// 		} else {
// 			if (this.state.header) {
// 				this.setState({ header: false })
// 			}
// 		}
// 	}

// 	render() {
// 		return (
// 			<div className={`header ${this.state.header && 'scrolled'}`}>
// 				<div className='brand'>
// 					<div className='brand-image'>
// 						<img alt='' src={this.props.logo ?? '/apple.svg'}></img>
// 					</div>
// 					<div className='brand-name'>{this.props.company}</div>
// 				</div>
// 				<div className='links'>
// 					<a href='#0' className='follow'>
// 						Follow
// 					</a>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export const CompanyHeaderPorted: React.FC<{
// 	company?: string
// 	tabValue?: any
// 	logo?: string
// 	symbol?: string
// }> = ({ company, tabValue, logo, symbol }) => {
// 	return (
// 		<div>
// 			<div className='sticky'>
// 				{/* <Navbar /> */}
// 				<Header logo={logo} company={company} />
// 				{/* <MenuPorted tabValue={tabValue} company={symbol} /> */}
// 			</div>
// 		</div>
// 	)
// }

 
