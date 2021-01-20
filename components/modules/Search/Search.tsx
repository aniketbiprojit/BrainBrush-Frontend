import SearchWithButton from './SearchWithButton'

// Font Awesome Import
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = (props) => {
	const styles = {
		container: 'flex flex-col items-center w-screen pt-96 lg:pt-96',
		search: 'grid w-screen px-10 lg:px-20 justify-items-center',
		recent: 'mb-64 mt-10 lg:mb-0',
	}

	return (
		<div className={styles.container} id='nav'>
			<div className={styles.search}>
				<SearchWithButton
					line1='Get up to date with the latest happenings!'
					line2='Last updated 15 minutes ago!'
					placeholder='Search for listing, financial reports, companies ...'
					button='Search'
					color='black'
					search='true'
				/>
			</div>
			<div id='recent' className={styles.recent + ' bg-gray-500 bg-opacity-50 p-2 rounded-full px-5'}>
				{/* <FontAwesomeIcon icon='fab fa-google' className='mr-2' /> */}
			</div>
			<svg className='relative w-screen transform translate-y-2' viewBox='0 0 3108 650' fill='none'>
				<path
					d='M554 193.5C386.5 86 135 19 0.5 0.5V1159H3108V480.12C2948.57 344.348 2661.49 288.314 2266.5 391C1953 472.5 1850 537 1434 537C1018 537 725.25 303.407 554 193.5Z'
					fill='rgb(229, 231, 235)'
				/>
			</svg>
		</div>
	)
}

export default Search
