import { useRouter } from 'next/dist/client/router'
import React, { Fragment } from 'react'

import CompanyHeader from '../../../components/Company/Header'
import Revenue from './revenue'

const Company: React.FC = () => {
	const router = useRouter()
	const company = router.query.company as string
	return (
		<Fragment>
			<CompanyHeader company={company} />
			<Revenue company={company}></Revenue>
		</Fragment>
	)
}

export default Company
