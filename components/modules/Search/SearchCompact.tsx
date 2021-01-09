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
		container: 'relative w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch hidden sm:flex',
		icon:
			'font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-black rounded-md text-sm bg-white items-center rounded-r-none pl-2 py-3 text-black border-r-0 placeholder-primary',
		text:
			'px-2 py-3 h-10 border border-solid  border-black rounded-md text-sm leading-snug text-black bg-white shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-primary',
	}

	return (
		<div className={styles.container}>
			<div className='flex'>
				<span className={styles.icon}>
					<FontAwesomeIcon icon={faSearch} />
				</span>
			</div>
			<input type='text' className={styles.text} placeholder={props.msg} />
		</div>
	)
}

export default SearchBar
