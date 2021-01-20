const Review = (props) => {
	return (
		<div
			className='grid grid-cols-2 grid-rows-5 gap-5 p-10 mx-5 mb-10 text-center duration-300 bg-white border-2 border-gray-400 hover:shadow-xl w-400px lg:mb-0 align-items-center rounded-2xl'
			id='blog-card'
		>
			<div className='text-4xl font-semibold text-gray-800 justify-self-start'>{props.companyName}</div>
			<div className='col-span-2 row-span-4 m-auto text-xl text-justify text-gray-700 justify-self-start'>
				<p>{props.msg}</p>
			</div>
		</div>
	)
}

export default Review
