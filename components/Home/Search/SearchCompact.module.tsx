// Font Awesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

/** Search bar compact (module)
 * @imports React-icons
 * @imports font-awesome icons
 * @param props msg, setAnim, expand, button
 */
const SearchBar = (props: { expand?: boolean; setAnim?: boolean; button?: string; msg?: string }) => {
	var styles = {
		container: 'w-full sm:w-7/12 lg:w-5/12 flex-wrap hidden lg:flex items-stretch',
		icon:
			'font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-black rounded-md text-sm bg-primary-highlight items-center rounded-l-none pr-3 pl-3 py-2 text-black items-center placeholder-primary red-button',
		text: `${
			props.button === '' ? '' : 'rounded-r-none'
		} px-3 py-3 h-10 border border-solid border-black rounded-md text-sm leading-snug text-black bg-white shadow-none outline-none focus:outline-none w-full font-normal flex-1 border-r-0 placeholder-primary `,
	}

	if (props.expand === true) {
		styles.container = 'flex w-full sm:w-9/12 lg:w-full flex-row items-stretch'
		styles.text += ' font-medium py-6 text-lg'
		styles.icon += ' font-medium text-lg'
	}

	var isAnim = props.setAnim === true ? 'searchbar' : 'searchbar-nonAnim'

	if (isAnim === 'searchbar') {
		styles.container += ' hidden'
	}

	return (
		<section className={styles.container} id={isAnim}>
			<input type='text' className={styles.text} placeholder={props.msg} />
			<div className='flex'>
				{props.button !== '' && (
					<span className={styles.icon}>
						{props.button ? '' : <FontAwesomeIcon icon={faSearch} className='mr-2' />}
						{props.button ? props.button : 'Search'}
					</span>
				)}
			</div>
		</section>
	)
}

export default SearchBar
