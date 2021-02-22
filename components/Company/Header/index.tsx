import React, { Fragment } from 'react'
import Navbar from '../../Home/Navbar/Navbar'
import Banner from './Banner'

const CompanyHeader: React.FC<{ company: string }> = ({ company }) => {
	return (
		<Fragment>
			<Navbar navcolor='bg-gray-900'></Navbar>
			<Banner company={company} />
		</Fragment>
	)
}

export default CompanyHeader
