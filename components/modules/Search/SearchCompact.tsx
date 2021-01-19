// Font Awesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

/**
 *
 * @param props.msg: Placeholder Message
 *
 */

const SearchBar = (props) => {
	const styles = {
		container: 'relative w-full sm:w-7/12 lg:w-5/12 px-4 flex-wrap items-stretch hidden sm:flex',
		icon:
			'font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-black rounded-md text-sm bg-primary-highlight items-center rounded-l-none pr-3 pl-3 py-2 text-black border-l-0 items-center placeholder-primary',
		text:
			'px-3 py-3 h-10 border border-solid border-black rounded-md text-sm leading-snug text-black bg-white shadow-none outline-none focus:outline-none w-full font-normal rounded-r-none flex-1 border-r-0 placeholder-primary',
	}

	return (
		<div className={styles.container}>
			<input type='text' className={styles.text} placeholder={props.msg} />
			<div className='flex'>
				<span className={styles.icon}>
					<FontAwesomeIcon icon={faSearch} className='mr-2' />
					Search
				</span>
			</div>
		</div>
	)
}

export default SearchBar
