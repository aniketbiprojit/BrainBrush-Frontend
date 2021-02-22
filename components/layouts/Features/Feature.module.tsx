/** Feature Module
 * @param props pos, img
 */
const Feature = (props: any) => {
	let image: any
	if (props.pos === 'left') {
		image = 'm-auto row-start-1'
	} else {
		image = 'm-auto row-start-1 lg:col-start-2'
	}

	return (
		<section
			className={
				'grid grid-cols-1 gap-5 p-16 lg:p-48 duration-200 lg:h-full lg:w-4/5 lg:grid-cols-2 start align-items-center rounded-2xl ' +
				(props.colored === 'yes' ? ' bg-gradient-to-r from-indigo-900 to-blue-900 text-white ' : '')
			}
			id='feature-card'
		>
			<div id='text' className='flex flex-col max-h-max'>
				<h1 className='mb-24 font-light uppercase text-7xl'>Feature Name</h1>
				<span style={{ height: '3px', width: '250px', backgroundColor: props.colored === 'yes' ? '#eee' : '#333' }} className='mb-24'></span>
				<p className='text-2xl font-thin leading-relaxed text-justify'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat perspiciatis incidunt voluptatum mollitia corporis
					accusamus impedit sint voluptate? Debitis dignissimos vitae veritatis. Mollitia laborum aperiam id rerum excepturi illo neque
					animi rem quo perferendis officiis vitae corrupti perspiciatis consequuntur, quibusdam nemo itaque quia vel accusamus.
				</p>
			</div>
			<image id='image' className={image}>
				{props.img}
			</image>
		</section>
	)
}

export default Feature
