import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
// import Link from 'next/link'
import React from 'react'

import CompanyHeader from '../../../../components/Company/Header'
import RevenueLayout from '../../../../components/Company/Revenue/Layout'

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
					<CompanyHeader company={company} />
				</>
			)}
			<>
				<RevenueLayout />
			</>
		</>
	)
}

export default Revenue
