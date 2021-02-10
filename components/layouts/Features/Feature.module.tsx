/** Feature Module
 * @param props pos, img
 */
const Feature = (props: any) => {
	let image
	if (props.pos === 'left') {
		image = 'm-auto row-start-1'
	} else {
		image = 'm-auto row-start-1 lg:col-start-2'
	}

	return (
		<div
			className='grid grid-cols-1 gap-5 p-10 pt-32 duration-200 bg-transparent lg:h-full lg:w-2/3 lg:grid-cols-2 start align-items-center rounded-2xl'
			id='feature-card'
		>
			<div id='text' className='flex flex-col max-h-max'>
				<div className='mb-24 font-thin text-7xl'>Feature Name</div>
				<div style={{ height: '3px', width: '300px', backgroundColor: '#333' }} className='mb-24'></div>
				<div className='text-3xl font-thin leading-relaxed text-justify'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat perspiciatis incidunt voluptatum mollitia corporis
					accusamus impedit sint voluptate? Debitis dignissimos vitae veritatis. Mollitia laborum aperiam id rerum excepturi illo neque
					animi rem quo perferendis officiis vitae corrupti perspiciatis consequuntur, quibusdam nemo itaque quia vel accusamus.
				</div>
			</div>
			<div id='image' className={image}>
				{props.img}
			</div>
		</div>
	)
}

export default Feature
