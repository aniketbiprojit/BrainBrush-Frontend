import React, { Fragment } from 'react'
import Navbar from '../layouts/Navbar/Navbar'

const CompanyHeader: React.FC<{ company: string }> = ({ company }) => {
	return (
		<Fragment>
			<Navbar navcolor='bg-gray-900'></Navbar>
			<h2>CompanyHeader for {company}</h2>
		</Fragment>
	)
}

export default CompanyHeader
