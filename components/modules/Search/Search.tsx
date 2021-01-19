import SearchWithButton from './SearchWithButton'

const Search = (props) => {
	const styles = {
		container: 'flex flex-col items-center w-screen pt-96 lg:pt-96 bg-gradient-to-r from-primary to-secondary-dark',
		search: 'grid w-screen px-8 lg:px-20 justify-items-center',
		recent: 'mb-64 mt-10 lg:mb-0',
	}

	return (
		<div className={styles.container} id='nav'>
			<div className={styles.search}>
				<SearchWithButton
					msg='Get up to date with the latest happenings!'
					placeholder='Search for listing, financial reports, companies ...'
					button='Search'
					color='black'
				/>
			</div>
			<div id='recent' className={styles.recent}>
				*Recent searches here*
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
