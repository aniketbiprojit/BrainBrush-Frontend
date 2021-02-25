import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import Button from '../../../lib/Button/Button'

function get_company_data(company: string) {
	return {
		ticker: 'GOOG',
		stock_market: 'NASDAQ',
		icon: <FaGoogle className='lg:mr-10 text-8xl' />,
		company,
	}
}
const Banner: React.FC<{ company: string; minimize: boolean }> = ({ company, minimize = false }) => {
	const { ticker, stock_market, icon } = get_company_data(company)

	return (
		<>
			<div
				className={`flex flex-col items-center gap-20  px-56 lg:gap-0 lg:items-start lg:flex-row ${
					minimize ? 'h-26 pt-5 pb-5 bg-gray-300' : 'flex flex-col items-center gap-20 lg:gap-0 lg:items-start lg:flex-row py-28'
				}`}
			>
				{icon}
				<div className='flex flex-col items-center lg:items-start lg:w-full'>
					<h1 className='text-5xl font-semibold'>{company}</h1>
					<div className='flex flex-row gap-10 pt-5'>
						<h2>{ticker}</h2>
						<h2>{stock_market}</h2>
					</div>
				</div>
				<div className='mt-2 flex-end'>
					<Button text='Follow' />
				</div>
			</div>
		</>
	)
}

export default Banner
