import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const links = [
	{ href: '#', label: 'Home' },
	{ href: '#', label: 'Companies' },
	{ href: '#', label: 'Register' },
]

const Navbar = () => {
	return (
		<nav>
			<ul className='bg-primary flex items-center justify-between p-8'>

				{/* LOGO */}
				<li>
					<Link href='/'>
						<a className='text-white font-semibold flex-wrap no-underline'>Brainbrush</a>
					</Link>
				</li>

				{/* SEARCH BAR */}
				<div className='relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch'>
					<div className='flex'>
						<span className='font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-black rounded-full text-sm bg-white items-center rounded-r-none pl-2 py-1 text-black border-r-0 placeholder-primary'>
							<FontAwesomeIcon icon={faSearch} />
						</span>
					</div>
					<input
						type='text'
						className='px-2 py-1 h-8 border border-solid  border-black rounded-full text-sm leading-snug text-black bg-white shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-primary'
						placeholder='Search for forcasts, reports ...'
					/>
				</div>

				{/* BUTTONS */}
				<ul className='flex items-center justify-between space-x-5'>
					{links.map(({ href, label }) => (
						<li key={`${href}${label}`}>
							<a href={href} className='text-white no-underline'>
								{label}
							</a>
						</li>
					))}
					<li>
						<a href='#' className='text-white bg-secondary-light py-2 px-4 rounded red-button'>
							Login
					</a>
					</li>
				</ul>
			</ul>
		</nav>
	)
}

export default Navbar
