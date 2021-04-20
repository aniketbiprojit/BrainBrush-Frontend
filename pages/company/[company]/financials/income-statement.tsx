import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import React, { useState } from 'react'
import { CompanyHeaderPorted } from '../../../../components/Company/Header/CompanyHeader'
import FinancialHeader from '../../../../components/Company/Financials/FinancialHeader'
import Footer from '../../../../components/Home/Footer/Footer'
import IncomeStatementLayout from '../../../../containers/financial/income_statement'

const IncomeStatement: React.FC<{ company: string }> = ({ company }) => {
	const { route, query } = useRouter()
	const isAbsolute = route === '/company/[company]/financials/income-statement'
	if (isAbsolute) {
		company = query.company as string
	}

	return (
		<>
			{isAbsolute && (
				<>
					<Head>
						<title>{company} Financials | Brainbrush</title>
					</Head>
					<CompanyHeaderPorted symbol={company} tabValue={2} company={company} />
					<FinancialHeader company={company} />
				</>
			)}
			<IncomeStatementLayout company={company} />
			{isAbsolute && (
				<>
					<Footer></Footer>
				</>
			)}
		</>
	)
}

export default IncomeStatement
