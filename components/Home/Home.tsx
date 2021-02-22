/**
 * This is the home page
 *
 * it imports all sections from layouts
 */
import Head from 'next/head'
import React from 'react'

import Blogs from './Blogs/Blogs'
import Features from './Features/Features'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Reviews from './Reviews/Reviews'
import Search from './Search/Search'

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
