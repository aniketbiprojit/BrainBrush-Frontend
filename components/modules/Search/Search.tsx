import SearchBar from '../SearchBar/SearchBar'

const Search = (props) => {
	return (
		<div>
			<div id='header text' className=''>
				Get up to date with the latest happenings!
			</div>
			<SearchBar msg='Seach for Listings, Revenue...' />
			<div id='recent'></div>
		</div>
	)
}

export default Search
