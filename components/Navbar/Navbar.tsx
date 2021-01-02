import Link from 'next/link'

const links = [
	{ href: '#', label: 'Home' },
	{ href: '#', label: 'Companies' },
	{ href: '#', label: 'Register' },
]

const Navbar = () => (
	<nav>
		<ul className='bg-primary flex items-center justify-between p-8'>
			<li>
				<Link href='/'>
					<a className='text-white font-semibold no-underline'>Brainbrush</a>
				</Link>
			</li>
			<ul className='flex items-center justify-between space-x-5'>
				{links.map(({ href, label }) => (
					<li key={`${href}${label}`}>
						<a href={href} className='text-white no-underline'>
							{label}
						</a>
					</li>
				))}
				<li>
					<a href='#' className='text-white bg-secondary-light py-2 px-4 rounded'>
						Login
					</a>
				</li>
			</ul>
		</ul>
	</nav>
)

export default Navbar
