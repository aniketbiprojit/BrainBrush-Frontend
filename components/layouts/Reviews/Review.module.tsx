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
						'  review  grid grid-cols-2 grid-rows-7 gap-5 p-10 mx-2 mb-10 text-center duration-300   border-2 border-grey-600 hover:shadow-xl w-400px lg:mb-0 align-items-center rounded-2xl ' +
						props.center
					}
					id='blog-card'
				>
					<h1 className='text-3xl font-semibold justify-self-start text-800'>{props.companyName}</h1>
					<p className='col-span-2 row-span-4 m-auto text-xl text-justify justify-self-start text-700'>
						<p>{props.msg}</p>
					</p>
				</div>
			</>
		</Zoom>
	)
}

export default Review
