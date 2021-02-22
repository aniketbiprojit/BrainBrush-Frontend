import React, { Fragment } from 'react'

import Box from '../../lib/Box/Box'

const companies = ['Netflix', 'Amazon', 'Google', 'Lenovo']

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
					<div className='flex'>
						<div className='circle p-2'></div>
						<div className='p-2'>{company}</div>
					</div>
				)
			})}
		</Fragment>
	)
}
