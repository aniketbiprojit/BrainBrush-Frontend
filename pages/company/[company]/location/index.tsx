import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { CompanyHeaderPorted } from '../../../../components/Company/Header/CompanyHeader'
import Footer from '../../../../components/Home/Footer/Footer'

const Location: React.FC<{ company: string }> = ({ company }) => {
	const { route, query } = useRouter()
	const isAbsolute = route === '/company/[company]/location'
	if (isAbsolute) {
		company = query.company as string
	}

	const mystyle = {
		color: 'white',
		backgroundColor: 'DodgerBlue',
		fontSize: '24px',
		fontWeight: 500,
		padding: '10px 15px',
	}

	const DisplayMaps = () => {
		return (
			<div style={{ marginTop: '270px' }}>
				<div style={{ padding: '50px 100px' }}>
					<h1 style={mystyle}>{`${company} Headquarters`}</h1>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.754818719084!2d-73.72122297129906!3d41.109012032698466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2bdb484288c9f%3A0x679ad074612f2571!2sIBM%20Headquarters!5e0!3m2!1sen!2sid!4v1618291035462!5m2!1sen!2sid'
						width='100%'
						height='450'
						frameBorder='0'
						allowFullScreen=''
						aria-hidden='false'
						tabIndex='0'
						style={{ border: 0 }}
					/>
				</div>
			</div>
		)
	}
	return (
		<>
			{isAbsolute && (
				<>
					<Head>
						<title>{company} Location | Brainbrush</title>
					</Head>
					<CompanyHeaderPorted symbol={company} tabValue={6} company={company} />
				</>
			)}
			{DisplayMaps()}
			{isAbsolute && (
				<>
					<Footer />
				</>
			)}
		</>
	)
	// return(
	//     <div>
	//         <iframe
	//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.754818719084!2d-73.72122297129906!3d41.109012032698466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2bdb484288c9f%3A0x679ad074612f2571!2sIBM%20Headquarters!5e0!3m2!1sen!2sid!4v1618291035462!5m2!1sen!2sid"
	//           width="600"
	//           height="450"
	//           frameBorder="0"
	//           allowFullScreen=""
	//           aria-hidden="false"
	//           tabIndex="0"
	//           style={{border:0}}
	//         />
	//     </div>
	// )
}

export default Location
