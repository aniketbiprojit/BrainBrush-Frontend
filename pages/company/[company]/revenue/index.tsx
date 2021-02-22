import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { Fragment } from 'react'

import CompanyHeader from '../../../../components/Company/Header'

const Revenue: React.FC<{ company: string }> = ({ company }) => {
	const { route, query } = useRouter()
	const isAbsolute = route === '/company/[company]/revenue'
	if (isAbsolute) {
		company = query.company as string
	}
	return (
		<Fragment>
			{isAbsolute && (
				<Fragment>
					<CompanyHeader company={company} />
				</Fragment>
			)}
			<Fragment>
				Relative Page Link to Absolute {company}
				<Link href={`/company/${company}/revenue`}>
					<p>Page</p>
				</Link>
			</Fragment>
		</Fragment>
	)
}

export default Revenue
