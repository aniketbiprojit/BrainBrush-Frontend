import React, { Fragment } from 'react'
import Navbar from '../layouts/Navbar/Navbar'

const CompanyHeader: React.FC<{ company: string }> = ({ company }) => {
	return (
		<Fragment>
			<Navbar></Navbar>
			CompanyHeader for {company}
		</Fragment>
	)
}

export default CompanyHeader
