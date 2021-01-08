const Emailer = (props) => {
	const styles = {
		box: 'grid text-center gap-3 w-full',
		container: 'justify-self-center relative w-full md:w-7/12 lg:w-5/12 w-3/12 flex-wrap items-stretch flex text-center',
		text:
			'px-4 py-6 h-10 border border-solid border-black rounded-md text-sm leading-snug text-black bg-white shadow-none outline-none focus:outline-none w-full font-normal flex-1 placeholder-primary border-r-0 rounded-r-none',
		button: 'px-4 py-3 border-solid border-black rounded-md text-white bg-grey outline-none red-button rounded-l-none',
		head: 'text-primary text-center text-lg md:text-3xl font-bold pb-4',
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

export default Emailer
