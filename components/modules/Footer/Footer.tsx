import SearchCompact from '../SearchCompact/SearchCompact'

const Footer = () => {
	const links = [
		{ href: '#', label: 'Home' },
		{ href: '#', label: 'Companies' },
		{ href: '#', label: 'Services' },
		{ href: '#', label: 'Search' },
		{ href: '#', label: 'Register' },
		{ href: '#', label: 'Login' },
	]

	const styles = {
		container: 'bg-primary flex items-center justify-between p-8',
		search: 'justify-items-end w-full p-0 contents-end items-end',
		menu: {
			container: 'flex items-center justify-between space-x-5',
			text: 'text-white no-underline hover:text-secondary-light',
		},
		copy: 'text-white no-underline text-center w-full',
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
				<SearchCompact msg='Search across our service...' />
			</div>
			<div className={styles.container}>
				<div className={styles.copy}>© BrainBrush 2020. All rights reserved.</div>
			</div>
		</div>
	)
}

export default Footer
