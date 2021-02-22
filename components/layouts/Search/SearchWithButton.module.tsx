// Font Awesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

/** Search with button (Module)
 * @imports Font-Awesome icons
 * @imports React-icons
 * @param props msg, shadow, button, placeholder, line1, line2
 */
const SearchWithButton = (props: any) => {
	const styles = {
		box: 'grid text-center gap-3 w-full mb-48 mt-20',
		container: 'justify-self-center relative w-full md:w-7/12 lg:w-6/12 flex-wrap items-stretch flex text-center',
		text:
			'px-4 py-8 lg:py-10 h-10 border border-solid border-black rounded-xl lg:text-2xl leading-snug text-black bg-white shadow-none outline-none focus:outline-none w-full font-normal flex-1 placeholder-primary border-r-0 rounded-r-none',
		button:
			'px-4 pt-4 lg:py-6 border-solid border-black rounded-xl text-center align-middle h-full text-black text-2xl bg-primary-highlight border-black border outline-none red-button rounded-l-none',
		head: 'text-primary text-center text-xl md:text-3xl font-bold pb-4',
	}

	if (props.color === 'black') {
		styles.head = 'text-gray-300 text-center font-bold'
		styles.box = 'grid text-center gap-5 w-full'
	}

	return (
		<section className={styles.box}>
			<h1 className={styles.head + ' text-3xl md:text-4xl'}>{props.line1}</h1>
			<h2 className={styles.head + ' text-xl md:text-3xl text-primary-highlight'}>{props.line2}</h2>
			<div
				className={styles.container}
				style={{
					boxShadow: props.shadow,
				}}
			>
				<input type='text' className={styles.text} placeholder={props.placeholder} />
				<a href='#' className={styles.button}>
					<FontAwesomeIcon icon={faSearch} className='mx-2' />
					<div className='hidden mx-2 sm:inline-block'>{props.button}</div>
				</a>
			</div>
		</section>
	)
}

export default SearchWithButton
