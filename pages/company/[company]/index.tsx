import React, { Fragment } from 'react'
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'

import CompanyHeader from '../../../components/Company/Header'
import Revenue from './revenue'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	// console.log(ctx.query?.company)
	return {
		props: {
			company_data: {
				ticker: 'GOOG',
				stock_market: 'NASDAQ',
				company: ctx.query.company,
			},
			// icon: <FaGoogle className='mr-10 text-8xl center' />,
		},
	}
}

const Company: React.FC<{ company_data: InferGetServerSidePropsType<typeof getServerSideProps> }> = ({ company_data }) => {
	const company = company_data.company

	return (
		<Fragment>
			<CompanyHeader company={company} />
			<Revenue company={company}></Revenue>
		</Fragment>
	)
}

export default Company
