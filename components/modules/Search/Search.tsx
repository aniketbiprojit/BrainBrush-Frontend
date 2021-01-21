import SearchWithButton from './SearchWithButton'

// Font Awesome Import
import { FaGoogle, FaAirbnb, FaAdobe, FaUber } from 'react-icons/fa'

const Search = (props) => {
	const styles = {
		container: 'flex flex-col items-center w-screen pt-96 lg:pt-96',
		search: 'grid w-screen px-10 lg:px-20 justify-items-center',
		recent: 'mb-64 mt-10 lg:mb-0',
	}

	var icon_size = 20

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
			<div id='recent' className={styles.recent + ' bg-gray-400 bg-opacity-50 p-2 rounded-full flex flex-row items-center'}>
				<div className='flex flex-row p-2 px-4 text-lg font-medium duration-100 rounded-full hover:bg-gray-400'>
					<FaGoogle size={icon_size} className='self-center ml-1 mr-1 lg:mr-2 lg:ml-0' />
					Google
				</div>
				<div className='flex flex-row p-2 px-4 text-lg font-medium duration-100 rounded-full hover:bg-gray-400'>
					<FaAirbnb size={icon_size} className='self-center ml-1 mr-1 lg:mr-2 lg:ml-2' />
					Airbnb
				</div>
				<div className='flex flex-row p-2 px-4 text-lg font-medium duration-100 rounded-full hover:bg-gray-400'>
					<FaAdobe size={icon_size} className='self-center ml-1 mr-1 lg:mr-2 lg:ml-2' />
					Adobe
				</div>
				<div className='flex flex-row p-2 px-4 text-lg font-medium duration-100 rounded-full hover:bg-gray-400'>
					<FaUber size={icon_size} className='self-center ml-1 mr-1 lg:mr-2 lg:ml-2' />
					Uber
				</div>
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
