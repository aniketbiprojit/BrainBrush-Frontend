import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
// import Link from 'next/link'
import React from 'react'
import { EmployeesLayout } from '../../../../components/Company/Employees/EmployeesLayout'

import { CompanyHeaderPorted } from '../../../../components/Company/Header/CompanyHeader'
import MenuPorted from '../../../../components/Company/Header/MenuPorted'
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
					{/* <MenuPorted tabValue={3} company={company} /> */}
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

export default Revenue
