import React, { Fragment } from 'react'

import Box from '../../lib/Box/Box'

const companies = [
	{ name: 'Netflix', color: '#FF5A5A' },
	{ name: 'Amazon', color: '#3FA7D6' },
	{ name: 'Google', color: '#A8DADC' },
	{ name: 'Lenovo', color: '#EF0000' },
	{ name: 'Samsung', color: '#FFC327' },
	{ name: 'Microsoft', color: '#C4C4C4' },
]

const RevenueLayout = () => {
	return (
		<div className='flex flex-row p-0 m-0 bg-gray-300'>
			<div className='flex flex-col flex-grow gap-20 py-32 px-52'>
				<Box className='p-24 mr-0 mx-52' heading='Google Revenue' subheading='2012-2018'>
					<div className=''></div>
				</Box>
				<Box className='p-24 my-16 mr-0 mx-52' heading='Statistics'>
					<div className=''></div>
				</Box>
			</div>
			<Box className='flex-grow hidden h-full max-w-lg p-24 my-32 rounded-r-none lg:block lg:max-w-2xl' heading='Related'>
				<Related></Related>
			</Box>
		</div>
	)
}

export default RevenueLayout

const Related: React.FC = () => {
	return (
		<Fragment>
			{companies.map((company) => {
				return (
					<div className='flex' style={{ alignItems: 'center' }}>
						<div
							style={{ width: '27px', height: '27px', borderRadius: '50%', backgroundColor: `${company.color}` }}
							className='my-4'
						></div>
						<div className='m-2 text-2xl'>{company.name}</div>
					</div>
				)
			})}
		</Fragment>
	)
}
