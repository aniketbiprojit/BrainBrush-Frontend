const Blog = (props) => {
	return (
		<div
			className='grid grid-cols-2 grid-rows-6 gap-5 p-10 border-2 border-gray-400 shadow-2xl align-items-center rounded-2xl'
			style={{
				height: '33vh',
				width: '33vh',
			}}
		>
			<div className='text-4xl font-semibold text-primary justify-self-start'>{props.companyName}</div>
			<div className={'rounded-full w-9 h-9 justify-self-end ' + props.color}></div>
			<div className='col-span-2 row-span-4 m-auto text-lg text-justify text-gray-700 justify-self-start'>{props.msg}</div>
			<button className={'row-start-6 rounded-full ' + props.color}>Share</button>
			<button className={'row-start-6 rounded-full ' + props.color}>View More</button>
		</div>
	)
}

export default Blog
