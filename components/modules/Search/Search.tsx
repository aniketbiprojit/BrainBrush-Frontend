import SearchWithButton from '../SearchWithButton/SearchWithButton'

const Search = (props) => {
	return (
		<div className='flex flex-col items-center w-screen pt-10'>
			<div className='grid w-screen px-20 justify-items-center'>
				<SearchWithButton
					msg='Get up to date with the latest happenings!'
					placeholder='Search for listing, financial reports, companies ...'
					button='Login'
					nomargins='true'
				/>
				<div id='recent' className='mt-5'>
					*Recent searches here*
				</div>
			</div>
		</div>
	)
}

export default Search
