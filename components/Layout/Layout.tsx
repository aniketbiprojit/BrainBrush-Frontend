import Head from 'next/head'
import Navbar from '../Navbar/Navbar'

const Layout = (props) => (
	<div>
		<Head>
			<title>BrainBrush</title>
		</Head>
		<Navbar />
		{/* {props.children} */}
	</div>
)

export default Layout
