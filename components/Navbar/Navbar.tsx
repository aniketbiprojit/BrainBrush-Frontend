import Link from 'next/link'
import Head from 'next/head'
import styles from './Navbar.module.css'

const Navbar = () => (
	<div className='container'>
		<nav className={styles.navbar}>
			<div className='container grid'>
				<a href='#' className='navbar-brand m-2'>
					BrainBrush
			    </a>
				<div className='nav-buttons'>
					<ul className='grid grid-4'>
						<li className='nav-item'>
							<Link href='#home'>
								<a className='nav-link'>Home</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='#explore'>
								<a className='nav-link'>Explore</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='#contact'>
								<a className='nav-link'>Contact</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='/login'>
								<a className='nav-link'>Login</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
)

export default Navbar
