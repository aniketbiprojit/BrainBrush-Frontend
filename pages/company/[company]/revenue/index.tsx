import Link from 'next/link'
import React from 'react'
import { Fragment } from 'react'

const Revenue: React.FC<{ company: string }> = ({ company }) => {
	return (
		<Fragment>
			<Link href={`/company/${company}/revenue`}>
				<p>Revenue</p>
			</Link>
		</Fragment>
	)
}

export default Revenue
