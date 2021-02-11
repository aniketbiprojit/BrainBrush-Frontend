/** Review Module
 *
 * @param props companyName, msg
 */
const Review = (props: any) => {
	return (
		<div className=''>
			<div className={props.center} id='blog-card'>
				<div className='text-3xl font-semibold  justify-self-start   text-800'>{props.companyName}</div>
				<div className='col-span-2 row-span-4 m-auto text-xl text-justify  justify-self-start  text-700'>
					<p>{props.msg}</p>
				</div>
			</div>
		</div>
	)
}

export default Review
