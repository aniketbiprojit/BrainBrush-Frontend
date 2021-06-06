import React, { Fragment } from 'react'

import { useRouter } from 'next/router'

export const Company: React.FC = () => {
	const router = useRouter()
	React.useEffect(() => console.log(router), [router])
	return <Fragment>Company</Fragment>
}

export default Company
