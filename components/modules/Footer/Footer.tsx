const Footer = (props) => {
	const links = [
		{ href: '#', label: 'Home' },
		{ href: '#', label: 'Companies' },
		{ href: '#', label: 'Services' },
		{ href: '#', label: 'Search' },
		{ href: '#', label: 'Register' },
		{ href: '#', label: 'Login' },
	]

	const styles = {
		container: 'bg-primary flex flex-col lg:flex-row items-center justify-between p-14',
		search: 'justify-items-end w-full p-0 contents-end items-end',
		menu: {
			container: 'flex items-center justify-between space-x-5',
			text: 'text-white no-underline hover:text-secondary-light',
		},
		copy: 'text-white no-underline text-center w-full pt-16 border-t border-gray-500',
	}

	return (
		<div>
			<div className={styles.container}>
				<ul className={styles.menu.container}>
					{links.map(({ href, label }) => (
						<li key={`${href}${label}`}>
							<a href={href} className={styles.menu.text}>
								{label}
							</a>
						</li>
					))}
				</ul>
				<div className='flex items-center justify-between px-10 py-5 text-white lg:py-0'>
					<div className='mx-2 text-center'>Contact Us</div>
					<div className='mx-2 text-center'>Privacy Policy</div>
					<div className='mx-2 text-center'>Our Terms & Conditions</div>
				</div>
			</div>
			<div className={styles.container}>
				<div className={styles.copy}>© BrainBrush 2020. All rights reserved.</div>
			</div>
		</div>
	)
}

export default Footer
