import SearchCompact from '../Search/SearchCompact.module'

/** Footer Section
 * @param props null
 */
const Footer = (props: any) => {
	const links = [
		{ href: '#', label: 'BrainBrush' },
		{ href: '#', label: 'About Us' },
		{ href: '#', label: 'Privacy Policy' },
		{ href: '#', label: 'FAQs' },
		{ href: '#', label: 'Glossary' },
		{ href: '#', label: 'Contact Us' },
		{ href: '#', label: 'Submit Your Company' },
		{ href: '#', label: 'Advertise with Us' },
		{ href: '#', label: 'Directory' },
		{ href: '#', label: 'Blogs' },
	]

	const styles = {
		container: 'bg-primary flex flex-col lg:flex-row items-center justify-between p-14',
		search: 'justify-items-end w-full p-0 contents-end items-end',
		menu: {
			container: 'flex items-center justify-between space-x-5',
			text: 'text-white no-underline hover:text-secondary-light',
		},
		copy: 'text-white no-underline text-center w-full pt-16',
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
			</div>
			<div className={styles.container}>
				<div className={styles.copy}>© BrainBrush 2020. All rights reserved.</div>
			</div>
		</div>
	)
}

export default Footer
