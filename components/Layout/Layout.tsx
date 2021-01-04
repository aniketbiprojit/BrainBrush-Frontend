import Head from 'next/head'
import Navbar from '../Navbar/Navbar'
import Emailer from '../Emailer/Emailer'
import Footer from '../Footer/Footer'

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
