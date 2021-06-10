import React, { useEffect, useState } from 'react'
// import { ScrollNavBanner } from './ScrollNavBanner'


export const ScrollNav: React.FC<{ company: string }> = ({ company }) => {
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
		<div className='bg-gray-300 z-50'>
			{/* First nav */}
			<div className={minimize ? 'lg:fixed lg:h-6 lg:left-0 lg:right-0' : ''}>
				{/* <ScrollNavBanner minimize={minimize} company={company} /> */}
				{/* third nav */}
			</div>
			{minimize && <div className='h-0 lg:h-80' />}
		</div>
	)
}

