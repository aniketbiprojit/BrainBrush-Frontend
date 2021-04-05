import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { CompanyHeaderPorted } from '../../../../components/Company/Header/CompanyHeader'
import BalanceSheetLayout from '../../../../containers/financial/balance_sheet'
import Footer from '../../../../components/Home/Footer/Footer'

const Finanical: React.FC<{ company: string }> = ({ company }) => {
	const { route, query } = useRouter()
	const isAbsolute = route === '/company/[company]/financial'
	if (isAbsolute) {
		company = query.company as string
	}
	return (
		<>
			{isAbsolute && (
				<>
					<Head>
						<title>{company} Financial | Brainbrush</title>
					</Head>
					<CompanyHeaderPorted symbol={company} tabValue={3} company={company} />
				</>
			)}
			<BalanceSheetLayout company={company} />
			{isAbsolute && (
				<>
					<Footer />
				</>
			)}
		</>
	)
}

export default Finanical
