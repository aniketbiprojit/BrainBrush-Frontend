import { FaMapMarked, FaMapSigns } from 'react-icons/fa'
import SearchCompact from '../Search/SearchCompact.module'

/** Footer Section
 * @param props null
 */
const Footer = (props: any) => {
	const links_discover = [
		{ href: '#', label: 'About Us' },
		{ href: '#', label: 'Blogs' },
		{ href: '#', label: 'FAQs' },
		{ href: '#', label: 'Glossary' },
		{ href: '#', label: 'Directory' },
	]

	const links_company = [
		{ href: '#', label: 'Privacy Policy' },
		{ href: '#', label: 'Contact Us' },
		{ href: '#', label: 'Submit Your Company' },
		{ href: '#', label: 'Advertise with Us' },
	]

	const styles = {
		logo: 'text-4xl font-semibold text-white',
		container: 'bg-primary flex text-left justify-evenly p-14',
		menu: {
			header: 'font-bold text-lg p-2 text-white flex flex-row',
			icon: 'px-2 text-2xl text-secondary-light',
			container: 'flex flex-col items-right space-x-5',
			text: 'text-white no-underline hover:text-secondary-light',
		},
		copy: 'text-white no-underline text-center w-full',
		search: {
			box: 'flex flex-col justify-start mt-5 md:w-1/3 lg:w-1/4 lg:ml-2 lg:mr-10 lg:mt-0',
			header: 'py-2 text-xl font-semibold text-white',
		},
	}

	return (
		<div>
			<div className={styles.container}>
				<div className={styles.logo}>Brainbrush</div>
				<ul className={styles.menu.container} id='footerList'>
					<li className={styles.menu.header}>
						<div className={styles.menu.icon}>
							<FaMapMarked />
						</div>
						Discover
					</li>
					{links_discover.map(({ href, label }) => (
						<li key={`${href}${label}`}>
							<a href={href} className={styles.menu.text}>
								{label}
							</a>
						</li>
					))}
				</ul>
				<ul className={styles.menu.container}>
					<li className={styles.menu.header}>
						<div className={styles.menu.icon}>
							<FaMapSigns />
						</div>
						Company
					</li>
					{links_company.map(({ href, label }) => (
						<li key={`${href}${label}`}>
							<a href={href} className={styles.menu.text}>
								{label}
							</a>
						</li>
					))}
				</ul>
				<div className={styles.search.box}>
					<div className={styles.search.header}>Subscribe to our newsletter!</div>
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
