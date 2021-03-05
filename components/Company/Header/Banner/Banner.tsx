import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import Button from '../../../lib/Button/Button'

function get_company_data(company: string, minimize: boolean) {
	return {
		ticker: 'GOOG',
		stock_market: 'NASDAQ',
		icon: <FaGoogle className={minimize ? 'lg:mr-10 text-8xl' : 'text-6xl'} />,
		company,
	}
}
const Banner: React.FC<{ company: string; minimize: boolean }> = ({ company, minimize = false }) => {
	const { ticker, stock_market, icon } = get_company_data(company, minimize)

	return (
		<>
			<div
				className={`flex flex-col items-center px-56 lg:gap-0 lg:items-start lg:flex-row ${
					minimize ? 'h-26 pt-5 pb-5 bg-gray-300' : 'flex flex-col items-center gap-6 lg:gap-0 lg:items-start lg:flex-row pt-10 pb-10'
				}`}
			>
				{icon}
				<div className='flex flex-col items-center lg:items-start lg:w-full'>
					<h1 className='lg:text-5xl font-semibold text-3xl'>{company}</h1>
					<div className='flex flex-row gap-10 pt-5'>
						<h2>{ticker}</h2>
						<h2>{stock_market}</h2>
					</div>
				</div>
				<div className='lg:mt-2 sm:mt-1 flex-end'>
					<Button text='Follow' />
				</div>
			</div>
		</>
	)
}

export default Banner
