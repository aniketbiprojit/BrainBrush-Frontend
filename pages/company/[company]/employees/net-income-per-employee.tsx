import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import React from 'react'
import { EmployeesLayout } from '../../../../components/Company/Employees/EmployeesLayout'

import { CompanyHeaderPorted } from '../../../../components/Company/Header/CompanyHeader'
import EmployeeHeader from '../../../../components/Company/Employees/EmployeeHeader'
import Footer from '../../../../components/Home/Footer/Footer'

const netIncomePerEmployee: React.FC<{ company: string }> = ({ company }) => {
	const { route, query } = useRouter()
	const isAbsolute = route === '/company/[company]/employees/net-income-per-employee'
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
					Net Income
				</>
			)}
			<EmployeesLayout company={company}></EmployeesLayout>
			{isAbsolute && (
				<>
					<Footer></Footer>
				</>
			)}
		</>
	)
}

export default netIncomePerEmployee
