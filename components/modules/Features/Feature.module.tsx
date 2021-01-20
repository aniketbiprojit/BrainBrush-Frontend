// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

const Feature = (props) => {
	let image
	if (props.pos === 'left') {
		image = 'm-auto row-start-1'
	} else {
		image = 'm-auto row-start-1 lg:col-start-2'
	}

	return (
		<div
			className='grid grid-cols-1 gap-5 p-10 duration-200 bg-white border-2 border-gray-400 lg:h-full lg:w-2/3 lg:grid-cols-2 start align-items-center rounded-2xl'
			id='feature-card'
		>
			<div id='text' className='flex flex-col max-h-max'>
				<div className='pb-10 text-4xl'>Feature Name</div>
				<div className='text-lg text-justify'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat perspiciatis incidunt voluptatum mollitia corporis
					accusamus impedit sint voluptate? Debitis dignissimos vitae veritatis. Mollitia laborum aperiam id rerum excepturi illo neque
					animi rem quo perferendis officiis vitae corrupti perspiciatis consequuntur, quibusdam nemo itaque quia vel accusamus. Laboriosam
					magnam dolores corporis!
				</div>
				<br />
				<div className='text-lg text-justify'>Lorem ipsum dolor adipisicing elit.</div>
				<br />
				<div className='text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
				<br />
				<div className='text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing cumque non?</div>
				<div className='flex items-end justify-center flex-grow mt-12 lg:justify-start'>
					<button className={'row-start-6 w-32 h-10 rounded-full red-button bg-red-300 mx-4'}>Share</button>
					<button className={'row-start-6 w-32 h-10 rounded-full red-button bg-blue-200 mx-4'}>View More</button>
				</div>
			</div>
			<div id='image' className={image}>
				{props.img}
			</div>
		</div>
	)
}

export default Feature
