import React, { Fragment } from 'react'

import CompanyHeader from '../../../components/Company/Header'
// import Revenue from './revenue'
import Footer from '../../../components/Home/Footer/Footer'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'

interface CompanyData {
	ticker: string
	stock_market: string
	company: string
}

const Overview: React.FC = () => {
	return <Fragment></Fragment>
}

const Company: React.FC<{ company_data: CompanyData }> = ({ company_data }) => {
	const { query } = useRouter()
	const company = query?.company as string

	return (
		<Fragment>
			<Head>
				<title>{company} | Brainbrush</title>
			</Head>
			<CompanyHeader company={company} />
			<Overview />
			{/* <Revenue company={company} /> */}
			<Footer></Footer>
		</Fragment>
	)
}

export default Company
