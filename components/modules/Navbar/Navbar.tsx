// React
import React from 'react'
// NextJs Link
import Link from 'next/link'

import SearchCompact from '../Search/SearchCompact'

const Navbar = (props) => {
	const links = [
		{ href: '#', label: 'Home' },
		{ href: '#', label: 'Companies' },
		{ href: '#', label: 'Register' },
	]

	const styles = {
		container: 'bg-transparent duration-300 fixed z-10 w-screen object-top flex items-center justify-between p-8 h-28',
		logo: 'text-white font-semibold flex-wrap no-underline pr-4 ml-0 pl-0 md:ml-10 md:text-2xl',
		button: {
			container: 'flex items-center justify-between space-x-5',
			text: 'text-white no-underline hover:text-yellow-300 font-bold',
			button: 'text-gray-600 font-semibold bg-primary-highlight py-2 px-4 mr-0 md:mr-10 rounded red-button',
		},
	}

	return (
		<nav>
			<ul className={styles.container} id='nav-container'>
				<li>
					<Link href='/'>
						<a className={styles.logo}>Brainbrush</a>
					</Link>
				</li>
				<div className='flex justify-center w-full'>
					<SearchCompact msg='Search for companies, listing ...' setAnim='true' />
				</div>

				<ul className={styles.button.container}>
					{links.map(({ href, label }) => (
						<li key={`${href}${label}`}>
							<a href={href} className={styles.button.text}>
								{label}
							</a>
						</li>
					))}

					<li>
						<a href='#' className={styles.button.button}>
							Login
						</a>
					</li>
				</ul>
			</ul>
		</nav>
	)
}

export default Navbar
