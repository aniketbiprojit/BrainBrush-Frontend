import Head from 'next/head'
import Navbar from '../../modules/Navbar/Navbar'
import SearchWithButton from '../../modules/SearchWithButton/SearchWithButton'
import Footer from '../../modules/Footer/Footer'
import Search from '../../modules/Search/Search'

const Layout = (props) => (
	<div>
		<Head>
			<title>BrainBrush</title>
		</Head>
		<Navbar />
		<Search />
		<div className='p-20'>
			<SearchWithButton
				msg='Sign up to get date with our Newsletter!'
				placeholder="We won't send you spam :)"
				button='Login'
				shadow='0 4px 50px rgba(254,109,115,0.33)'
			/>
		</div>
		<Footer />
	</div>
)

export default Layout
