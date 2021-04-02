import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { CompanyHeaderPorted } from '../../../../components/Company/Header/CompanyHeader'
import EmployeeHeader from '../../../../components/Company/Employees/EmployeeHeader'
import EmployeeLayout from '../../../../containers/Employees/EmployeeLayout'
import Footer from '../../../../components/Home/Footer/Footer'

const Employee: React.FC<{ company: string }> = ({ company }) => {
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
					<CompanyHeaderPorted symbol={company} tabValue={3} company={company} />
					<EmployeeHeader company={company} />
				</>
			)}
			<EmployeeLayout company={company} />
			{isAbsolute && (
				<>
					<Footer />
				</>
			)}
		</>
	)
}

export default Employee
