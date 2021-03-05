import React, { Fragment } from 'react'
import Box from '../../lib/Box/Box'
import { companies } from './Layout'

export const Related: React.FC = () => {
	return (
		<Fragment>
			<Box className={`flex-grow mx-12 lg:mx-0 max-w-lg px-10 py-20 lg:my-28 rounded-r-none xl:block lg:max-w-1`} heading='Related'>
				{companies.map((company) => {
					return (
						<div key={company.name} className='flex' style={{ alignItems: 'center' }}>
							<div
								style={{ width: '27px', height: '27px', borderRadius: '50%', backgroundColor: `${company.color}` }}
								className='my-4'
							></div>
							<div className='m-2 text-2xl'>{company.name}</div>
						</div>
					)
				})}
			</Box>
		</Fragment>
	)
}
