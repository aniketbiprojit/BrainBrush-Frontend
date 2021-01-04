import Head from 'next/head'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = (props) => (
	<div>
		<Head>
			<title>BrainBrush</title>
		</Head>
		<Navbar />
		{/* {props.children} */}
		<Footer />
	</div>
)

export default Layout
