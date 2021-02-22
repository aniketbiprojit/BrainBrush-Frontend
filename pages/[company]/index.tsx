import { useRouter } from 'next/dist/client/router'
import React, { Fragment } from 'react'

const Company: React.FC = () => {
	const router = useRouter()
	const { company } = router.query
	return (
		<Fragment>
			<p>{company}</p>
		</Fragment>
	)
}

export default Company
