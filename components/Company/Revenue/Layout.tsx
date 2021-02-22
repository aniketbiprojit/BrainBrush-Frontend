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
		<>
			<div className='bg-gray-300'>
				<Box heading='Google Revenue' subheading='2012-2018'>
					<div className=''></div>
				</Box>
				<Box heading='Statistics'>
					<div className=''></div>
				</Box>
				<Box heading='Related'>
					<Related></Related>
				</Box>
			</div>
		</>
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
