import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
// import Link from 'next/link'
import React from 'react'

import CompanyHeader from '../../../../components/Company/Header'
import RevenueLayout from '../../../../components/Company/Revenue/Layout'
import Footer from '../../../../components/Home/Footer/Footer'
import BarChart from '../graph/bar'

const data = [
	{
		year: '2015',
		value: 65,
		color: '#0396ff',
	},
	{
		year: '2016',
		value: 108,
		color: '#d9d9d9',
	},
	{
		year: '2017',
		value: 156,
		color: '#457b9d',
	},
	{
		year: '2018',
		value: 170,
		color: '#3fa7d7',
	},
	{
		year: '2019',
		value: 260,
		color: '#a8dadc',
	},
	{
		year: '2020',
		value: 272,
		color: '#a8dadc',
	},
]

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
				<RevenueLayout Chart={() => <BarChart data={data} />} />
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
