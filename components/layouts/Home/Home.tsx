import Head from 'next/head'
import Navbar from '../../modules/Navbar/Navbar'
import Emailer from '../../modules/Emailer/Emailer'
import Footer from '../../modules/Footer/Footer'
import SearchBar from '../../modules/SearchBar/SearchBar'

const Layout = (props) => (
	<div>
		<Head>
			<title>BrainBrush</title>
		</Head>
		<Navbar />
		<Emailer />
		<Footer />
	</div>
)

export default Layout
