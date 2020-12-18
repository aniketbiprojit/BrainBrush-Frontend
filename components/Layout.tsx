import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => (
	<div>
		<Head>
			<title>BrainBrush</title>
			<link rel='stylesheet' href='https://bootswatch.com/4/flatly/bootstrap.min.css'></link>
		</Head>
		<Navbar />
		{/* {props.children} */}
	</div>
)

export default Layout
