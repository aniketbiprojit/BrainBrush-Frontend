import Review from './Review.module'

/** Review Section
 * @imports Review Module
 * @todo Fetch reviews from reviews.json
 */
const Reviews = () => {
	return (
		<div className='flex flex-col justify-center w-full p-4 pt-10 lg:p-20 lg:py-48'>
			<div className='p-6 mb-20 text-5xl font-semibold text-center lg:p-0 text-primary header '>Here from our Customers!</div>
			<div className='flex flex-row flex-wrap justify-center m-auto lg:gap-28 blogs'>
				<Review
					companyName='Miran A.'
					msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi expedita qui perspiciatis, tenetur nostrum facilis quisquam ex aspernatur quam! Blanditiis harum eos rerum cum illo nemo dolorem illum voluptas maiores reiciendis atque, alias explicabo laboriosam aut unde iure eveniet quod iste quasi sit. Dolorem eius asperiores nemo illum placeat!'
					color='bg-yellow-300'
					center='bg-white  grid grid-cols-2 grid-rows-7 gap-5 p-10 mx-2 mb-10 text-center duration-300   border-2 border-grey-600 hover:shadow-xl w-400px lg:mb-0 align-items-center rounded-2xl '
				/>
				<Review
					companyName='John R.'
					msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi expedita qui perspiciatis, tenetur nostrum facilis quisquam ex aspernatur quam! Blanditiis harum eos rerum cum illo nemo dolorem illum voluptas maiores reiciendis atque, alias explicabo laboriosam aut unde iure eveniet quod iste quasi sit. Dolorem eius asperiores nemo illum placeat!'
					color='bg-gray-400'
					center='bg-red grid grid-cols-2 grid-rows-4 gap-5 p-10 mx-2 mb-10 text-center duration-300 whitetext  border-2 border-white-400 hover:shadow-xl w-400px lg:mb-0 align-items-center rounded-2xl'
				/>
				<Review
					companyName='Bella B.'
					msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi expedita qui perspiciatis, tenetur nostrum facilis quisquam ex aspernatur quam! Blanditiis harum eos rerum cum illo nemo dolorem illum voluptas maiores reiciendis atque, alias explicabo laboriosam aut unde iure eveniet quod iste quasi sit. Dolorem eius asperiores nemo illum placeat!'
					color='bg-blue-400'
					center='bg-white grid grid-cols-2 grid-rows-7 gap-5 p-10 mx-2 mb-10 text-center duration-300   border-2 border-grey-600 hover:shadow-xl w-400px lg:mb-0 align-items-center rounded-2xl'
				/>
			</div>
		</div>
	)
}

export default Reviews
