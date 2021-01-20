import SearchCompact from '../Search/SearchCompact'

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
		copy: 'text-white no-underline text-center w-full pt-16 lg:border-t lg:border-gray-500',
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
				<div className='flex justify-center mt-5 lg:w-1/3 lg:ml-2 lg:mr-10 lg:mt-0'>
					<SearchCompact msg='Why not subscribe? We don`t spam :)' expand='true' button='Subscribe' />
				</div>
				<div className='flex items-center justify-between py-5 text-white lg:py-0'>
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
