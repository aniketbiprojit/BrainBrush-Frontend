import React from 'react'
import Navbar from '../../Home/Navbar/Navbar'
import Banner from './Banner/Banner'
import Menu from './Menu/Menu'

const CompanyHeader: React.FC<{ company: string }> = ({ company }) => {
	return (
		<div className='bg-gray-300'>
			<Navbar navcolor='bg-gray-900'></Navbar>
			<Banner company={company} />
			<Menu currentTab={''} />
		</div>
	)
}

export default CompanyHeader
