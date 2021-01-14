import Head from 'next/head'
import Navbar from '../../modules/Navbar/Navbar'
import SearchWithButton from '../../modules/Search/SearchWithButton'
import Footer from '../../modules/Footer/Footer'
import Search from '../../modules/Search/Search'
import Features from '../../modules/Features/Features'
import Reviews from '../../modules/Reviews/Reviews'
import Blogs from '../../modules/Blogs/Blogs'
import React from 'react'

class Layout extends React.Component {
	componentDidMount() {
		window.addEventListener('scroll', (e) => {
			if (window.pageYOffset >= document.getElementById('features').offsetTop - window.innerHeight / 1.5) {
				document.getElementById('nav-container').classList.add('bg-primary')
				document.getElementById('nav-container').classList.remove('bg-transparent')
			} else {
				document.getElementById('nav-container').classList.add('bg-transparent')
				document.getElementById('nav-container').classList.remove('bg-primary')
			}
		})
	}

	render() {
		return (
			<div className='bg-gray-200'>
				<Head>
					<title>BrainBrush</title>
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
				<div className=''>
					<SearchWithButton
						msg='Sign up to get date with our Newsletter!'
						placeholder="We won't send you spam :)"
						button='Login'
						shadow='0 4px 50px rgba(254,109,115,0.33)'
					/>
				</div>
				{/* Returns Footer */}
				<Footer />
			</div>
		)
	}
}

export default Layout
