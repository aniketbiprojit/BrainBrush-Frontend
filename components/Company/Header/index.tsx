import React, { useEffect, useState } from 'react'
import Navbar from '../../Home/Navbar/Navbar'
import Banner from './Banner/Banner'
import Menu from './Menu/Menu'

const CompanyHeader: React.FC<{ company: string }> = ({ company }) => {
	const [minimize, setMinimize] = useState(false)

	useEffect(() => {
		function handleScroll() {
			return () => {
				if (window.pageYOffset > 100) {
					if (minimize === false) {
						setMinimize(true)
					}
				} else {
					if (minimize === true) {
						setMinimize(false)
					}
				}
			}
		}
		window.addEventListener('scroll', handleScroll())
		return () => window.removeEventListener('scroll', handleScroll)
	})
	return (
		<div className='bg-gray-300'>
			<Navbar minimize={minimize} navcolor='bg-gray-900'></Navbar>
			<div className={minimize ? 'lg:fixed lg:h-6 lg:left-0 lg:right-0' : ''}>
				<Banner minimize={minimize} company={company} />
				<Menu minimize={minimize} currentTab={''} company={company} />
			</div>
			{minimize && <div style={{ height: '40vh' }} />}
		</div>
	)
}

export default CompanyHeader
