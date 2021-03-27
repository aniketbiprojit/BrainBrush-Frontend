import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'

import React, { useEffect } from 'react'
import { revenue, ExtractType } from '../../../../api/RevenueDataFetch'

import { CompanyHeaderPorted } from '../../../../components/Company/Header/CompanyHeader'

import RevenuePorted from '../../../../components/Company/Revenue/Ported/Revenue/Revenue'
import Footer from '../../../../components/Home/Footer/Footer'

const Revenue: React.FC<{ company: string }> = ({ company }) => {
	const { route, query } = useRouter()
	const isAbsolute = route === '/company/[company]/revenue'

	let revenue_data = ExtractType(revenue)

	if (isAbsolute) {
		company = query.company as string
	}
	useEffect(() => {
		revenue('GOOG')
			.then((res) => {
				revenue_data = res.data
				console.log(revenue_data)
			})
			.catch((err) => console.error(err))
	}, [revenue_data])
	return (
		<>
			{isAbsolute && (
				<>
					<Head>
						<title>{company} Revenue | Brainbrush</title>
					</Head>
					<CompanyHeaderPorted tabValue={1} company={company} />
					{/* <MenuPorted tabValue={1} company={company} /> */}
				</>
			)}
			<>
				<RevenuePorted company={company}></RevenuePorted>
			</>
			{isAbsolute && (
				<>
					<Footer></Footer>
				</>
			)}
		</>
	)
}

export default Revenue
