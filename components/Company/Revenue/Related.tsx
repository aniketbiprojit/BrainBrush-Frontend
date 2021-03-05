import React, { Fragment } from 'react'
import { companies } from './Layout'

export const Related: React.FC = () => {
	return (
		<Fragment>
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
		</Fragment>
	)
}
