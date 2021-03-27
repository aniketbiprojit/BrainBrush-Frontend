import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import React from 'react'
import RevenuePerEmployeeLayout from '../../../../containers/Employees/RevenueEmployeeLayout'
import { CompanyHeaderPorted } from '../../../../components/Company/Header/CompanyHeader'
import EmployeeHeader from '../../../../components/Company/Employees/EmployeeHeader'
import Footer from '../../../../components/Home/Footer/Footer'

const RevenuePerEmployee: React.FC<{ company: string }> = ({ company }) => {
	const { route, query } = useRouter()
	const isAbsolute = route === '/company/[company]/employees/revenue-per-employee'
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
					<EmployeeHeader company={company} />
				</>
			)}
			<RevenuePerEmployeeLayout company={company} />
			{isAbsolute && (
				<>
					<Footer></Footer>
				</>
			)}
		</>
	)
}

export default RevenuePerEmployee
