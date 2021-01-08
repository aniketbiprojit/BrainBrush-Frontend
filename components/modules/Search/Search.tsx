import SearchBar from '../SearchBar/SearchBar'

const Search = (props) => {
	return (
		<div className='flex flex-col items-center w-screen p-20'>
			<div id='header text w-full' className='text-3xl font-semibold text-primary'>
				Get up to date with the latest happenings!
			</div>
			<div className='grid p-8 justify-items-center'>
				<SearchBar msg='Seach for Listings, Revenue...' size='xl' />
			</div>
			<div id='recent'>*Recent searches here*</div>
		</div>
	)
}

export default Search
