import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'

import React, { useEffect, useState } from 'react'
import { ExtractType } from '../../../../api/Commons'
import { companyData } from '../../../../api/CompanyDataFetch'

import { CompanyHeaderPorted } from '../../../../components/Company/Header/CompanyHeader'

import RevenuePorted from '../../../../components/Company/Revenue/Ported/Revenue/Revenue'
import Footer from '../../../../components/Home/Footer/Footer'

const Revenue: React.FC<{ company: string }> = ({ company }) => {
	const { route, query } = useRouter()
	const isAbsolute = route === '/company/[company]/revenue'
	// let revenue_data = ExtractType(revenue)

	if (isAbsolute) {
		company = query.company as string
	}
	const [companyState, setCompanyState] = useState(company)
	const [logo, setLogo] = useState<string>()
	const [revenue, setRevenueState] = useState(ExtractType(companyData))
	useEffect(() => {
		setCompanyState(company)
		if (company !== undefined) {
			companyData(company).then((res) => {
				setCompanyState(res.data.company_name)
				console.log(res.data.logo)
				setLogo(res.data.logo.url)
			})
		}
	}, [company])
	return (
		<>
			{isAbsolute && (
				<>
					<Head>
						<title>{companyState} Revenue | Brainbrush</title>
					</Head>
					<CompanyHeaderPorted logo={logo} tabValue={1} company={companyState} />
					{/* <MenuPorted tabValue={1} company={company} /> */}
				</>
			)}
			<>
				<RevenuePorted company={companyState}></RevenuePorted>
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
