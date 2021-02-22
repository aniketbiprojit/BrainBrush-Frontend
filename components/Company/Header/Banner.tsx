import React from 'react'
import { FaGoogle } from 'react-icons/fa'

function get_company_data(company: string) {
	return {
		ticker: 'GOOG',
		stock_market: 'NASDAQ',
	}
}
const Banner: React.FC<{ company: string }> = ({ company }) => {
	const { ticker, stock_market } = get_company_data(company)

	return (
		<div className='flex px-56 py-28'>
			<FaGoogle className='mr-10 align-middle text-8xl center' />
			<div className='flex flex-col'>
				<h1 className='text-5xl font-semibold'>{company}</h1>
				<div className='flex flex-row gap-10 pt-5'>
					<h2>{ticker}</h2>
					<h2>{stock_market}</h2>
				</div>
			</div>
		</div>
	)
}

export default Banner
