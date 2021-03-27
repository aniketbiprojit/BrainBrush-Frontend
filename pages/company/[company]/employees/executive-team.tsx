import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import React from 'react'
import ExecutiveTeamLayout from '../../../../containers/Employees/ExecutiveTeamLayout'
import { CompanyHeaderPorted } from '../../../../components/Company/Header/CompanyHeader'
import EmployeeHeader from '../../../../components/Company/Employees/EmployeeHeader'
import Footer from '../../../../components/Home/Footer/Footer'

const ExecutiveTeam: React.FC<{ company: string }> = ({ company }) => {
	const { route, query } = useRouter()
	const isAbsolute = route === '/company/[company]/employees/executive-team'
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
			<ExecutiveTeamLayout />
			{isAbsolute && (
				<>
					<Footer></Footer>
				</>
			)}
		</>
	)
}

export default ExecutiveTeam
