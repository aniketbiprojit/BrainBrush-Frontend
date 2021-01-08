import SearchWithButton from '../SearchWithButton/SearchWithButton'

const Search = (props) => {
	const styles = {
		container: 'flex flex-col items-center w-screen pt-10',
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
		</div>
	)
}

export default Search
