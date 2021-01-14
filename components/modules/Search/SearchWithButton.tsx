/** PROVIDE PROPS
 *
 * @param props.msg >> Main header message
 * @param props.shadow >> Backgroud shadow on div
 * @param props.placeholder >> placeholder msg in search box
 * @param props.button >> button text
 *
 */

const SearchWithButton = (props) => {
	const styles = {
		box: 'grid text-center gap-3 w-full mb-48 mt-20',
		container: 'justify-self-center relative w-full md:w-7/12 lg:w-5/12 w-3/12 flex-wrap items-stretch flex text-center',
		text:
			'px-4 py-2 lg:py-10 h-10 border border-solid border-black rounded-xl text-xs lg:text-2xl leading-snug text-black bg-white shadow-none outline-none focus:outline-none w-full font-normal flex-1 placeholder-primary border-r-0 rounded-r-none',
		button:
			'px-4 py-1 lg:py-6 border-solid border-black rounded-xl text-white text-2xl bg-secondary-light outline-none red-button rounded-l-none',
		head: 'text-primary text-center text-lg md:text-3xl font-bold pb-4',
	}

	if (props.color === 'black') {
		styles.head = 'text-gray-900 text-center text-xl md:text-4xl font-bold pb-4'
		styles.box = 'grid text-center gap-3 w-full'
	}

	return (
		<div className={styles.box}>
			<div className={styles.head}>{props.msg}</div>
			<div
				className={styles.container}
				style={{
					boxShadow: props.shadow,
				}}
			>
				<input type='text' className={styles.text} placeholder={props.placeholder} />
				<a href='#' className={styles.button}>
					{props.button}
				</a>
			</div>
		</div>
	)
}

export default SearchWithButton
