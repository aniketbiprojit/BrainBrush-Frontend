import { FaMapMarked, FaMapSigns } from 'react-icons/fa'

import SearchCompact from '../Search/SearchCompact.module'

/** Footer Section
 * @param props null
 */
const Footer = () => {
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
		container: 'bg-gray-900 flex flex-col md:flex-row text-left justify-evenly px-14 py-36',
		menu: {
			header: 'font-bold text-lg p-2 py-8 md:pt-0 text-white flex flex-row',
			icon: 'px-2 text-2xl text-secondary-light',
			container: 'flex flex-col items-right space-x-5',
			text: 'text-gray-400 font-medium no-underline hover:text-secondary-light',
		},
		copyContainer: 'bg-gray-900 flex text-left justify-evenly p-16 border-t border-gray-600',
		copy: 'text-white no-underline text-center w-full',
		search: {
			box: 'flex flex-col justify-start mt-5 md:w-1/3 lg:w-1/4 lg:ml-2 lg:mr-10 lg:mt-0',
			header: 'text-xl font-semibold pt-4 md:pt-0 text-white',
			subheader: 'py-4 text-sm font-semibold text-primary-light',
			terms: {
				box: 'py-4',
				check: 'py-5',
			},
		},
	}

	return (
		<>
			<footer className={styles.container}>
				<h1 className={styles.logo}>Brainbrush</h1>
				<ul className={styles.menu.container} id='footerList'>
					<li className={styles.menu.header}>
						<div className={styles.menu.icon}>
							<FaMapMarked />
						</div>
						<h2>Discover</h2>
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
						<h2>Company</h2>
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
					<h2 className={styles.search.header}>Subscribe to our newsletter!</h2>
					<h3 className={styles.search.subheader}>Don't worry, we won't spam you.</h3>
					<SearchCompact msg='Your Name ...' expand={true} button='' />
					<br />
					<SearchCompact msg='Your Email ...' expand={true} button='Subscribe' />
					<div className={styles.search.terms.check}>
						<label htmlFor='box-1'>
							I agree to the <span className='text-secondary-light hover:text-gray-300'>Terms and Conditions</span>
						</label>
					</div>
				</div>
			</footer>
			<div className={styles.copyContainer}>
				<div className={styles.copy}>© BrainBrush 2020. All rights reserved.</div>
			</div>
		</>
	)
}

export default Footer
