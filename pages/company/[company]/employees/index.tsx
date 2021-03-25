import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { CompanyHeaderPorted } from '../../../../components/Company/Header/CompanyHeader'
import { EmployeesLayout } from '../../../../containers/Employees/Layout'
import Footer from '../../../../components/Home/Footer/Footer'

const Revenue: React.FC<{ company: string }> = ({ company }) => {
	const { route, query } = useRouter()
	const isAbsolute = route === '/company/[company]/employees'
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
					<CompanyHeaderPorted tabValue={3} company={company} />
				</>
			)}
			<EmployeesLayout company={company} />
			{isAbsolute && (
				<>
					<Footer />
				</>
			)}
		</>
	)
}

export default Revenue
