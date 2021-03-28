import Zoom from 'react-reveal/Zoom'
/** Review Module
 *
 * @param props companyName, msg
 */
const Review = (props: any) => {
	return (
		<Zoom>
			{/* empty fragment for ZOOM selection */}
			<>
				<div
					className={
						'review  grid grid-cols-2 grid-rows-7 gap-5 p-10 mx-2 mb-10 text-center duration-300 border-2 border-grey-600 hover:shadow-xl lg:mb-0 align-items-center rounded-2xl pb-28 ' +
						props.center
					}
					id='blog-card'
				>
					<h1 className='col-span-2 text-3xl font-semibold justify-self-start text-800'>{props.companyName}</h1>
					<div className='col-span-2 row-span-4 m-auto text-xl text-justify justify-self-start text-700'>
						<p>{props.msg}</p>
					</div>
				</div>
				<div className='float-right'>
					<img
						className='object-cover rounded-full mt-5 mr-8'
						src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=100'
						alt=''
						style={{ backgroundSize: 'cover', width: '80px', height: '80px' }}
					/>
				</div>
			</>
		</Zoom>
	)
}

export default Review
