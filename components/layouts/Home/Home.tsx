import Head from 'next/head'
import Navbar from '../../modules/Navbar/Navbar'
import Search from '../../modules/Search/Search'
import Features from '../../modules/Features/Features'
import Blogs from '../../modules/Blogs/Blogs'
import Reviews from '../../modules/Reviews/Reviews'
import Footer from '../../modules/Footer/Footer'
import React from 'react'

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
				<Footer />
			</div>
		)
	}
}

export default Home
