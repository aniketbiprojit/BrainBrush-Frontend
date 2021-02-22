import React, { Fragment } from 'react'
import { GetServerSideProps } from 'next'

import CompanyHeader from '../../../components/Company/Header'
import Revenue from './revenue'
import Footer from '../../../components/Home/Footer/Footer'

interface CompanyData {
	ticker: string
	stock_market: string
	company: string
}

export const getServerSideProps: GetServerSideProps = async (
	ctx
): Promise<{
	props: {
		company_data: CompanyData
	}
}> => {
	// console.log(ctx.query?.company)
	return {
		props: {
			company_data: {
				ticker: 'GOOG',
				stock_market: 'NASDAQ',
				company: ctx.query.company as string,
			},
			// icon: <FaGoogle className='mr-10 text-8xl center' />,
		},
	}
}

const Overview: React.FC = () => {
	return <Fragment></Fragment>
}

const Company: React.FC<{ company_data: CompanyData }> = ({ company_data }) => {
	const company = company_data.company

	return (
		<Fragment>
			<CompanyHeader company={company} />
			<Overview />
			<Revenue company={company} />
			<Footer></Footer>
		</Fragment>
	)
}

export default Company
