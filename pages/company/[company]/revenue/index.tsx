import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'
import { Fragment } from 'react'

const Revenue: React.FC<{ company: string }> = ({ company }) => {
	const { route } = useRouter()
	return (
		<Fragment>
			{route === '/company/[company]/revenue' && <Fragment>Header, Navbar, etc. {route}</Fragment>}
			<Fragment>
				Relative Page Link to Absolute
				<Link href={`/company/${company}/revenue`}>
					<p>Page</p>
				</Link>
			</Fragment>
		</Fragment>
	)
}

export default Revenue
