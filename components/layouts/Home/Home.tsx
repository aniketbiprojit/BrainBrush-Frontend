import Head from 'next/head'
import Navbar from '../../modules/Navbar/Navbar'
import SearchWithButton from '../../modules/SearchWithButton/SearchWithButton'
import Footer from '../../modules/Footer/Footer'
import Search from '../../modules/Search/Search'
import Features from '../../modules/Features/Features'
import Reviews from '../../modules/Reviews/Reviews'

const Layout = (props) => (
	<div>
		<Head>
			<title>BrainBrush</title>
		</Head>
		{/* return top navbar */}
		<Navbar />
		{/* Returns Main Search Box */}
		<div className='mt-20'>
			<Search />
		</div>
		{/* Returns Emailer */}
		<div className='mt-20'>
			<Features />
		</div>
		<div className='mt-20'>
			<Reviews />
		</div>
		<div className='m-20'>
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

export default Layout
