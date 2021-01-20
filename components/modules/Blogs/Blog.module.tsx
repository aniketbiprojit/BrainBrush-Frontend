const Blog = (props) => {
	return (
		<div
			className='grid grid-cols-2 grid-rows-6 p-10 mx-10 my-10 duration-300 bg-white border-2 border-gray-400 hover:shadow-xl w-96 align-items-center rounded-2xl'
			id='blog-card'
		>
			<div className='text-4xl font-semibold text-primary justify-self-start'>{props.companyName}</div>
			<div className={'rounded-full w-9 h-9 justify-self-end ' + props.color}></div>
			<div className='col-span-2 row-span-4 m-auto text-sm text-justify text-gray-700 lg:text-md justify-self-start'>{props.msg}</div>
			<button className={'row-start-6 rounded-full red-button mx-2 ' + props.color}>Share</button>
			<button className={'row-start-6 rounded-full red-button mx-2 ' + props.color}>View More</button>
		</div>
	)
}

export default Blog
