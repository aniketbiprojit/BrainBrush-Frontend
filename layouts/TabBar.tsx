import React, { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const TabBar: React.FC<{ tab: string }> = ({ tab }) => {
	const { query } = useRouter()

	const tabs = ['finance', 'revenue', 'meta', 'overview']
	return (
		<Fragment>
			{tabs.map((_tab) => {
				return (
					<div className=''>
						<Link
							href={{
								pathname: '/company/[company]/[tab]',
								query: { company: query.company, tab: _tab },
							}}
						>
							<h3 style={{ color: 'purple', cursor: 'pointer' }}>{_tab === tab ? <>Selected: {_tab}</> : <>{_tab}</>}</h3>
						</Link>
					</div>
				)
			})}
		</Fragment>
	)
}
