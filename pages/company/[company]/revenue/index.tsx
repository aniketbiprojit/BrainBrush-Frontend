import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { CompanyHeaderPorted } from '../../../../components/Company/Header/CompanyHeader'
import Footer from '../../../../components/Home/Footer/Footer'
import RevenueLayout from '../../../../containers/Revenue/Layout'

const Revenue: React.FC<{ company: string }> = ({ company }) => {
	const { route, query } = useRouter()
	const isAbsolute = route === '/company/[company]/revenue'
	if (isAbsolute) {
		company = query.company as string
	}
	return (
		<>
			{isAbsolute && (
				<>
					<Head>
						<title>{company} Revenue | Brainbrush</title>
					</Head>
					<CompanyHeaderPorted tabValue={1} company={company} />
				</>
			)}
			<>
				<RevenueLayout company={company} />
			</>
			{isAbsolute && (
				<>
					<Footer />
				</>
			)}
		</>
	)
}

export default Revenue
