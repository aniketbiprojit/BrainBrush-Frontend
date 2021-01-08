const Emailer = () => {
	const styles = {
		box: 'grid text-center my-20 mx-5 gap-3',
		container: 'justify-self-center relative w-full md:w-7/12 lg:w-5/12 w-3/12 flex-wrap items-stretch flex text-center',
		text:
			'px-4 py-6 h-10 border border-solid border-black rounded-md text-sm leading-snug text-black bg-white shadow-none outline-none focus:outline-none w-full font-normal flex-1 placeholder-primary border-r-0 rounded-r-none',
		button: 'px-4 py-3 border-solid border-black rounded-md text-white bg-grey outline-none red-button rounded-l-none',
		head: 'text-primary text-center text-lg md:text-3xl font-bold',
	}

	return (
		<div className={styles.box}>
			<div className={styles.head}>Sign up to get date with our Newsletter!</div>
			<div
				className={styles.container}
				style={{
					boxShadow: '0 4px 50px rgba(254,109,115,0.33)',
				}}
			>
				<input type='text' className={styles.text} placeholder="We won't send you spam :)" />
				<a href='#' className={styles.button}>
					Login
				</a>
			</div>
		</div>
	)
}

export default Emailer
