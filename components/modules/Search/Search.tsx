import SearchWithButton from '../SearchWithButton/SearchWithButton'

const Search = (props) => {
	const styles = {
		container: 'flex flex-col items-center w-screen pt-48 bg-gradient-to-tr from-secondary to-secondary-light',
		search: 'grid w-screen px-20 justify-items-center',
		recent: 'mt-10',
	}

	return (
		<div className={styles.container}>
			<div className={styles.search}>
				<SearchWithButton
					msg='Get up to date with the latest happenings!'
					placeholder='Search for listing, financial reports, companies ...'
					button='Search'
				/>
			</div>
			<div id='recent' className={styles.recent}>
				*Recent searches here*
			</div>
			<svg className='relative w-screen transform translate-y-1' viewBox='0 0 3108 1159' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M554 193.5C386.5 86 135 19 0.5 0.5V1159H3108V480.12C2948.57 344.348 2661.49 288.314 2266.5 391C1953 472.5 1850 537 1434 537C1018 537 725.25 303.407 554 193.5Z'
					fill='#EEEEEE'
				/>
			</svg>
		</div>
	)
}

export default Search
