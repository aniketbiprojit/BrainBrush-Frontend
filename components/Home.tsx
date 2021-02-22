/**
 * This is the home page
 *
 * it imports all sections from layouts
 */
import Head from 'next/head'
import React from 'react'

import Blogs from './layouts/Blogs/Blogs'
import Features from './layouts/Features/Features'
import Footer from './layouts/Footer/Footer'
import Navbar from './layouts/Navbar/Navbar'
import Reviews from './layouts/Reviews/Reviews'
import Search from './layouts/Search/Search'

/** HOME PAGE LAYOUT CLASS
 * @class Home
 *
 * @imports Head (nextjs)
 * @imports Navbar Section
 * @imports Search Section
 * @imports Features Section
 * @imports Blogs Section
 * @imports Reviews Section
 * @imports Footer Section
 */
class Home extends React.Component {
	componentDidMount() {
		/** Controls navbar scroll anim
		 * @listens scroll
		 * @todo improve scroll timings
		 */
		window.addEventListener('scroll', (_) => {
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
				<Navbar pad={false} />
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
				<Footer />
			</div>
		)
	}
}

export default Home
