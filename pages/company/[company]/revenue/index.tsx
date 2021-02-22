import { useRouter } from 'next/dist/client/router'
// import Link from 'next/link'
import React from 'react'

import CompanyHeader from '../../../../components/Company/Header'

const Revenue: React.FC<{ company: string }> = ({ company }) => {
	const { route, query } = useRouter()
	const isAbsolute = route === '/company/[company]/revenue'
	if (isAbsolute) {
		company = query.company as string
	}
	return (
		<>
			{isAbsolute && (
				<>
					<CompanyHeader company={company} />
				</>
			)}
			<>{/* Relative Page Link to Absolute {company}
				<Link href={`/company/${company}/revenue`}>
					<p>Page</p>
				</Link> */}</>
		</>
	)
}

export default Revenue
