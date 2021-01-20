import Head from 'next/head'
import Navbar from '../../modules/Navbar/Navbar'
import Footer from '../../modules/Footer/Footer'
import Search from '../../modules/Search/Search'
import Features from '../../modules/Features/Features'
import Reviews from '../../modules/Reviews/Reviews'
import Blogs from '../../modules/Blogs/Blogs'
import React from 'react'

class Layout extends React.Component {
	componentDidMount() {
		window.addEventListener('scroll', (e) => {
			if (window.pageYOffset >= document.getElementById('features').offsetTop - window.innerHeight / 2) {
				document.getElementById('nav-container').classList.add('bg-primary')
				document.getElementById('nav-container').classList.add('shadow-xl')
				document.getElementById('nav-container').classList.remove('bg-transparent')
				document.getElementById('searchbar').classList.add('sm:flex')
			} else {
				document.getElementById('nav-container').classList.add('bg-transparent')
				document.getElementById('nav-container').classList.remove('bg-primary')
				document.getElementById('nav-container').classList.remove('shadow-xl')
				document.getElementById('searchbar').classList.add('hidden')
				document.getElementById('searchbar').classList.remove('sm:flex')
			}
		})
	}

	render() {
		return (
			<div className='bg-gray-200'>
				<Head>
					<title>BrainBrush</title>
					<meta name='viewport' content='width=device-width, initial-scale=0.70, maximum-scale=0.70'></meta>
				</Head>
				{/* return top navbar */}
				<Navbar />
				{/* Returns Main Search Box */}
				<div id='search'>
					<Search />
				</div>
				<div className='' id='features'>
					<Features />
				</div>
				<div className='' id='blogs'>
					<Blogs />
				</div>
				<div className='p-0 m-0'>
					<Reviews />
				</div>
				{/* REMOVED EMAILER */}
				{/* <div className='px-24 lg:px-0'>
					<SearchWithButton msg='Sign up to get date with our Newsletter!' placeholder="We won't send you spam :)" button='Login' />
				</div> */}
				{/* Returns Footer */}
				<Footer />
			</div>
		)
	}
}

export default Layout
