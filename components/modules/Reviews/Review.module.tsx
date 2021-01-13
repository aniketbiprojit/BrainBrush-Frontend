const Review = (props) => {
	return (
		<div
			className='grid grid-cols-2 grid-rows-5 gap-5 p-10 text-center duration-200 bg-white shadow-2xl align-items-center rounded-2xl'
			style={{
				height: '33vh',
				width: '50vh',
			}}
			id='blog-card'
		>
			<div className='text-4xl font-semibold text-gray-800 justify-self-start'>{props.companyName}</div>
			<div className='col-span-2 row-span-4 m-auto text-xl text-justify text-gray-700 justify-self-start'>{props.msg}</div>
		</div>
	)
}

export default Review