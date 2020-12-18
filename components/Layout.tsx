import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => (
	<div>
		<Head>
			<title>BrainBrush</title>
			{/* USING BOOTSWATCH UNTIL CUSTOM CSS */}
			<link rel='stylesheet' href='https://bootswatch.com/4/flatly/bootstrap.min.css'></link>
		</Head>
		<Navbar />
		<div className='disclaimer container h4'>placeholder css at the moment.</div>
		{/* {props.children} */}
	</div>
)

export default Layout
