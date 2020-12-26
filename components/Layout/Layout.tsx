import Head from 'next/head'
import Navbar from '../Navbar/Navbar'

const Layout = (props) => (
	<div>
		<Head>
			<title>BrainBrush</title>
		</Head>
		<Navbar />
		<div className='disclaimer container h4'>placeholder css at the moment.</div>
		{/* {props.children} */}
	</div>
)

export default Layout
