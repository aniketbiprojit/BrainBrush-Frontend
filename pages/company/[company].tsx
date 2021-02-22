import { useRouter } from 'next/dist/client/router'
import React, { Fragment } from 'react'
import Revenue from './revenue'

const Company: React.FC = () => {
	const router = useRouter()
	const { company } = router.query
	return (
		<Fragment>
			<p>{company}</p>
			<Revenue company={company as string}></Revenue>
		</Fragment>
	)
}

export default Company
